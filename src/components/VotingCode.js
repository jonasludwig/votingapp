import React, {useEffect} from 'react';
import MyWebcam from "./MyWebcam";
import overlay from "./overlay_voting.png";

function VotingCode(props) {
    const [timeoutSet, setTimeoutSet] = React.useState(false);

    useEffect(() => {
        if(timeoutSet === false){
            setTimeout(() => props.handleNext(), props.timeout);
            setTimeoutSet(true);
        }
    }, [timeoutSet, props]);

    return (
        <div className='CameraBox'>
            <img src={overlay} alt='' className='Overlay'/>
            <MyWebcam/>
        </div>
    );
}

export default VotingCode;