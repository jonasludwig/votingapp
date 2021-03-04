import './App.css';
import "@fontsource/roboto";
import {CssBaseline, Grid} from "@material-ui/core";
import Topnav from "./components/Topnav";
import TestStepper from "./components/TestStepper";

function App() {


    return (
        <div>
            <Grid container direction="column">
                <Topnav className="Topnav"/>
                <div className="ContainerStyles">
                    <TestStepper/>
                </div>
                {/*<Botnav/>*/}
            </Grid>
            <CssBaseline/>

        </div>
    );
}

export default App;
