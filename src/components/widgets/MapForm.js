import React, {useState, useContext, useEffect} from "react";
import {ToastContainer, toast} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { MapContext } from "../../MapContext";

import FeatureService from '@arcgis/core/rest/featureService/FeatureService.js'
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer.js'
import Graphic from '@arcgis/core/Graphic.js'
import Point from '@arcgis/core/geometry/Point.js'
import SimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol.js'
import Expand from "@arcgis/core/widgets/Expand";

import { Box, Grid, Checkbox, Typography, TextField, FormGroup, FormLabel, FormControl, FormControlLabel, Select, InputLabel, MenuItem, Button, RadioGroup, Radio, IconButton} from "@mui/material";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from "dayjs";
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import DeleteIcon from '@mui/icons-material/Delete';

export default function MapForm(inputs) {

    const loadIncidents = inputs.refreshData

    const {map, view} = useContext(MapContext)
    const [newIncidentGraphicLayer, setNewIncidentGraphicLayer] = useState(new GraphicsLayer())
    const [lat, setLat] = useState(null)
    const [long, setLong] = useState(null)

    const resetCoords = () => {
        setLong(null)
        setLat(null)
        map.layers.remove(newIncidentGraphicLayer)
        setNewIncidentGraphicLayer(new GraphicsLayer())

    }

    let genderArray = ["Male", "Female", "Non-Binary", "Self Describe"]
    const [gender, setGender] = useState('')
    const handleGenderChange = (event) => {
        setGender(event.target.value)
    }

    const [genderDescription, setGenderDescription] = useState('') 
    const handleGenderDescriptionChange = (event) => {
        setGenderDescription(event.target.value)
    }

    const [age, setAge] = useState('');
    const handleAgeChange = (event) => {
        setAge(event.target.value);
    };
    const currentYear = new Date().getFullYear()
    const oldestYear = currentYear - 100
    const newestYear = currentYear - 12
    const ageArray = [];

    for (let i = newestYear; i >= oldestYear; i--) {
        ageArray.push(i);
    }

    const [date, setDate] = useState('')
    const [time, setTime] = useState('')

    const [incident, setIncident] = useState('')
    const handleIncidentChange = (event) => {
        setIncident(event.target.value)
    }

    const [incidentWith, setIncidentWith] = useState('')
    const handleIncidentWithChange = (event) => {
        setIncidentWith(event.target.value)
    }

    const [description, setDescription] = useState('')
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value)
    }

    const [terms, setTerms] = useState(false)
    const handleTermsChange = (event) => {
        setTerms(event.target.checked)
    }

    const termLink = `${process.env.PUBLIC_URL}/files/Letter of informed consent.pdf`

    const [incompleteForm, setIncompleteForm] = useState(null)

    const [sumbissionError, setSubmissionError] = useState(false)
    
    const setClosed = inputs.closeForm
    const closeForm = () => {
        map.layers.remove(newIncidentGraphicLayer)
        setClosed()

    }

    const submitForm = async () => {
        // check if form is complete
        const completeForm = terms == true 

        if (!completeForm) {
            setIncompleteForm(true)
            return
        }
        // fire post request to service
        setSubmissionError(false)
        const incidentLayerUrl = "https://donkey.grit.ucsb.edu/server/rest/services/Hosted/sb_ebike_safety/FeatureServer"
        const incidentService = new FeatureService({
              url: incidentLayerUrl
            });
        await incidentService.load();

        let incident_timestamp = null
        
        if (date !== '') {
            incident_timestamp = new Date(
                date.year(),
                date.month(),
                date.day(),
                time.hour(),
                time.minute()
    
            ).getTime()
        }
        let birthyear
        if (age === '') {
            birthyear = NaN
        } else {
            birthyear = age
        }
        

        incidentService.applyEdits(
            [
              {
                id: 0,
                identifierFields: { globalIdField: "GLOBALID", objectIdField: "OBJECTID" },
                addFeatures: [
                  new Graphic(
                    {
                        geometry: new Point({
                            x: long,
                            y: lat,
                            }),
                        attributes: {
                            incident_date: incident_timestamp,
                            incident_type: incident,
                            birth_year: birthyear,
                            gender: gender,
                            gender_additional: genderDescription,
                            collision_object: incidentWith,
                            description: description

                            }
                    })
                ]
              }
            ]
          ).then((addedLayer) => {
            console.log("added new layer: ", addedLayer)

            closeForm()
            loadIncidents()
          })
          .catch((error) => {
            console.error('Error adding new point: ', error)
            setSubmissionError(true)
          });
        

    }
    

    useEffect(()=> {

        if (lat === null) {
            view.cursor = "crosshair"
            const selectCoordinates = view.on("click", (event) => {

                // if zoom is less than 15, ask to zoom in closer

                const currentZoom = view.zoom;
                if (currentZoom < 15) {
                    toast("Please zoom in closer before adding your incident's location", {
                        position:"top-right",
                        autoClose: 5000,
                        theme:'dark',
                        type:'info'
                    });
                    
                    return
                }

                // Get the clicked point's geographic coordinates
                               
                view.cursor = "default"
                const clickedPoint = view.toMap(event);
                const { longitude, latitude } = clickedPoint;
                setLat(latitude)
                setLong(longitude)                
    
                const incidentPoint = new Point({
                    type: "point",
                    x: longitude,
                    y: latitude,
                })
    
                const markerSymbol = new SimpleMarkerSymbol({
                    color: [255, 0, 0], // RGB color values
                    size: 10,
                    style: "x",
                })
    
                let newIncidentGraphic = new Graphic({
                    geometry: incidentPoint,
                    symbol: markerSymbol
                })
    
                newIncidentGraphicLayer.add(newIncidentGraphic)
                map.layers = newIncidentGraphicLayer

                })
            
            return () => {
                view.cursor = "default"
                selectCoordinates.remove()
            }
        } 

        
    }, [lat])

    


    return (

            <Grid container style={{width: '100%', padding:'5%', paddingTop: '3%'}}>

                {!lat ? (
                    <Grid container direction="column">

                    <Grid item>
                        <IconButton
                        variant='text'
                        color="black"
                        onClick={closeForm}>
                            <ArrowBackIcon />
                        </IconButton>
                        
                    </Grid>
                    
                    <Typography variant='h6' align='center' style={{width:'100%', paddingBottom: '10px'}}>Zoom in and select the incident's location on the map</Typography>
                    </Grid>
                ) : (
                    <div>
                    <Grid item>
                        <IconButton
                        variant='text'
                        color="black"
                        onClick={closeForm}>
                            <CloseIcon />
                        </IconButton>
                        
                    </Grid>
                    
                    <Typography variant='h5' align='center' style={{width: '100%', paddingBottom: '10px'}}>Ebike Incident Report</Typography>
                    <FormControl style={{width: "100%"}}>
                    <Typography variant='h6' align='left' style={{width: '100%', paddingBottom: '10px'}}>Location</Typography>
                    <Grid container direction="column" justifyContent="center" alignItems="center">

                        <Grid container direction="row" justifyContent="space-between">
                            
                            <TextField
                                
                                    id="lat-field"
                                    label="latitude"
                                    disabled
                                    style={{width: '45%'}}
                                    defaultValue={lat}
                                />
                            <TextField
                                    
                                    id="long-field"
                                    label="longitude"
                                    disabled
                                    style={{ width: '45%'}}
                                    defaultValue={long}
                                />
                        </Grid>
                        <Button onClick={resetCoords} color="secondary" style={{width: '100%'}}>Reset Location</Button>
                        
                        <Typography variant='h6' align='left' style={{width: '100%', paddingBottom: '10px'}}>Personal Details</Typography>
                        <Grid container direction="row" justifyContent="space-between" alignItems="top" >
                            
                            <FormControl style={{marginBottom: '20px'}}>
                                <InputLabel id="select-gender-label">Gender</InputLabel>
                                <Select
                                    labelId="select-gender-label"
                                    id="select-gender"
                                    value={gender}
                                    onChange={handleGenderChange}
                                    style={{width: '200px'}}
                                    label="Gender"
                                    >
                                    <MenuItem value="">
                                        <em></em>
                                    </MenuItem>
                                    {genderArray.map((gender) => (
                                        <MenuItem value={gender} key={gender}>{gender}</MenuItem>
                                    ))}
                                </Select>
                
                            </FormControl>

                            <FormControl style={{marginBottom: '20px'}}>
                                <InputLabel id="select-age-label">Birth Year</InputLabel>
                                <Select
                                    labelId="select-age-label"
                                    id="select-age"
                                    value={age}
                                    onChange={handleAgeChange}
                                    style={{width: '150px'}}
                                    label="Birth Year"
                                    >
                                    <MenuItem value="">
                                        <em></em>
                                    </MenuItem>
                                    {ageArray.map((age) => (
                                        <MenuItem value={age} key={age}>{age}</MenuItem>
                                    ))}
                                </Select>
                
                            </FormControl>
                      
                        </Grid>
                        <Grid container style={{width: '100%'}} >
                            {gender==="Self Describe" && (
                                        <TextField
                                            id="gender-additional"
                                            label="gender description"
                                            multiline
                                            rows={1}
                                            onChange={handleGenderDescriptionChange}
                                            defaultValue={genderDescription}
                                            style={{marginBottom: "30px", width:'100%'}}
                                            inputProps={{
                                                maxLength: 100
                                            }}
                                            />
                                    )}
                        </Grid>
                        
                        <Typography variant='h6' align='left' style={{width: '100%', paddingBottom: '0px'}}>Incident Details</Typography>
                        <Grid container justifyContent="space-between" direction="row"style={{marginBottom: '20px'}} >
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker', 'TimePicker']}>
                                    <DatePicker 
                                        label="Incident Date" 
                                        disableFuture={true}
                                        onChange={(newDate) => setDate(newDate)}
                                        />
                                    <TimePicker 
                                        label="Incident Time" 
                                        
                                        onChange={(newTime)=>setTime(newTime)}
                                        
                                        />
                                </DemoContainer>
                            </LocalizationProvider>
                        </Grid>

                        <Grid container direction="row" justifyContent="space-between" alignItems="center" style={{marginBottom: '30px'}}>
                            <FormControl style={{width: '100%', marginBottom: '10px'}}>
                                <FormLabel id="incident-options-label">Incident Type</FormLabel>
                                <RadioGroup
                                    aria-labelledby="incident-options-label"
                                    name="incident-options"
                                    value={incident}
                                    onChange={handleIncidentChange}
                    
                                    
                                >
                                    <Grid container justifyContent="center" alignItems="left" direction="row">
                                        <FormControlLabel value="Collision" control={<Radio />} label="Collision" style={{ width: '45%', marginTop: '5px' }}/>
                                        <FormControlLabel value="Near Miss" control={<Radio />} label="Near Miss" style={{ width: '45%', marginTop: '5px' }}/>
                                        <FormControlLabel value="Fall" control={<Radio />} label="Fall" style={{ width: '45%', marginTop: '5px' }}/>
                                        <FormControlLabel value="Other" control={<Radio />} label="Other" style={{ width: '45%', marginTop: '5px' }}/>
                                    </Grid>

                                </RadioGroup>
                            </FormControl>

                            <FormControl >
                                <FormLabel id="incident-with-options-label">Incident caused by:</FormLabel>
                                <RadioGroup
                                    aria-labelledby="incident-with-options-label"
                                    name="incident-with-options"
                                    value={incidentWith}
                                    onChange={handleIncidentWithChange}
                                    
                                >
                                    <Grid container justifyContent="center" alignItems="left" direction="row">
                                        <FormControlLabel value="Car" control={<Radio />} label="Car" style={{ width: '45%', marginTop: '5px' }}/>
                                        <FormControlLabel value="Pedestrian" control={<Radio />} label="Pedestrian" style={{ width: '45%', marginTop: '5px' }} />
                                        <FormControlLabel value="Bicyclist" control={<Radio />} label="Another Biker" style={{ width: '45%', marginTop: '5px' }}/>
                                        <FormControlLabel value="Hazard" control={<Radio />} label="Road Hazard" style={{ width: '45%', marginTop: '5px' }}/>
                                        <FormControlLabel value="Other" control={<Radio />} label="Other" style={{ width: '45%', marginTop: '5px' }}/>
                                        <FormControlLabel value="NA" control={<Radio />} label="NA" style={{ width: '45%', marginTop: '5px' }}/>
                                    </Grid>

                                </RadioGroup>
                            </FormControl>
                            
                        </Grid>
                        <TextField 
                            fullWidth 
                            label="Describe the incident here" 
                            multiline
                            rows={8}
                            defaultValue={description}
                            onChange={handleDescriptionChange}
                            style={{width: '100%', marginBottom: '20px'}}
                            inputProps={{
                                maxLength: 500
                            }}
                            />
                        <FormControlLabel 
                            control={<Checkbox checked={terms} onChange={handleTermsChange}/>} 
                            label={
                                <Typography>
                                    I am 13 years of age or older and have read and understood the <a href={termLink} target='_blank' rel="noopener noreferrer">terms and conditions.</a>
                                </Typography>
                                
                            }
                            style={{marginBottom: '20px'}}
                            
                            />
                            
                        
                        {incompleteForm && (
                            <Typography color="error" variant="body2" style={{marginBottom: '10px'}}>
                            Please accept the terms and conditions.
                            </Typography>
                        )}
                        
                        <Grid container direction="row" justifyContent="center">

                            {/* <IconButton onClick={closeForm} variant="outlined" color="black" style={{width:"25%"}}><DeleteIcon /></IconButton> */}
                            <Button onClick={submitForm} variant="contained" style={{minWidth:"25%", marginBottom: '10px'}}>Submit Report</Button>

                        </Grid>

                        {sumbissionError && (
                            <Typography color="error" variant="body2" style={{marginBottom: '10px'}}>
                            Error adding ebike incident. Please check your network connection or try again later.
                            </Typography>
                        )}

                        
                    </Grid>

                        
                    </FormControl>
                    
                    </div>
                
                )}

                <ToastContainer />
            
            </Grid>

            
        // </Modal>
        // <div
        //     className= "modal show d-flex align-items-center"
        //     // style= {{height: "70vh", width: '50vw'}}
        // >
            
        //     <Modal show={showForm} onHide={handleClose}>
        //         <Modal.Header closeButton>
        //             <Modal.Title>Add Your Favorite Place!</Modal.Title>
        //         </Modal.Header>
        //         <Modal.Body>

        //             <h2>Hey</h2>
        //             <p>{latitude}</p>
        //             <p>{longitude}</p>

        //             <Form>
        //                 <Form.Group className="mb-3" controlId="formSomething">
        //                     <Form.Label>Email address</Form.Label>
        //                     <Form.Control type="email" placeholder="Enter email" />
        //                     <Form.Text className="text-muted">
        //                     We'll never share your email with anyone else.
        //                     </Form.Text>
        //                 </Form.Group>

        //                 <Form.Group className="mb-3" controlId="formBasicPassword">
        //                     <Form.Label>Password</Form.Label>
        //                     <Form.Control type="password" placeholder="Password" />
        //                 </Form.Group>
        //                 <Form.Group className="mb-3" controlId="formBasicCheckbox">
        //                     <Form.Check type="checkbox" label="Check me out" />
        //                 </Form.Group>
                        
        //             </Form>

        //         </Modal.Body>

        //         <Modal.Footer>
        //         <Button variant="secondary" onClick={handleClose}>Discard</Button>
        //         <Button variant="primary" type="submit" onClick={handleClose}>Submit</Button>
        //         </Modal.Footer>
        //     </Modal>
            

        // </div>
    )

}