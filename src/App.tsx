import BarChart from './components/bar';
import LineChart from './components/line';
import RadarChart from './components/radar';
import { mockLineData, mockRadarData2 } from './mock-data';

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
const barProps = {
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
    alwaysShow: true,
    defaultItem: dataSource[0]
  },
  coord: {
    // 声明直角坐标系
    type: 'rect',
    // 是否对坐标系进行转置
    transposed: false,
  }
}

const radarProps = {
  data: mockRadarData2,
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
    defaultItem: mockRadarData2[0]
  },
  coord: {
    // 声明直角坐标系
    type: 'polar',
    // 是否对坐标系进行转置
    // transposed: false,
  }
}
function App() {
  return (
    <div className="app">
      {/* <BarChart  {...barProps} /> */}
      {/* <LineChart {...lineProps} /> */}
      <RadarChart {...radarProps} />
    </div>
  );
}

export default App;
