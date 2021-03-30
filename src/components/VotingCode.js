import React, {useEffect} from 'react';
import overlay from "./overlay_voting.png";
import QrScanner from 'qr-scanner';
// eslint-disable-next-line import/no-webpack-loader-syntax
import qrScannerWorkerSource from '!!raw-loader!../../node_modules/qr-scanner/qr-scanner-worker.min.js';
import Webcam from "react-webcam";

QrScanner.WORKER_PATH = URL.createObjectURL(new Blob([qrScannerWorkerSource]));

const correctPassword = "ebri-esp6-hwrv-8542-mqih";
const correctVotingCodes = ["lrDyL-Eh0V6-rEv5r-OhPqH", "z31p9-GkixB-LOkxP-4zBJD",
    "uGCtm-s175L-gWylC-xpFDz", "SzSC0-4gcDC-hR8bN-seWVa"]
const scanningInterval = 200;

function codesValid(passwordValid, votingCodeValid, handleNext, interval){
    if(passwordValid && votingCodeValid){
        clearInterval(interval);
        handleNext();
    }
}

function VotingCode(props) {
    const [intervalSet, setIntervalSet] = React.useState(false);
    const webcamRef = React.useRef(null);
    const videoConstraints = {
        width: {min: 510},
        height: {min: 720},
        aspectRatio: 0.75,
        facingMode: "environment"
    }

    useEffect(() => {
        if (intervalSet === false) {

            let passwordValid = false;
            let votingCodeValid = false;
            let scanTop = true;
            let width = 0;
            let height = 0;

            let interval = setInterval(() => {
                const imageSrc = webcamRef.current.getScreenshot();

                if (imageSrc === null) {
                    //screenshot not yet available. do nothing
                } else {
                    if (width === 0 || height === 0) {
                        let image = new Image();
                        image.onload = function () {
                            width = image.width;
                            height = image.height;
                            console.log("Webcam-Screenshot has dimensions " + width + "x" + height);
                        };
                        image.src = imageSrc;
                    } else {
                        //screenshots are available and size is known. Scan image, alternating between scanning the top and the bottom.
                        QrScanner.scanImage(imageSrc, {
                            x: 0,
                            y: scanTop ? 0 : height * 0.4,
                            height: height * 0.6,
                            width: width
                        }).then(result => {
                            console.log(result);

                            if (correctVotingCodes.includes(result)) {
                                votingCodeValid = true;
                            }
                            if (result === correctPassword) {
                                passwordValid = true;
                            }
                            codesValid(passwordValid, votingCodeValid, props.handleNext, interval);
                        }).catch(error => console.log('No QR code found. \nPassword: ' + passwordValid + ' VotingCode: ' + votingCodeValid));
                        scanTop = !scanTop;
                    }
                }
            }, scanningInterval);
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
                height={720}
            />
        </div>
    );
}

export default VotingCode;