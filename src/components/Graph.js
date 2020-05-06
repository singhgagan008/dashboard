import React from 'react'
import { LineChart, Line, Label, Legend, XAxis, YAxis, Tooltip } from 'recharts';

const MyChart = (props) => {
  return (
    <LineChart width={600} height={300} data={props.data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
      <Line type="monotone" dataKey="cases" stroke={props.stroke} dot={false}/>
      <XAxis dataKey="date" >
        <Label value={props.label} offset={0} position="insideBottom" />
      </XAxis>
      <YAxis />
      <Tooltip cursor={false}/>
      <Legend verticalAlign="top" height={36}/>
    </LineChart>
  );
}

export default MyChart;