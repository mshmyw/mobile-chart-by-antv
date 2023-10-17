import Canvas from '@antv/f-react';
import { Chart, Line, Axis, Tooltip } from '@antv/f2'
import { mockLineData } from '../../mock-data';


const dataSource = mockLineData
const LineChart = () => {
  const onTooltipChange = (records: any) => {
    console.log("records=====", records)
    const record = records[0]
    if(record) {
        delete record.name
    }
  }

  return (
   <>
     <Canvas pixelRatio={window.devicePixelRatio}>
      <Chart data={dataSource}>
        <Axis
            field="date"
            tickCount={3}
            style={{
            label: { align: 'between' },
            }}
        />
        <Axis field="value" tickCount={5} />
        <Line x="date" y="value" />
        <Tooltip onChange={onTooltipChange} />
      </Chart>
    </Canvas>
   </>
  )
}

export default LineChart
