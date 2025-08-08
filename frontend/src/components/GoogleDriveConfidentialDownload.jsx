import React from 'react';
import axios from 'axios';

const API_KEYS = "AIzaSyBjMeYJ2wuNZ72KI1me0N3QUSb7k9Xctuo";
const FolderID_contract = "1Dvi0KWx7jbvfqnT7xUJ0s_RjRzjGIuhG";
const FolderID_absence = "12PsAzdRITj7avTm5ytDax8UxVShRMcWm"
// ✅ Export ฟังก์ชันแบบ named export
export async function getFileByName(targetFileName , targetLocation) {
  console.log("tar : ",targetLocation);
  const url = `https://www.googleapis.com/drive/v3/files`;
  let query ; 
  switch (targetLocation){
    case "contract":
      query = `'${FolderID_contract}' in parents and name = '${targetFileName}'`;
      break;
    case "absence":
      query = `'${FolderID_absence}' in parents and name = '${targetFileName}'`;
      break;
    default:
      console.error("Invalid targetLocation:", targetLocation);
      return null;  // หรือ throw error
  }

  try {
    const response = await axios.get(url, {
      params: {
        q: query,
        key: API_KEYS,
        fields: 'files(id, name, mimeType, size, modifiedTime)',
        pageSize: 1
      }
    });

    const file = response.data.files[0];
    console.log(file);

    if (!file) {
      console.log('File not found.');
      return null;
    }

    return {
      ...file,
      directDownloadLink: `https://drive.google.com/uc?export=download&id=${file.id}`
    };
  } catch (error) {
    console.error('Error fetching file:', error.response?.data || error.message);
    return null;
  }
}

// ✅ Component สำหรับปุ่มโหลด
const GoogleDriveLinkButton = ({ targetFileName  , targetLocation }) => {
  const handleClick = async () => {
    const file = await getFileByName(targetFileName , targetLocation );
    if (file?.directDownloadLink) {
      window.open(file.directDownloadLink, '_blank');
    } else {
      alert('File not found.');
    }
  };

  return (
    <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded text-xs w-full sm:w-auto"
    onClick={handleClick}>
      download
    </button>
  );
};

export default GoogleDriveLinkButton;
