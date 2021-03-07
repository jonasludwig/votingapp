import React, {useEffect} from 'react';
import MyWebcam from "./MyWebcam";

function ConfirmationCode(props) {
    const [timeoutSet, setTimeoutSet] = React.useState(false);

    useEffect(() => {
        if (timeoutSet === false) {
            setTimeout(() => props.handleNext(), props.timeout);
            setTimeoutSet(true);
        }
    }, [timeoutSet, props]);

    return (
        <div>
            <MyWebcam/>
        </div>
    );
}

export default ConfirmationCode;