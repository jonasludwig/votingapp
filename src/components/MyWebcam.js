import React from 'react';
import Webcam from "react-webcam";

function MyWebcam(props) {
    const videoConstraints = {
        width: { min: 480 },
        height: { min: 720 },
        facingMode: "environment",
        aspectRatio: 0.75
    };

    return (
        <Webcam videoConstraints={videoConstraints}
                audio={false}
                height={720}/>
    );
}

export default MyWebcam;