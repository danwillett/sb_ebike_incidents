import React, {useState, useEffect} from 'react'
import { Box, Grid, Checkbox, Typography, TextField, FormGroup, FormLabel, FormControl, FormControlLabel, Select, InputLabel, MenuItem, Button, RadioGroup, Radio, Modal} from "@mui/material";

import MapForm from './MapForm';
export default function InfoPanel(inputs) {
    const [showForm, setShowForm] = useState(false)

    const openForm = () => {

        setShowForm(true)
    }

    const closeForm = () => {
        setShowForm(false)
    }


    return (
        <Grid container style={{width:"500px"}}>
            {!showForm ? (
                <Grid container justifyContent="center" alignItems="center" style={{padding: "20px"}}> 
                <Typography variant="h5" style={{marginBottom: "10px", width:"100%"}} align="left">
                    About
                </Typography>
                <Typography style={{marginBottom: "10px"}}>
                    Ebike usage has exploded in Santa Barbara County over the past few years. Let's get some data on this! Where are people crashing, and how?
                </Typography>
                <Button onClick={openForm} variant="outlined" style={{margin: "30px"}}>Report an incident</Button>
            </Grid>
            ): (
                <MapForm closeForm={closeForm} />
            )
            }
            
            

            

        </Grid>
       
    )

}