import React from 'react';
import Button from "@material-ui/core/Button";
import {Typography} from "@material-ui/core";

function FinalisationCode(props) {
    return (
        <div>
            <Typography variant='h4'>Finalisierungscode</Typography>
            <Typography variant='h4'>4946-0511</Typography>
            <Typography variant='h6' color='textSecondary'>Sollte der Code nicht korrekt sein, kontaktieren Sie den Support!</Typography>
        </div>
    );
}

export default FinalisationCode;