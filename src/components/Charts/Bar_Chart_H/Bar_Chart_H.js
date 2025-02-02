import React from 'react';
import { Chart } from "react-google-charts";
 
class Bar_Chart_H extends React.Component {

    render() {
    return (
      <div className={"Bar_Chart_H"}>
        <Chart
          width={'100%'}
          height={'100%'}
          chartType="BarChart"
          loader={<div>Loading Chart</div>}
          data={[ 
            ['City', '2010 Population', '2000 Population'],
            ['New York City, NY', 8175000, 8008000],
            ['Los Angeles, CA', 3792000, 3694000],
            ['Chicago, IL', 2695000, 2896000],
            ['Houston, TX', 2099000, 1953000],
            ['Philadelphia, PA', 1526000, 1517000],
          ]}
          options={{
            title: 'Population of Largest U.S. Cities',
            chartArea: { width: '50%' },
            hAxis: {
              title: 'Total Population',
              minValue: 0,
            },
            vAxis: {
              title: 'City',
            },
          }}
          // For tests
          rootProps={{ 'data-testid': '1' }}
        />
      </div>
  
    );
  }
}
export default Bar_Chart_H;
