import Canvas from '@antv/f-react';
import { Chart, Interval } from '@antv/f2'

const data = [
  { genre: 'Sports', sold: 275 },
  { genre: 'Strategy', sold: 115 },
  { genre: 'Action', sold: 120 },
  { genre: 'Shooter', sold: 350 },
  { genre: 'Other', sold: 150 },
];
function App() {
  return (
    <div className="App">
      <Canvas pixelRatio={window.devicePixelRatio}>
        <Chart data={data}
          style={{padding: [0, 0, 0, 0]}}
          >
          <Interval x="genre" y="sold" />
        </Chart>
      </Canvas>
    </div>
  );
}

export default App;
