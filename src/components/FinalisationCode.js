import React from 'react';
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";

function FinalisationCode(props) {
    return (
        <div>
            <h1>Finalisierungscode</h1>
            <h2>1234-5678</h2>
            <Link to="/endscreen"><Button variant="contained" color="primary"> Code ist korrekt</Button></Link>
        </div>
    );
}

export default FinalisationCode;