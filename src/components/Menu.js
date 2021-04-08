import React from 'react';
import Button from "@material-ui/core/Button";
import Box from '@material-ui/core/Box';
import {Grid, Typography} from "@material-ui/core";

function Menu({step, steps, handleNext, firstButton, surveyURL}) {

    return (
        <Grid
            container
            direction="column"
            justify="space-evenly"
            alignItems="center">
            <Button
                variant="contained"
                color="primary"
                    disabled={step !== steps.start}
                    onClick={handleNext}>
                {firstButton}
                </Button>
                <Box m={1}/>
                <Button
                    variant="contained"
                    color="primary"
                    disabled={step !== steps.returnCodeDone}
                    onClick={handleNext}>
                    Bestätigungscode scannen
                </Button>
                <Box m={1}/>
                {step === steps.finish && <Typography variant='h6'>Wahl abgeschlossen.</Typography>}
                {step === steps.finish && <Box m={1}/>}
                {step === steps.finish && <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        var win = window.open(surveyURL, '_self');
                        win.focus();
                    }}>
                    Feedback geben
                </Button>}
            </Grid>
    );
}

export default Menu;