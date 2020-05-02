import React from 'react'
import { LineChart, Line, Label, XAxis, YAxis, Tooltip } from 'recharts';

const MyChart = (props) => {
  return (
    <LineChart width={600} height={300} data={props.data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
      <Line type="monotone" dataKey="cases" stroke="#8884d8" />
      <XAxis dataKey="date" >
        <Label value={props.label} offset={0} position="insideBottom" />
      </XAxis>
      <YAxis />
      <Tooltip />
    </LineChart>
  );
}

export default MyChart;