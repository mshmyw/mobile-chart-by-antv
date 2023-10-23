import BarChart from './components/bar';
import LineChart from './components/line';
import RadarChart from './components/radar';
import { mockLineData } from './mock-data';

const dataSource = mockLineData

const lineProps = {
  data: dataSource,
  dim: 'name',
  scale: [
    {
      dataKey: 'time',
      tickCount: 4,
    },
    {
      dataKey: 'value',
      tickCount: 5,
      dataType: 'number'
    },
  ],
  tooltip: {
    defaultItem: dataSource[0]
  },
  coord: {
    // 声明直角坐标系
    type: 'rect',
    // 是否对坐标系进行转置
    transposed: false,
  }
}
function App() {
  return (
    <div className="app">
      {/* <BarChart /> */}
      <LineChart {...lineProps} />
      {/* <RadarChart /> */}
    </div>
  );
}

export default App;
