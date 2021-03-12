import React from 'react';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
}));

function WelcomeScreen({step, handleNext}) {
    const classes = useStyles();

    return (
        <div>
            <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}>
               Wahlcode scannen
            </Button>
        </div>
    );
}

export default WelcomeScreen;