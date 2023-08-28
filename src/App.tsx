import Canvas from '@antv/f-react';
import { Timeline } from '@antv/f-engine';
import Bar from './components/bar';
import Rect from './components/Rect';

function App() {
  return (
    <div className="App">
      <canvas id="container" width="400" height="260"></canvas>
      <Canvas pixelRatio={window.devicePixelRatio}>
        <Timeline delay={500}>
          {[10, 100].map((v, index) => {
            return <Rect key={index} index={index} width={v} />;
          })}
        </Timeline>
      </Canvas>
      <Bar />
    </div>
  );
}

export default App;
