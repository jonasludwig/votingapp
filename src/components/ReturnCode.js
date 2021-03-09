import React from 'react';
import Button from "@material-ui/core/Button";
import { Typography } from '@material-ui/core';

function ReturnCode(props) {
    return (
        <div>
            <Typography variant='h4'>Prüfcode</Typography>
            <Typography variant='h4'>7526</Typography>
            <Typography variant='h6' color='textSecondary'>Sollte der Code nicht korrekt sein, kontaktieren Sie den Support!</Typography>
        </div>
    );
}

export default ReturnCode;