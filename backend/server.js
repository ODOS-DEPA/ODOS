import express, { json  } from "express";
import axios from "axios";
import { read, utils } from "xlsx";
import { config } from "dotenv";
import cors from "cors";
import rateLimit from "express-rate-limit";
import NodeCache from "node-cache";


config({ path: '../.env' });

const app = express();

const useRateLimit = false;

if (useRateLimit) {
    const limiter = rateLimit({
        windowMs: 10 * 60 * 1000,
        max: 100,
        message: "Too many requests, please try again later. 10 min to rest",
    });
    app.use(limiter);
}

const cache = new NodeCache({ stdTTL: 600 });

// ✅ Middleware
app.use(json());
app.use(
    cors({
        origin: [
            "http://127.0.0.1:3000",
            "http://localhost:3000",
            "https://odos.thaigov.go.th",
            "https://nodomain.space:3000",
            "https://nodomain.space",
        ],
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
        credentials: true,
    })
);

// ✅ Environment Variables
const { CLIENT_ID, CLIENT_SECRET, TENANT_ID, SITE_ID, ITEM_ID, PORT,HOST } =
    process.env;

// ✅ Access Token Function
async function getAccessToken() {
    const cacheKey = "access_token";
    const cachedToken = cache.get(cacheKey);
    if (cachedToken) return cachedToken;

    const url = `https://login.microsoftonline.com/${TENANT_ID}/oauth2/v2.0/token`;
    const data = new URLSearchParams({
        grant_type: "client_credentials",
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        scope: "https://graph.microsoft.com/.default",
    });

    try {
        const response = await axios.post(url, data, {
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
        });
        cache.set(cacheKey, response.data.access_token, 600);
        return response.data.access_token;
    } catch (error) {
        console.error("Error getting access token:", error.response?.data || error.message);
        throw new Error("Unable to get access token");
    }
}

// ✅ Read Excel from OneDrive
async function getExcelFromOneDrive() {
    const cacheKey = "excel_data";
    const cachedData = cache.get(cacheKey);
    if (cachedData) return cachedData;

    const accessToken = await getAccessToken();
    const url = `https://graph.microsoft.com/v1.0/sites/${SITE_ID}/drive/items/${ITEM_ID}/content`;

    try {
        const response = await axios.get(url, {
            headers: { Authorization: `Bearer ${accessToken}` },
            responseType: "arraybuffer",
        });

        const workbook = read(response.data, { type: "buffer" });
        const sheetName = workbook.SheetNames[5]; // ✅ ตรวจสอบว่าชื่อชีตตรง
        const sheet = workbook.Sheets[sheetName];
        const data = utils.sheet_to_json(sheet);

        cache.set(cacheKey, data, 600);
        return data;
    } catch (error) {
        console.error("Error getting Excel file:", error.response?.data || error.message);
        throw new Error("Unable to fetch Excel file");
    }
}

// ✅ API: ค้นหาด้วย Application ID
app.get("/api/search", async (req, res) => {
    const { searchId } = req.query;
    if (!searchId || !/^S\d+$/.test(searchId)) {
        return res.status(400).json({ error: "Invalid ID format. Example: S1234" });
    }

    try {
        const data = await getExcelFromOneDrive();
        const result = data.filter((row) => row.Application_id === searchId);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ✅ API: ค้นหาด้วย Application ID + เบอร์โทร
app.get("/api/searchV", async (req, res) => {
    const { searchId, verifyCode } = req.query;
    if (!searchId || !/^S\d+$/.test(searchId) || !verifyCode) {
        return res.status(400).json({ error: "Invalid parameters. Example: S1234 & verifyCode" });
    }

    try {
        const data = await getExcelFromOneDrive();
        const result = data.filter(
            (row) =>
                row.Application_id === searchId && row["เบอร์โทรศัพท์"] === verifyCode
        );

        if (result.length === 0) {
            return res.status(404).json({ error: "ไม่พบข้อมูลที่ตรงกัน" });
        }

        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, HOST, () => {
    console.log(`✅ Backend running on http://${HOST}:${PORT}`);
});