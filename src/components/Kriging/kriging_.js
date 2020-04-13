import React, { Component } from 'react';
import ScriptTag from 'react-script-tag';
 
class kriging_ extends Component {
 
    render() {
        return (
        <ScriptTag isHydrating={true} type="text/javascript" src="src/components/Kriging/kriging.js" />,
        <ScriptTag isHydrating={true} type="text/javascript" src="src/components/Kriging/data.js" />
        



   
        );
        

    }
}
export default kriging_