import React, {useEffect} from 'react';
import overlay from "./overlay_confirmation.png"
import QrScanner from 'qr-scanner';
//import qrScannerWorkerSource from 'qr-scanner/qr-scanner-worker.min';
// eslint-disable-next-line import/no-webpack-loader-syntax
import qrScannerWorkerSource from '!!raw-loader!../../node_modules/qr-scanner/qr-scanner-worker.min.js';
import Webcam from "react-webcam";

QrScanner.WORKER_PATH = URL.createObjectURL(new Blob([qrScannerWorkerSource]));

function ConfirmationCode(props) {
    const [timeoutSet, setTimeoutSet] = React.useState(false);
    const [intervalSet, setIntervalSet] = React.useState(false);
    const webcamRef = React.useRef(null);
    const videoConstraints = {
        width: {min: 480},
        height: {min: 720},
        facingMode: "environment",
        aspectRatio: 0.75
    };

    useEffect(() => {
        if (timeoutSet === false) {
            setTimeout(() => props.handleNext(), props.timeout);
            setTimeoutSet(true);
        }
    }, [timeoutSet, props]); //TODO use https://github.com/nimiq/qr-scanner to scan for actual qr-codes

    useEffect(() => {
        if (intervalSet === false) {
            setInterval(() => {
                const imageSrc = webcamRef.current.getScreenshot();
                QrScanner.scanImage(imageSrc).then(result => console.log(result))
                    .catch(error => console.log(error || 'No QR code found.'));
            }, 500);
            setIntervalSet(true);
        }
    }, [intervalSet, props]);

    return (
        <div className='CameraBox'>
            <img src={overlay} alt='' className='Overlay'/>
            <Webcam
                className="Camera"
                videoConstraints={videoConstraints}
                audio={false}
                screenshotFormat="image/jpeg"
                ref={webcamRef}
                height={720}/>
        </div>
    );
}

export default ConfirmationCode;