import React from 'react';
import MyWebcam from "./MyWebcam";
import Button from "@material-ui/core/Button";

function ConfirmationCode(props) {
    return (
        <div>
            <MyWebcam/>
                <Button variant="contained" color="primary"> Code gescannt</Button>
        </div>
    );
}

export default ConfirmationCode;