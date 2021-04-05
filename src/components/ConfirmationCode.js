import React, {useEffect} from 'react';
import overlay from "./overlay_confirmation.png"
import QrScanner from 'qr-scanner';
// eslint-disable-next-line import/no-webpack-loader-syntax
import qrScannerWorkerSource from '!!raw-loader!../../node_modules/qr-scanner/qr-scanner-worker.min.js';
import Webcam from "react-webcam";

QrScanner.WORKER_PATH = URL.createObjectURL(new Blob([qrScannerWorkerSource]));

const scanningInterval = 200;

function ConfirmationCode(props) {
    const [intervalSet, setIntervalSet] = React.useState(false);
    const [webcamReady, setWebcamReady] = React.useState(false);
    const webcamRef = React.useRef(null);
    const videoConstraints = {
        aspectRatio: 0.75,
        width: {min: 480},
        height: {min: 720},
        facingMode: "environment"
    };

    useEffect(() => {

        let nextHandled = false;

        if (intervalSet === false) {
            let interval = setInterval(() => {
                const imageSrc = webcamRef.current.getScreenshot();

                if (imageSrc === null) {
                    //screenshot not yet available. do nothing
                } else {
                    if(!webcamReady) {
                        setWebcamReady(true);
                    }
                    QrScanner.scanImage(imageSrc).then(result => {
                        console.log(result);
                        if (result === "a321-m25n1-ks1p") {
                            clearInterval(interval);
                            if (!nextHandled) {
                                nextHandled = true;
                                props.handleNext();
                            }
                        }
                    })
                        .catch(error => console.log(error || 'No QR code found.'));
                }
            }, scanningInterval);
            setIntervalSet(true);
        }
    }, [intervalSet, webcamReady, props]);

    return (
        <div className='CameraBox'>
            {webcamReady && <img src={overlay} alt='' className='Overlay'/>}
            <Webcam
                className="Camera"
                videoConstraints={videoConstraints}
                audio={false}
                screenshotFormat="image/jpeg"
                ref={webcamRef}
                onUserMediaError={(error) => console.log(error)}/>
        </div>
    );
}

export default ConfirmationCode;