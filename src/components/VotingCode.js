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

            var passwordValid = false;
            var votingCodeValid = false;

            var interval = setInterval(() => {
                const imageSrc = webcamRef.current.getScreenshot();
                var image = new Image();
                image.onload = function(){
                    QrScanner.scanImage(image, {x: 0, y: 0, height : image.height*0.6, width:image.width }).then(result => {
                        console.log(result);

                        if (correctVotingCodes.includes(result)){
                            votingCodeValid = true;
                        }
                        if (result === correctPassword){
                            passwordValid = true;
                        }
                        codesValid(passwordValid, votingCodeValid, props.handleNext, interval);
                    }).catch(error => console.log('No QR code found. \nPassword: ' + passwordValid + ' VotingCode: ' + votingCodeValid));
                    QrScanner.scanImage(image, {x: 0, y: image.height*0.4, height : image.height*0.6, width: image.width }).then(result => {
                        console.log(result);

                        if (correctVotingCodes.includes(result)){
                            votingCodeValid = true;
                        }
                        if (result === correctPassword){
                            passwordValid = true;
                        }
                        codesValid(passwordValid, votingCodeValid, props.handleNext, interval);
                    }).catch(error => console.log('No QR code found. \nPassword: ' + passwordValid + ' VotingCode: ' + votingCodeValid));
                };
                image.src = imageSrc
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
                height={720}
            />
        </div>
    );
}

export default VotingCode;