import React from 'react'
import { Chart } from 'react-charts'

const MyChart = (props) => {
    const data = React.useMemo(
      () => [
        {
          label: props.label,
          data: props.data
        }
      ],
      []
    )
   
    const axes = React.useMemo(
      () => [
        { primary: true, type: 'time', position: 'bottom' },
        { type: 'linear', position: 'left' }
      ],
      []
    )

    return (
        <div
          style={{
            width: '400px',
            height: '300px'
          }}
        >
          <Chart data={data} axes={axes} tooltip/>
        </div>
    )
  }

  export default MyChart;