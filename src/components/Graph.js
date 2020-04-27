import React from 'react'
import { Chart } from 'react-charts'

const MyChart = () => {
    const data = React.useMemo(
      () => [
        {
          label: 'Series 1',
          data: [[1585699200, 1], [1587699200, 2], [1589699200, 4], [1591699200, 2], [1593699200, 7]]
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