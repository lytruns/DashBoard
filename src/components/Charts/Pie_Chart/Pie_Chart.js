import React from 'react';
import { Chart } from "react-google-charts";
 
class Pie_Chart extends React.Component {
    render() {
    return (
      <div className={"Charts_Google"}>
        <Chart
          width={'100%'}
          height={'100%'}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={[
            ['Task', 'Hours per Day'],
            ['Work', 11],
            ['Eat', 2],
            ['Commute', 2],
            ['Watch TV', 2],
            ['Sleep', 7],
          ]}
          options={{
            title: 'My Daily Activities',
          }}
          rootProps={{ 'data-testid': '1' }}
        />
      </div>
    );
  }
}
export default Pie_Chart;
