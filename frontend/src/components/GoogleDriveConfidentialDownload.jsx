import React from 'react';
import axios from 'axios';

const API_KEYS = "AIzaSyBjMeYJ2wuNZ72KI1me0N3QUSb7k9Xctuo";
const FolderID = "1Dvi0KWx7jbvfqnT7xUJ0s_RjRzjGIuhG";

// ✅ Export ฟังก์ชันแบบ named export
export async function getFileByName(targetFileName) {
  const url = `https://www.googleapis.com/drive/v3/files`;
  const query = `'${FolderID}' in parents and name = '${targetFileName}'`;

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
const GoogleDriveLinkButton = ({ targetFileName }) => {
  const handleClick = async () => {
    const file = await getFileByName(targetFileName);
    if (file?.directDownloadLink) {
      window.open(file.directDownloadLink, '_blank');
    } else {
      alert('File not found.');
    }
  };

  return (
    <button onClick={handleClick}>
      คลิ้กที่นี่
    </button>
  );
};

export default GoogleDriveLinkButton;
