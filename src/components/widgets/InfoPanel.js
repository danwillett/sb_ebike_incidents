import React, {useState, useEffect} from 'react'
import { Box, Grid, Checkbox, Typography, TextField, FormGroup, FormLabel, FormControl, FormControlLabel, Select, InputLabel, MenuItem, Button, RadioGroup, Radio, Modal} from "@mui/material";

import MapForm from './MapForm';
export default function InfoPanel(inputs) {
    const loadIncidents = inputs.refreshData
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
                    Ebike usage has exploded in Santa Barbara County over the past few years. Fill out this short survey to help the county identify unsafe areas for ebikers This survey's for you if ride an ebike and have had a crash, fall, or near collision with a car.
                    <br />
                    <br />
                    If you're riding a non-electric bike or would like to add more details to your ebike report, please make it on <a href="https://bikemaps.org/@34.4284344,-119.7228241,12z" target="_blank">BikeMaps.org</a>
                </Typography>
                <Button onClick={openForm} variant="outlined" style={{margin: "30px"}}>Report an incident</Button>
            </Grid>
            ): (
                <MapForm closeForm={closeForm} refreshData={loadIncidents}/>
            )
            }
            
        </Grid>
       
    )

}