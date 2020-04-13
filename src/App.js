import React from 'react';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { shadows } from '@material-ui/system';
import { sizing } from '@material-ui/system';
import SimpleMap from "./components/Charts/Maps/SimpleMap/SimpleMap";
import Area_Chart from './components/Charts/Area_Chart/Area_Chart';
import Bar_Chart_V from './components/Charts/Bar_Chart_V/Bar_Chart_V';
import GeoCharts from './components/Charts/Maps/GeoCharts/GeoCharts';
import Bar_Chart_H from './components/Charts/Bar_Chart_H/Bar_Chart_H';
import Bubble_Chart from './components/Charts/Bubble_Chart/Bubble_Chart';
import Combo_Chart from './components/Charts/Combo_Chart/Combo_Chart';
import Pie_Chart from './components/Charts/Pie_Chart/Pie_Chart';
import Table_Chart from './components/Charts/Table_Chart/Table_Chart';

import './App.css';


function App() {
  return (
    <div className="App">


    <Container fluid justify="space-around" spacing={2} >

{/*------------------ GRIDE 1 --------------------- */}

    <Grid container item xs={12} 
    className={"grid1"} 
    height={300}
    justify="space-around"
    spacing={1}    
    >
 
    <Grid item xs={12} 
    sm={6} 
    className={"grid1"} 
    height={300}
    
    >
    <Box boxShadow={10} height={300} >
    <SimpleMap/>
    </Box>
    </Grid>

    <Grid item xs={12} sm={3}>
    <Box boxShadow={10} height={300}>
    <Area_Chart/>
    </Box>
    </Grid>

    <Grid item xs={12} sm={3}>
    <Box boxShadow={10} height={300}>
    <Bar_Chart_V/>
    </Box>
    </Grid>

    </Grid>

{/*------------------ GRIDE 2 --------------------- */}
    
<Grid container item xs={12} 
    className={"grid1"} 
    height={300}
    justify="space-around"
    spacing={1}    
    >
 
    <Grid item xs={12} 
    sm={6} 
    className={"grid1"} 
    height={300}
    
    >
    <Box boxShadow={10} height={300} justify="space-around">
    <GeoCharts/>
    </Box>
    </Grid>

    <Grid item xs={12} sm={3}>
    <Box boxShadow={10} height={300}>
    <Bar_Chart_H/>
    </Box>
    </Grid>

    <Grid item xs={12} sm={3}>
    <Box boxShadow={10} height={300}>
    <Bubble_Chart/>
    </Box>
    </Grid>

    </Grid>
{/*------------------ GRIDE 3 --------------------- */}

<Grid container item xs={12} 
    className={"grid1"} 
    height={300}
    justify="space-around"
    spacing={1}    
    >
 
    <Grid item xs={12} sm={3}>
    <Box boxShadow={10} height={300}>
    <Pie_Chart/>
    </Box>
    </Grid>

    <Grid item xs={12} sm={6}>
    <Box boxShadow={10} height={300}>
    <Combo_Chart/>
    </Box>
    </Grid>

    <Grid item xs={12} sm={3}>
    <Box boxShadow={10} height={300}>
    <Table_Chart/>
    </Box>
    </Grid>

    </Grid>


    </Container>
    

    </div>
  );
}

export default App;
