import Canvas from '@antv/f-react';
import { Chart, Line, Axis, Point, Legend } from '@antv/f2'
import { mockRadarData } from '../../mock-data';


const dataSource = mockRadarData
const RadarChart = () => {
  return (
   <>
     <Canvas pixelRatio={window.devicePixelRatio}>
      <Chart
        data={dataSource}
        coord="polar"
        scale={{
          score: {
            min: 0,
            max: 120,
            nice: false,
            tickCount: 4,
          },
        }}
      >
        <Axis field="item" />
        <Axis field="score" />
        <Line x="item" y="score" color="user" />
        <Point x="item" y="score" color="user" />
        <Legend />
      </Chart>
    </Canvas>
   </>
  )
}

export default RadarChart
