import './App.css';
import "@fontsource/roboto";
import {CssBaseline, Grid} from "@material-ui/core";
import Topnav from "./components/Topnav";
import React from "react";
import Menu from "./components/Menu";
import VotingCode from "./components/VotingCode";
import ReturnCode from "./components/ReturnCode";
import ConfirmationCode from "./components/ConfirmationCode";
import FinalisationCode from "./components/FinalisationCode";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

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
    const [returnCode, setReturnCode] = React.useState("");

    const handleNext = () => {
        setStep((prevStep) => prevStep + 1);
    };

    return (
        <Router>
            <Switch>
                <Route path="/votingapp/original">
                    {/*TODO add original approach here*/}
                </Route>
                <Route path="/votingapp">
                    <div>
                        <Grid container direction="column">
                            <Topnav className="Topnav"/>
                            <div className="ContainerStyles">
                                {step === steps.start && <Menu step={step} steps={steps} handleNext={handleNext}/>}
                                {step === steps.scanVotingCode && <VotingCode handleNext={handleNext} setReturnCode={setReturnCode}/>}
                                {step === steps.returnCode && <ReturnCode handleNext={handleNext} returnCode={returnCode}/>}
                                {step === steps.returnCodeDone && <Menu step={step} steps={steps} handleNext={handleNext}/>}
                                {step === steps.scanConfirmationCode && <ConfirmationCode handleNext={handleNext}/>}
                                {step === steps.finalisationCode && <FinalisationCode handleNext={handleNext}/>}
                                {step === steps.finish && <Menu step={step} steps={steps} handleNext={handleNext}/>}
                            </div>
                        </Grid>
                        <CssBaseline/>
                    </div>
                </Route>
            </Switch>
        </Router>

    );
}

export default App;
