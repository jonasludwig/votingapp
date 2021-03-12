import React from 'react';
import Button from "@material-ui/core/Button";
import {Grid} from "@material-ui/core";
import {Typography} from "@material-ui/core";

function Menu({step, steps, handleNext}) {

    return (
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                style={{ gap: 15 }}>
                <Button
                    variant="contained"
                    color="primary"
                    disabled={step !== steps.start}
                    onClick={handleNext}>
                    Wahlcode scannen
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    disabled={step !== steps.returnCodeDone}
                    onClick={handleNext}>
                    Bestätigungscode scannen
                </Button>
                {step === steps.finish && <Typography variant='h5'>Wahl abgeschlossen.</Typography>}
            </Grid>
    );
}

export default Menu;