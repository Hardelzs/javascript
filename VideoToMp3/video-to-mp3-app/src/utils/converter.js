async function convertVideoToMp3(videoUrl) {
    const body = {
        url: videoUrl,
        outputs: {
            renditions: [
                { format: "mp3" }
            ]
        }
    };

    const response = await fetch('https://api.shotstack.io/ingest/v1/sources', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'co5WKF4WBstFgI5JbtEKFYCNR4QlLXZmX83yRUHv'
        },
        body: JSON.stringify(body)
    });

    if (!response.ok) {
        throw new Error('Conversion failed');
    }

    const data = await response.json();
    return data;
}

export { convertVideoToMp3 };