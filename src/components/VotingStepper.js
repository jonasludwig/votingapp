import React from 'react';
import {makeStyles} from "@material-ui/core";
import Stepper from "@material-ui/core/Stepper/Stepper";
import StepLabel from "@material-ui/core/StepLabel/StepLabel";
import StepContent from "@material-ui/core/StepContent/StepContent";
import Button from "@material-ui/core/Button";
import Step from "@material-ui/core/Step/Step";
import WelcomeScreen from "./WelcomeScreen";
import VotingCode from "./VotingCode";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    actionsContainer: {
        marginBottom: theme.spacing(2),
    },
    resetContainer: {
        padding: theme.spacing(3),
    },
}));

function VotingStepper(props) {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} orientation="vertical">
                <Step key="1. Willkommen">
                    <StepLabel>1. Willkommen</StepLabel>
                    <StepContent>
                        <WelcomeScreen/>
                        <div className={classes.actionsContainer}>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleNext}
                                className={classes.button}
                            >Next</Button>
                        </div>
                    </StepContent>
                </Step>
                <Step key="zwei">
                    <StepLabel>zwei</StepLabel>
                    <StepContent>
                        <VotingCode/>
                        <div className={classes.actionsContainer}>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleNext}
                                className={classes.button}
                            >Next</Button>
                        </div>
                    </StepContent>
                </Step>
            </Stepper>
        </div>
    );
}

export default VotingStepper;