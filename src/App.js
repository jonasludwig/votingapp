import './App.css';
import "@fontsource/roboto";
import MyWebcam from "./components/MyWebcam";
import WelcomeScreen from "./components/WelcomeScreen";
import ReturnCode from "./components/ReturnCode";
import VotingCode from "./components/VotingCode";
import FinalisationCode from "./components/FinalisationCode";
import ConfirmationCode from "./components/ConfirmationCode";
import EndScreen from "./components/EndScreen";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {


    return (
        <div className="App">
            <header className="App-header">
                <Router>
                    <Route path="/" exact component={WelcomeScreen}/>
                    <Route path="/webcam" component={MyWebcam}/>
                    <Route path="/votingcode" component={VotingCode}/>
                    <Route path="/returncode" component={ReturnCode}/>
                    <Route path="/confirmationcode" component={ConfirmationCode}/>
                    <Route path="/finalisationcode" component={FinalisationCode}/>
                    <Route path="/endscreen" component={EndScreen}/>
                </Router>
            </header>
        </div>
    );
}

export default App;
