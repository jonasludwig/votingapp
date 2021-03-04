import React from 'react';
import {AppBar, MobileStepper, Toolbar} from "@material-ui/core";

function Botnav(props) {
    return (
        <AppBar position="static">
            <Toolbar>
                <MobileStepper
                    variant="dots"
                    steps={6}
                    position="static"
                />
            </Toolbar>
        </AppBar>
    );
}

export default Botnav;