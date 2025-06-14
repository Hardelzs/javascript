import { convertVideoToMp3 } from './utils/converter.js';

document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('videoInput');
    const convertButton = document.getElementById('convertButton');
    const statusDisplay = document.getElementById('status');

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

    console.log('covertButton');
    
});