import { useCallback, useState } from 'react';
import F2Legend from './base/legend';
import BarChart from './components/bar';
import LineChart from './components/line';
import RadarChart from './components/radar';
import { mockLineData, mockRadarData2 } from './mock-data';
import { IRecord } from './types';
import './App.css'

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
  const [legendList, setLegendList] = useState<{name?: string; value?: string}[]>([])
  const onTooltipChange =useCallback((records: IRecord[]) => {
    const name = records?.[0]?.origin?.name
    const value = records?.[0]?.origin?.value
    if(name && value !== legendList?.[0]?.value) {
      console.log("records======", records?.[0]?.origin)
      setLegendList([{
        name: records?.[0]?.origin?.name,
        value: records?.[0]?.origin?.value,
      }])
    }
  }, [])
  return (
    <div className="app">
      <F2Legend legendList={legendList} />
      {/* <BarChart  {...barProps} /> */}
      <LineChart {...lineProps} onTooltipChange={onTooltipChange} />
      {/* <RadarChart {...radarProps} /> */}
    </div>
  );
}

export default App;
