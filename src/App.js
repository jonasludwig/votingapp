import './App.css';
import "@fontsource/roboto";
import {CssBaseline, Grid} from "@material-ui/core";
import Topnav from "./components/Topnav";
import React from "react";
import Menu from "./components/Menu";
import VotingCode from "./components/VotingCode";
import ReturnCode from "./components/ReturnCode";
import SingleCodeScanner from "./components/SingleCodeScanner";
import FinalisationCode from "./components/FinalisationCode";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import passwordOverlay from "./assets/overlay_password.png"
import confirmationCodeOverlay from "./assets/overlay_confirmation.png"
import OptionSelector from "./components/OptionSelector";

const codeVotingSteps = {
    start: 0,
    scanVotingCode: 1,
    returnCode: 2,
    returnCodeDone: 3,
    scanConfirmationCode: 4,
    finalisationCode: 5,
    finish: 6
};

const improvedOriginalSteps = {
    start: 0,
    password: 1,
    selectOption: 2,
    returnCode: 3,
    returnCodeDone: 4,
    scanConfirmationCode: 5,
    finalisationCode: 6,
    finish: 7
};

function App() {
    const [step, setStep] = React.useState(0);
    const [returnCode, setReturnCode] = React.useState("");

    const handleNext = () => {
        setStep((prevStep) => prevStep + 1);
    };

    return (
        <div>
            <Grid container direction="column">
                <Topnav className="Topnav"/>
                <div className="ContainerStyles">
                    <Router>
                        <Switch>
                            <Route path="/votingapp/original">
                                {(step === improvedOriginalSteps.start || step === improvedOriginalSteps.returnCodeDone || step === improvedOriginalSteps.finish) &&
                                <Menu step={step} steps={improvedOriginalSteps} handleNext={handleNext}
                                      firstButton={"Passwort scannen"} surveyURL={"https://www.soscisurvey.de/"}/>}
                                {step === improvedOriginalSteps.password &&
                                <SingleCodeScanner handleNext={handleNext} code={"ebri-esp6-hwrv-8542-mqih"}
                                                   overlay={passwordOverlay}/>}
                                {step === improvedOriginalSteps.selectOption &&
                                <OptionSelector handleNext={handleNext} setReturnCode={setReturnCode}/>}
                                {step === improvedOriginalSteps.returnCode &&
                                <ReturnCode handleNext={handleNext} returnCode={returnCode}/>}
                                {step === improvedOriginalSteps.scanConfirmationCode &&
                                <SingleCodeScanner handleNext={handleNext} code={"a321-m25n1-ks1p"}
                                                   overlay={confirmationCodeOverlay}/>}
                                {step === improvedOriginalSteps.finalisationCode &&
                                <FinalisationCode handleNext={handleNext}/>}
                            </Route>
                            <Route path="/votingapp">
                                {(step === codeVotingSteps.start || step === codeVotingSteps.returnCodeDone || step === codeVotingSteps.finish) &&
                                <Menu step={step} steps={codeVotingSteps} handleNext={handleNext}
                                      firstButton={"Wahlcode scannen"} surveyURL={"https://www.soscisurvey.de/"}/>}
                                {step === codeVotingSteps.scanVotingCode &&
                                <VotingCode handleNext={handleNext} setReturnCode={setReturnCode}/>}
                                {step === codeVotingSteps.returnCode &&
                                <ReturnCode handleNext={handleNext} returnCode={returnCode}/>}
                                {step === codeVotingSteps.scanConfirmationCode &&
                                <SingleCodeScanner handleNext={handleNext} code={"a321-m25n1-ks1p"}
                                                   overlay={confirmationCodeOverlay}/>}
                                {step === codeVotingSteps.finalisationCode &&
                                <FinalisationCode handleNext={handleNext}/>}
                            </Route>
                        </Switch>
                    </Router>
                </div>
            </Grid>
            <CssBaseline/>
        </div>
    )
        ;
}

export default App;
