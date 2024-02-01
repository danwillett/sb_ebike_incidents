import React, {useEffect, useRef, useState} from "react";
import Map from '@arcgis/core/Map.js'
import MapView from '@arcgis/core/views/MapView.js'
import Query from '@arcgis/core/rest/support/Query.js'
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer.js'
import FeatureLayer from '@arcgis/core/layers/FeatureLayer.js'
import FeatureService from '@arcgis/core/rest/featureService/FeatureService.js'
import Editor from '@arcgis/core/widgets/Editor.js'
import Graphic from '@arcgis/core/Graphic.js'
import Expand from '@arcgis/core/widgets/Expand.js'
import MapForm from "./MapForm";
import { Box, Grid, Checkbox, Typography, TextField, FormGroup, FormLabel, FormControl, FormControlLabel, Select, InputLabel, MenuItem, Button, RadioGroup, Radio, Modal} from "@mui/material";



export default function EbikeMap() {

  const mapRef = useRef()
  const [showForm, setShowForm] = useState(false)
  const [incidentData, setIncidentData] = useState(null)
  const [map, setMap] = useState(null)
  const [view, setView] = useState(null)
  const [clickedCoordinates, setClickedCoordinates] = useState(null)
  

  const incidentLayerUrl = "https://donkey.grit.ucsb.edu/server/rest/services/Hosted/sb_ebike_safety/FeatureServer"
  
  // load incident portal layer as service layer
  // layer is not accessible through portal (sharing = organization), but public data collection is enabled
  const loadIncidents = async () => {
    // const incidentService = new FeatureService({
    //   url: incidentLayerUrl
    // });
    // await incidentService.load();
    // console.log(incidentService)
    const ebikeLayer = new FeatureLayer({
      url: incidentLayerUrl
    })
    console.log(ebikeLayer)
    
    setIncidentData(ebikeLayer)

  }

  const initMap = () => {
    console.log("reinitializing")
    console.log(view)

    // Create a view
    if (!view) {
        const newView = new MapView({
            map: map,
            center: [-119.8, 34.45],
            zoom: 11,
            container: mapRef.current,
        });

        const editor = new Editor({
          view: newView,
          allowedWorkflows: "create",
          headingLevel: 1,
        });

        editor.label = "NEWOEKNOWEKNFR"

        editor.visibleElements = {
          createFeaturesSection: true,
          editFeaturesSection: false,
          snappingControls: false,
          snappingControlsElements: false,
          
          
        }

        

        newView.ui.add(editor, "top-right")

        newView.on("click", (event) => {
        // Get the clicked point's geographic coordinates
        // I want a little bloom graphic on a click
        const clickedPoint = newView.toMap(event);
        const { longitude, latitude } = clickedPoint;


      
        setClickedCoordinates({latitude, longitude})
        setShowForm(true)
        })

        setView(newView)

    }
  }

    

  useEffect(() => {
    setMap(new Map({
      basemap: "streets-vector"
    }))
    loadIncidents()
  }, [])

  useEffect(() => {
    console.log(incidentData)
    console.log(map)
    if (incidentData !== null) {
      map.layers = [incidentData]
    }
    
  }, [incidentData])

  useEffect(() => {
        
    if (map !== null) {
        if (map.layers !== null) {
            console.log(map.layers)
            console.log("creating map view")
            initMap()
        } else {

        }
        initMap()
        
    }
}, [map, incidentData])


  
  


  // useEffect(()=> {
  //   loadIncidents()
    
  //   const initMap = async () => {
  //     const [Map, MapImageLayer, MapView, Legend, LayerList, esriConfig] = await loadModules([
  //       'esri/Map', 
  //       'esri/layers/MapImageLayer', 
  //       'esri/views/MapView', 
  //       'esri/widgets/Legend',
  //       'esri/widgets/LayerList',
  //       'esri/config'
  //     ])
  //     console.log(esriConfig)

  //     // Create a map
  //     const map = new Map({
  //       basemap: 'streets-vector',
  //     });

  //     // Create a view
  //     const viewInstance = new MapView({
  //       map: map,
  //       center: [-119.7, 34.5],
  //       zoom: 11,
  //       container: mapRef.current
  //     });

  //     viewInstance.on("click", (event) => {
  //       // Get the clicked point's geographic coordinates
  //       // I want a little bloom graphic on a click
  //       const clickedPoint = viewInstance.toMap(event);
  //       const { longitude, latitude } = clickedPoint;

  //       setClickedCoordinates({latitude, longitude})
  //       setShowForm(true)
        
  //     });

  //   };


  //   initMap();

  // }, [])

  const handleCloseForm = () => {
    setShowForm(false);
    setClickedCoordinates(null);
  };
      
  return (
    <div>
      <Grid item style={{
        width: 
          "1000px"
      }}>
        
      <div ref={mapRef} style={{ width: "100%", minHeight: "80vh",  boxSizing: "border-box" }}></div>

      {showForm && <MapForm className="esri-widget" id="mapForm" showForm={showForm} coordinates={clickedCoordinates} onClose={handleCloseForm} />}
      </Grid>
    </div>
    
    
  )
}