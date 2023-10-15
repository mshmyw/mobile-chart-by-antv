import Canvas from '@antv/f-react';
import { Chart, Interval } from '@antv/f2'
import { mockDataSource } from '../../mock-data';


const dataSource = mockDataSource
const Bar = () => {
  return (
   <>
     <Canvas pixelRatio={window.devicePixelRatio}>
      <Chart data={dataSource} style={{padding: [0, 0, 0, 0]}}>
        <Interval x="genre" y="sold" />
      </Chart>
    </Canvas>
   </>
  )
}

export default Bar
