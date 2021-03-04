import React from 'react';
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

function WelcomeScreen(props) {
    return (
        <div>
            <Link to="/votingcode">
                <Button variant="contained" color="primary">Wahl starten</Button>
            </Link>

        </div>
    );
}

export default WelcomeScreen;