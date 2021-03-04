import React from 'react';
import MyWebcam from "./MyWebcam";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";

function VotingCode(props) {
    return (
        <div>
            <MyWebcam/>
            <Link to="/returncode">
                <Button variant="contained" color="primary"> Code gescannt</Button>
            </Link>
        </div>
    );
}

export default VotingCode;