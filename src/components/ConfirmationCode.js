import React from 'react';
import MyWebcam from "./MyWebcam";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

function ConfirmationCode(props) {
    return (
        <div>
            <MyWebcam/>
            <Link to="/finalisationcode">
                <Button variant="contained" color="primary"> Code gescannt</Button>
            </Link>
        </div>
    );
}

export default ConfirmationCode;