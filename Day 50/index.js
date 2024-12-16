const webcamVideo = document.getElementById("webcamVideo");
const constraints = {
    video:{
        width: 1920,
        height: 1080,
        facingMode: "environment",
    }
};


navigator.mediaDevices.getUserMedia({video: true}).then((stream) => {
    webcamVideo.srcObject = stream;
}).catch((error) => {
    console.error(error);
})
