import Canvas from '@antv/f2-react';
import { Chart, Interval } from '@antv/f2'
import Bar from './components/bar';

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
        <Chart data={data} style={{padding: [0, 0, 0, 0]}}>
          <Interval x="genre" y="sold" />
        </Chart>
      </Canvas>
      {/* <Bar /> */}
    </div>
  );
}

export default App;
