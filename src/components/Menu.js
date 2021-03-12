import React from 'react';
import Button from "@material-ui/core/Button";
import {Grid} from "@material-ui/core";

function Menu({step, steps, handleNext}) {
    return (
        <div>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center">
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
            </Grid>
        </div>
    );
}

export default Menu;