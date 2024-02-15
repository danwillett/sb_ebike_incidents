import React, {useState, useEffect} from 'react'
import { Box, Grid, Checkbox, Typography, IconButton, Button} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

import MapForm from './MapForm';
export default function ReportPanel(inputs) {
    const loadIncidents = inputs.refreshData
    const setView = inputs.setView
    const [showForm, setShowForm] = useState(true)
    
    const closeForm = () => {
        setShowForm(false)
        setView(false)
    }


    return (
        <Grid container style={{width:"500px"}}>
            
            {showForm && <MapForm closeForm={closeForm} refreshData={loadIncidents}/>}
            
        </Grid>
       
    )

}