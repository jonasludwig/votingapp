import React from 'react';
import Button from "@material-ui/core/Button";
import {Checkbox, FormControlLabel, Typography} from "@material-ui/core";

function FinalisationCode({handleNext}) {
    const [state, setState] = React.useState({checked: false});

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <div>
            <Typography variant='h4'>Finalisierungscode</Typography>
            <Typography variant='h4'>4946-0511</Typography>

            <FormControlLabel
                control={
                    <Checkbox
                        checked={state.checked}
                        onChange={handleChange}
                        name="checked"
                        color="primary"
                    />
                }
                label="Finalisierungscode korrekt"
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

export default FinalisationCode;