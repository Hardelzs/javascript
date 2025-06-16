const CloudConvert = require('cloudconvert');
const fs = require('fs');
const fetch = require('node-fetch');

const apiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZmM4Y2ViZWYyZjhjNjQ2MTU2OGRkYTBlNjRmZTE2MmU3ZGFlOGIyODllNDQ5OWE0YTNhOGIyZWZkOTg0ZDRiMjYyMzNmNWNkYjJiYmYzMDAiLCJpYXQiOjE3NDk5Mzc5NDAuNTk5MzM0LCJuYmYiOjE3NDk5Mzc5NDAuNTk5MzM2LCJleHAiOjQ5MDU2MTE1NDAuNTk1MDkxLCJzdWIiOiI3MjIwNjg5MiIsInNjb3BlcyI6WyJ1c2VyLnJlYWQiLCJ1c2VyLndyaXRlIiwidGFzay5yZWFkIiwidGFzay53cml0ZSIsIndlYmhvb2sucmVhZCIsIndlYmhvb2sud3JpdGUiLCJwcmVzZXQucmVhZCIsInByZXNldC53cml0ZSJdfQ.YUCuEUyzBJokEZy8Jn2P-JZOFUcaWIJD9CCxxOdx70zuT38pCjBcdoP6a-NcU6yIsswKazEMQNZ1Z1Qy-j2hkA-l0L1dqku5Y2f6Zct7zWlONGgqof1aKa0QeycsU3aASI2w4kzBNaxsi17H6R_5DV0QUJEqnb3IhlKYvXfu9-y8DQsYU3FlYV8RqUFoSkyoxnCZfrBbttXxpWeksB77_sfetf26seo-DbJTsDuqjW9fwpVLuLnr96niwv0_QZjrPly6USJXZneYFBPmf6jPUq2oIvv0ZMSNsPjGNQz-UE_aNNKrVSzlktKiQTIcgR-a6E9gIVXFKc5DJ13bR1KcQ1gO00Ng8213yVnIJrzXEIJVQUkg8p9KzZD3WKnRYoIUnNluoJp4yEhjZtXaLmXdYx9K81zEk7XelaKK3_MV10Hipb4cBiA-TTvEu3WlrPVvPvmm9P40CYjluCxcrjbSRzuFKtQvtAyXy_WEDLkyRVgAcc-3jEOqu-YVHLwmiXOt5lPAcquDJNOsui8mKMMS_xUf_Yiu1m0jsGHLKTQ7n0GA3SX5eFswhLKpkVjzBMXPavJPUeQCMmmwZxNR3B_WS-6iOuYiSlulLI5ryV-DDv7A0FW2aGJ2DUB1CZ8VhEPmilM7DmsjkbjeCWyVQe3PgZsRVt_npVxjW3nuBttEQyo';

const cloudConvert = new CloudConvert(apiKey);

async function convertVideoToMp3(inputFile, outputFile) {
    try {
        const job = await cloudConvert.jobs.create({
            tasks: {
                'import-my-file': {
                    operation: 'import/upload'
                },
                'convert-my-file': {
                    operation: 'convert',
                    input: 'import-my-file',
                    input_format: 'mp4',
                    output_format: 'mp3',
                    engine: 'ffmpeg'
                },
                'export-my-file': {
                    operation: 'export/url',
                    input: 'convert-my-file'
                }
            }
        });

        const uploadTask = job.tasks.filter(
            task => task.name === 'import-my-file'
        )[0];

        // Upload the file
        const inputStream = fs.createReadStream(inputFile);
        await cloudConvert.tasks.upload(uploadTask, inputStream, inputFile);

        // Wait for job completion
        const completedJob = await cloudConvert.jobs.wait(job.id);

        // Get export task
        const exportTask = completedJob.tasks.filter(
            task => task.operation === 'export/url' && task.status === 'finished'
        )[0];

        const fileUrl = exportTask.result.files[0].url;

        // Download the MP3
        const response = await fetch(fileUrl);
        const fileStream = fs.createWriteStream(outputFile);
        await new Promise((resolve, reject) => {
            response.body.pipe(fileStream);
            response.body.on("error", reject);
            fileStream.on("finish", resolve);
        });

        console.log('Conversion complete! Saved as', outputFile);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Example usage:
convertVideoToMp3('input.mp4', 'output.mp3');