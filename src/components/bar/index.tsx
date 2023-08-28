import Canvas from '@antv/f-react';
import { Chart, Interval } from '@antv/f2'

const data = [
    { genre: 'Sports', sold: 275 },
    { genre: 'Strategy', sold: 115 },
    { genre: 'Action', sold: 120 },
    { genre: 'Shooter', sold: 350 },
    { genre: 'Other', sold: 150 },
  ];

const Bar = () => {
  return (
   <div>
     <Canvas pixelRatio={window.devicePixelRatio}>
      <Chart data={data}>
        <Interval x="genre" y="sold" />
      </Chart>
    </Canvas>
   </div>
  )
}

export default Bar
