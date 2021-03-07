import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import WelcomeScreen from "./WelcomeScreen";
import VotingCode from "./VotingCode";
import ReturnCode from "./ReturnCode";
import ConfirmationCode from "./ConfirmationCode";
import FinalisationCode from "./FinalisationCode";
import EndScreen from "./EndScreen";
import Selection from "./Selection";
import StartingVoting from "./StartingVoting";

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

function getSteps() {
    return ['1. Wahlapp', '2. Auswahl', '3. Wahlprozess starten', '4. Wahl', '5. Prüfcode', '6. Bestätigung', '7. Finalisierung', '8. Abschluss'];
}

function getStepContent(step, handleNext) {
    switch (step) {
        case 0:
            return <WelcomeScreen/>;
        case 1:
            return <Selection/>;
        case 2:
            return <StartingVoting/>;
        case 3:
            return <VotingCode handleNext={handleNext}/>;
        case 4:
            return <ReturnCode/>;
        case 5:
            return <ConfirmationCode/>;
        case 6:
            return <FinalisationCode/>;
        case 7:
            return <EndScreen/>;
        default:
            return 'Unknown step';
    }
}

function getButtonText(step) {
    switch (step) {
        case 0:
            return [true, 'Weiter'];
        case 1:
            return [true, 'Weiter'];
        case 2:
            return [true, 'Verstanden'];
        case 3:
            return [true, '']; {/*TODO change to false to hide button when automatic progress is implemented*/}
        case 4:
            return [true, 'Der Code ist korrekt'];
        case 5:
            return [true, '']; {/*TODO change to false to hide button when automatic progress is implemented*/}
        case 6:
            return [true, 'Der Code ist korrekt'];
        case 7:
            return [false, ''];
        default:
            return [true, 'Next'];
    }
}

export default function TestStepper() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                        <StepContent>
                            {getStepContent(index, handleNext)}
                            {getButtonText(index)[0] &&
                            <div className={classes.actionsContainer}>
                                <div>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleNext}
                                        className={classes.button}
                                    >
                                        {getButtonText(index)[1]}
                                    </Button>
                                </div>
                            </div>}
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
        </div>
    );
}
