import React from 'react';
import Webcam from "react-webcam";

function MyWebcam(props) {
    const videoConstraints = {
        width: { min: 480 },
        height: { min: 720 },
        facingMode: { exact: "environment" }
    };

    return (
        <Webcam videoConstraints={videoConstraints}
                height={720}/>
    );
}

export default MyWebcam;