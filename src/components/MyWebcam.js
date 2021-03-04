import React from 'react';
import Webcam from "react-webcam";

function MyWebcam(props) {
    const videoConstraints = {
        width: { min: 480 },
        height: { min: 720 },
    };

    return (
        <Webcam videoConstraints={videoConstraints}
                width={480}
                height={720}/>
    );
}

export default MyWebcam;