import './App.css';
import "@fontsource/roboto";
import {createMuiTheme, CssBaseline, Grid} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/core/styles";
import Topnav from "./components/Topnav";
import TestStepper from "./components/TestStepper";
import VotingStepper from "./components/VotingStepper";
import React from "react";
import WelcomeScreen from "./components/WelcomeScreen";
import Menu from "./components/Menu";
import VotingCode from "./components/VotingCode";
import ReturnCode from "./components/ReturnCode";
import ConfirmationCode from "./components/ConfirmationCode";
import FinalisationCode from "./components/FinalisationCode";
import EndScreen from "./components/EndScreen";

const steps = {
    start : 0,
    scanVotingCode: 1,
    returnCode: 2,
    returnCodeDone: 3,
    scanConfirmationCode: 4,
    finalisationCode: 5,
    finish: 6
};

function App() {
    const [step, setStep] = React.useState(steps.start);

    const handleNext = () => {
        setStep((prevStep) => prevStep + 1);
    };

    return (
        <div>
            <Grid container direction="column">
                <Topnav className="Topnav"/>
                <div className="ContainerStyles">
                    {step === steps.start && <Menu step={step} steps={steps} handleNext={handleNext}/>}
                    {step === steps.scanVotingCode && <VotingCode handleNext={handleNext} timeout={0}/>} {/*TODO set timeout*/}
                    {step === steps.returnCode && <ReturnCode handleNext={handleNext}/>}
                    {step === steps.returnCodeDone && <Menu step={step} steps={steps} handleNext={handleNext}/>}
                    {step === steps.scanConfirmationCode && <ConfirmationCode handleNext={handleNext} timeout={10000}/>}
                    {step === steps.finalisationCode && <FinalisationCode handleNext={handleNext}/>}
                    {step === steps.finish && <Menu step={step} steps={steps} handleNext={handleNext}/>}
                </div>
            </Grid>
            <CssBaseline/>
        </div>
    );
}

export default App;
