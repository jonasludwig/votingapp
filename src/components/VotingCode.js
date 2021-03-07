import React from 'react';
import MyWebcam from "./MyWebcam";
import Button from "@material-ui/core/Button";

function VotingCode(props) {
    return (
        <div>
            <MyWebcam/>
            {setTimeout(() => props.handleNext, 5000)} /*TODO: Somehow called multiple times...*/
        </div>
    );
}

export default VotingCode;