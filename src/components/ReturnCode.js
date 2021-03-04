import React from 'react';
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

function ReturnCode(props) {
    return (
        <div>
            <h1>Prüfcode</h1>
            <h2>1234</h2>
            <Link to="/confirmationcode"><Button variant="contained" color="primary"> Code ist korrekt</Button></Link>
        </div>
    );
}

export default ReturnCode;