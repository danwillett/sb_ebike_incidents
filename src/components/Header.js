import React, {useEffect, useRef, useState} from "react";
import { Box, Grid, Checkbox, Typography, useMediaQuery} from "@mui/material";


export default function Header() {
    const isSmallScreen = useMediaQuery('(max-width: 600px)')

    return (
        <Typography
                component="h1"
                variant={isSmallScreen ? "h5" : "h4"}
                color="inherit"
                align="center"
                sx={{ flexShrink: 1, margin: 3, maxHeight:'10vh' }}
              >

                {isSmallScreen ? "SB Ebike Safety Survey" : "Santa Barbara Ebike Safety Survey"}
              </Typography>
        
    )

}