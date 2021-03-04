import React from 'react';
import Button from "@material-ui/core/Button";

function ReturnCode(props) {
    return (
        <div>
            <h1>Prüfcode</h1>
            <h2>1234</h2>
            <Button variant="contained" color="primary"> Code ist korrekt</Button>
        </div>
    );
}

export default ReturnCode;