import React from 'react';
import { Chart } from "react-google-charts";
 
class Bubble_Chart extends React.Component {

    render() {
    return (
      <div className={"Bar_Chart_V"}>
        <Chart
          width={'100%'}
          height={'100%'}
          chartType="BubbleChart"
          loader={<div>Loading Chart</div>}
          data={[
            ['ID', 'X', 'Y', 'Temperature'],
            ['', 80, 167, 120],
            ['', 79, 136, 130],
            ['', 78, 184, 50],
            ['', 72, 278, 230],
            ['', 81, 200, 210],
            ['', 72, 170, 100],
            ['', 68, 477, 80],
          ]}
          options={{
            colorAxis: { colors: ['yellow', 'red'] },
          }}
          rootProps={{ 'data-testid': '2' }}
        />
      </div>
  
    );
  }
}
export default Bubble_Chart;
