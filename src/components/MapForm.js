import React, {useState} from "react";

import { Box, Grid, Checkbox, Typography, TextField, FormGroup, FormLabel, FormControl, FormControlLabel, Select, InputLabel, MenuItem, Button, RadioGroup, Radio, Modal} from "@mui/material";
import EbikeMap from "./Map";

export default function MapForm() {
    // const showForm = inputs.showForm
    // const handleClose = inputs.onClose
    // const {latitude, longitude} = inputs.coordinates
    let latitude = "01"
    let longitude = "02"

    let genderArray = ["Male", "Female", "Non-Binary", "Prefer not to say"]
    const [gender, setGender] = useState('')
    const handleGenderChange = (event) => {
        setGender(event.target.value)
    }

    const [age, setAge] = useState('');
    const handleAgeChange = (event) => {
        setAge(event.target.value);
    };

    const [email, setEmail] = useState('')
    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const [incident, setIncident] = useState('')
    const handleIncidentChange = (event) => {
        setIncident(event.target.value)
    }

    const [incidentWith, setIncidentWith] = useState('')
    const handleIncidentWithChange = (event) => {
        setIncidentWith(event.target.value)
    }

    console.log(latitude)

    return (

            <Grid container maxWidth="1000px">
            <FormControl style={{width: "100%", padding:'5%'}}>
                <Grid container direction="column">
    
                    <TextField
                            
                            id="email-field"
                            label="Email"
                            onChange={handleEmailChange}
                            style={{marginBottom: '30px'}}
                        />

                    <Grid container direction="row" justifyContent="space-between" alignItems="center" style={{marginBottom: '30px'}}>
                        
                        <FormControl>
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
                                    <em>None</em>
                                </MenuItem>
                                {genderArray.map((gender) => (
                                    <MenuItem value={gender}>{gender}</MenuItem>
                                ))}
                            </Select>
            
                        </FormControl>
                    
                    
                        <TextField
                            id="age-field"
                            label="Age"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="standard"
                            onChange={handleAgeChange}
                            style={{width: '100px'}}
                        />

                        
                    
                    </Grid>
                    
                    <Grid container direction="row" justifyContent="space-between" alignItems="center" style={{marginBottom: '30px'}}>
                        <FormControl style={{width: '100%', marginBottom: '30px'}}>
                            <FormLabel id="incident-options-label">Incident Type</FormLabel>
                            <RadioGroup
                                aria-labelledby="incident-options-label"
                                name="incident-options"
                                value={incident}
                                onChange={handleIncidentChange}
                
                                
                            >
                                <Grid container justifyContent="space-between" alignItems="left" direction="row">
                                    <FormControlLabel value="Collision" control={<Radio />} label="Collision" style={{ width: '33%' }}/>
                                    <FormControlLabel value="Near Miss" control={<Radio />} label="Near Miss" style={{ width: '33%' }}/>
                                    <FormControlLabel value="Fall" control={<Radio />} label="Fall" style={{ width: '33%' }}/>
                                    <FormControlLabel value="Other" control={<Radio />} label="Other" style={{ width: '33%' }}/>
                                </Grid>

                            </RadioGroup>
                        </FormControl>

                        <FormControl>
                            <FormLabel id="incident-with-options-label">Incident caused by:</FormLabel>
                            <RadioGroup
                                aria-labelledby="incident-with-options-label"
                                name="incident-with-options"
                                value={incidentWith}
                                onChange={handleIncidentWithChange}
                                
                            >
                                <Grid container justifyContent="space-between" alignItems="left" direction="row">
                                    <FormControlLabel value="Car" control={<Radio />} label="Car" style={{ width: '33%' }}/>
                                    <FormControlLabel value="Pedestrian" control={<Radio />} label="Pedestrian" style={{ width: '33%' }} />
                                    <FormControlLabel value="Bicyclist" control={<Radio />} label="Another Biker" style={{ width: '33%' }}/>
                                    <FormControlLabel value="Hazard" control={<Radio />} label="Road Hazard" style={{ width: '33%' }}/>
                                    <FormControlLabel value="Other" control={<Radio />} label="Other" style={{ width: '33%' }}/>
                                    <FormControlLabel value="NA" control={<Radio />} label="Not Applicable" style={{ width: '33%' }}/>
                                </Grid>

                            </RadioGroup>
                        </FormControl>
                        
                    </Grid>
                    <TextField 
                        fullWidth 
                        label="Describe the incident here" 
                        multiline
                        rows={8} 
                        />
                </Grid>
                </FormControl>
                <EbikeMap />
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