import React from 'react';
import Button from "@material-ui/core/Button";
import {Checkbox, FormControlLabel, Typography} from '@material-ui/core';

function ReturnCode({handleNext}) {
    const [state, setState] = React.useState({checked: false});

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <div>
            <Typography variant='h4'>Prüfcode</Typography>
            <Typography variant='h4'>7526</Typography>

            <FormControlLabel
                control={
                    <Checkbox
                        checked={state.checked}
                        onChange={handleChange}
                        name="checked"
                        color="primary"
                    />
                }
                label="Prüfcode korrekt"
            />

            <Button
                variant="contained"
                color="primary"
                disabled={!state.checked}
                onClick={handleNext}>
                Weiter
            </Button>

        </div>
    );
}

export default ReturnCode;