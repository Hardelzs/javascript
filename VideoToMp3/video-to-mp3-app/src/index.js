// filepath: c:\Users\adewa\vscode\javascript\VideoToMp3\video-to-mp3-app\src\index.js

import { convertVideoToMp3 } from './utils/converter.js';

document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('file-input');
    const convertButton = document.getElementById('convert-button');
    const statusDisplay = document.getElementById('status-display');

    convertButton.addEventListener('click', async () => {
        const file = fileInput.files[0];
        if (!file) {
            statusDisplay.textContent = 'Please select a video file.';
            return;
        }

        statusDisplay.textContent = 'Converting...';
        try {
            const result = await convertVideoToMp3(file);
            statusDisplay.textContent = `Conversion successful! Download your MP3: ${result.downloadUrl}`;
        } catch (error) {
            statusDisplay.textContent = `Error: ${error.message}`;
        }
    });
});