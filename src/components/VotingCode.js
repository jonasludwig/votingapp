import React, {useEffect} from 'react';
import overlay from "./overlay_voting.png";
import QrScanner from 'qr-scanner';
// eslint-disable-next-line import/no-webpack-loader-syntax
import qrScannerWorkerSource from '!!raw-loader!../../node_modules/qr-scanner/qr-scanner-worker.min.js';
import Webcam from "react-webcam";

QrScanner.WORKER_PATH = URL.createObjectURL(new Blob([qrScannerWorkerSource]));

const correctPassword = "ebri-esp6-hwrv-8542-mqih";
const votingCodes = new Map();
votingCodes.set("lrDyL-Eh0V6-rEv5r-OhPqH","6439");
votingCodes.set("z31p9-GkixB-LOkxP-4zBJD","8971");
votingCodes.set("uGCtm-s175L-gWylC-xpFDz","4789");
votingCodes.set("SzSC0-4gcDC-hR8bN-seWVa","7526");
const scanningInterval = 200;

function VotingCode(props) {
    const [intervalSet, setIntervalSet] = React.useState(false);
    const [webcamReady, setWebcamReady] = React.useState(false);
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
            let nextHandled = false;

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
                            setWebcamReady(true);
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

                            for (const code of votingCodes.keys()){
                                if(result === code){
                                    votingCodeValid = true;
                                    props.setReturnCode(votingCodes.get(result));
                                    break;
                                }
                            }

                            if (result === correctPassword) {
                                passwordValid = true;
                            }

                            if(passwordValid && votingCodeValid){
                                clearInterval(interval);
                                if(!nextHandled){
                                    nextHandled = true;
                                    props.handleNext();
                                }

                            }
                        }).catch(error => console.log('No QR code found. \nPassword: ' + passwordValid + ' VotingCode: ' + votingCodeValid));
                        scanTop = !scanTop;
                    }
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

export default VotingCode;