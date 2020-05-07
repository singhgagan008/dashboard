import React from 'react'
import { LineChart, Line, Label, CartesianGrid, Legend, XAxis, YAxis, Tooltip } from 'recharts';

const MyChart = (props) => {
  return (
    <LineChart 
      width={600} 
      height={300} 
      data={props.data} 
      margin={
        { 
          top: 5, 
          right: 20, 
          bottom: 5, 
          left: 0 
        }}>
      <CartesianGrid strokeDasharray="3 3" />
      <Line 
        type="monotone" 
        dataKey="cases" 
        stroke={props.stroke} 
        dot={false} 
        name={props.label}
        strokeWidth={3}
      />
      <XAxis dataKey="date" tickLine={true} interval={20} angle={-30} >
        <Label offset={0} position="insideBottom" />
      </XAxis>
      <YAxis axisLine={false}/>
      {/* <YAxis scale="log" domain={[0.01, 'dataMax']} allowDataOverflow /> */}
      <Tooltip cursor={false}/>
      <Legend verticalAlign="top" height={36}/>
    </LineChart>
  );
}

export default MyChart;