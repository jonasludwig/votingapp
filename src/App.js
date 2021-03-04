import './App.css';
import "@fontsource/roboto";
import MyWebcam from "./components/MyWebcam";
import WelcomeScreen from "./components/WelcomeScreen";
import ReturnCode from "./components/ReturnCode";
import VotingCode from "./components/VotingCode";
import FinalisationCode from "./components/FinalisationCode";
import ConfirmationCode from "./components/ConfirmationCode";
import EndScreen from "./components/EndScreen";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {CssBaseline, Grid} from "@material-ui/core";
import Topnav from "./components/Topnav";
import Botnav from "./components/Botnav";
import TestStepper from "./components/TestStepper";

function App() {


    return (
        <div>
            <Grid container direction="column">
                <Topnav className="Topnav"/>
                <div className="ContainerStyles">
                    <Router>
                        <Route path="/" exact component={WelcomeScreen}/>
                        <Route path="/webcam" component={MyWebcam}/>
                        <Route path="/votingcode" component={VotingCode}/>
                        <Route path="/returncode" component={ReturnCode}/>
                        <Route path="/confirmationcode" component={ConfirmationCode}/>
                        <Route path="/finalisationcode" component={FinalisationCode}/>
                        <Route path="/endscreen" component={EndScreen}/>
                        <Route path="/test" component={TestStepper}/>
                    </Router>
                </div>
                {/*<Botnav/>*/}
            </Grid>
            <CssBaseline/>

        </div>
    );
}

export default App;
