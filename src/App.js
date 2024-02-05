import './App.css';
import { MapContextProvider } from './MapContext';
import Header from './components/Header';
import EbikeMap from './components/Map';


import { Box, Grid, Checkbox, Typography, TextField, FormGroup, FormLabel, FormControl, FormControlLabel, Select, InputLabel, MenuItem, Button, RadioGroup, Radio, Modal} from "@mui/material";

function App() {
  return (
    <MapContextProvider>
      <Grid container width="100vw" height="100vh" justifyContent="center" >
        <Grid container direction="column" maxWidth="2000px" justifyContent="center" >
          <Header />
          <EbikeMap />
        </Grid>
      </Grid>
    </MapContextProvider>
    
  );
}

export default App;
