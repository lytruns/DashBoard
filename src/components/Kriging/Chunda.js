import React from 'react';
import kriging from '@sakitam-gis/kriging';
 
class Chunda extends React.Component {

  render() {
    return (
      <div className={"Area_Chart"}>
        
        
        hart
         width={'100%'}
         height={'100%'}
         chartType="AreaChart"
         loader={<div>Loading Chart</div>}
         data={[
           ['Year', 'Sales', 'Expenses'],
           ['2013', 1000, 400],
           ['2014', 1170, 460],
           ['2015', 660, 1120],
           ['2016', 1030, 540],
         ]}
         options={{
           title: 'Company Performance',
           hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
           vAxis: { minValue: 0 },
           // For the legend to fit, we make the chart area smaller
           chartArea: { width: '50%', height: '70%' },
           // lineWidth: 25
         }}
         // For tests
         rootProps={{ 'data-testid': '1' }}
         />
      </div>
  
    );
  }
}

export default Chunda;



kriging() ({
  var sigma2= 0;
  var alpha= 100;
  var t = [ 72, 83, 103, 32, 74, 55, 76, 73, 1, 2, 73, 34 ];
  var x = [0, 10, 20, 30, 30, 30, 30, 20, 20, 20, 10, 10 ];
  var y = [0, 10, 20, 30, 20, 10, 0, 30, 10, 0, 20, 30];
  var model = "spherical";
  var variogram = kriging.train(t, x, y, model, sigma2, alpha)


