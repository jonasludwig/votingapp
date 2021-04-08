import React from 'react';
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    FormControl,
    FormControlLabel,
    Grid,
    Radio,
    RadioGroup
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

const options = new Map();
options.set("JA", "6439");
options.set("NEIN", "8971");
options.set("UNGÜLTIG", "4789");
options.set("ENTHALTUNG", "7526");

function OptionSelector({setReturnCode, handleNext}) {
    const [value, setValue] = React.useState("");
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event) => {
        setValue(event.target.value);
        setReturnCode(options.get(event.target.value));
    };

    return (
        <div>
            <Grid
                container
                direction="column"
                justify="space-evenly"
                alignItems="center">
                <FormControl component="fieldset">
                    <RadioGroup value={value} onChange={handleChange}>
                        <FormControlLabel value="JA" control={<Radio/>} label="JA"/>
                        <FormControlLabel value="NEIN" control={<Radio/>} label="NEIN"/>
                        <FormControlLabel value="UNGÜLTIG" control={<Radio/>} label="UNGÜLTIG"/>
                        <FormControlLabel value="ENTHALTUNG" control={<Radio/>} label="ENTHALTUNG"/>
                    </RadioGroup>
                </FormControl>
                <Box m={1}/>
                <Button
                    variant="contained"
                    color="primary"
                    disabled={value === ""}
                    onClick={handleClickOpen}>
                    Auswahl bestätigen
                </Button>
            </Grid>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle id="alert-dialog-title">{"Auswahl bestätigen"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Sie haben {value} gewählt. Ist das richtig?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Zurück
                    </Button>
                    <Button onClick={handleNext} color="primary" autoFocus>
                        Bestätigen
                    </Button>
                </DialogActions>
            </Dialog>
        </div>


    );
}

export default OptionSelector;