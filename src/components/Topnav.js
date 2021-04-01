import React from 'react';
import {AppBar, Toolbar} from "@material-ui/core";

function Topnav(props) {
    return (
        <AppBar position="static">
            <Toolbar>
                <h1>Wahl-Webseite</h1>
            </Toolbar>
        </AppBar>
    );
}

export default Topnav;