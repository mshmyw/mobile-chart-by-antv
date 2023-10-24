import Canvas from '@antv/f-react';
import { Chart, Line, Axis, Point, Tooltip } from '@antv/f2'
import { tooltipFormatter } from '../../utils/format';
import { IRecord } from '../../types';
import { deepMix } from "@antv/util";
import { defaultOption } from './const';
import getAxisProps from '../../base/axis/utils';
import getLineProps from '../../base/line/utils';

import { mockRadarData2 } from '../../mock-data';
import getTooltipProps from '../../base/tooltip/utils';


const dataSource = mockRadarData2
interface RadarChartProps {
  [key: string]: any
}
const RadarChart = (props: RadarChartProps) => {
  const option = deepMix({}, defaultOption, props);
  const { data = [], dim, scale, tooltip, legend, ...rest } = option;
  const fields = scale.map((item: any) => item.dataKey);
  const tickCounts = scale.map((item: any) => item.tickCount);
  const xAxisProps =getAxisProps({
    field: fields[0],
    tickCount: tickCounts[0],
    ...option.axis[0],
    visible: !!data.length
  })
  const yAxisProps = getAxisProps({
    yField: true,
    scale,
    field: fields[1],
    tickCount: tickCounts[1],
    ...option.axis[1],
    visible: !!data.length
  })
  const tooltipProps = getTooltipProps({
    defaultItem: tooltip.defaultItem,
    ...tooltip,
    visible: !!data.length,
  })
  const onTooltipChange = (records: IRecord[]) => {
    tooltipFormatter(records)
  }
  const convertChartScale = (scale: Record<string, any>[]) => {
    const chartScale = scale.reduce((acc: Record<string, any>, cur: Record<string, any>) => {
        acc[cur.dataKey] = cur;
        return acc;
    }, {});
    return chartScale;
  }
  const newOption: any = {
    data,
    scale: convertChartScale(scale)
  }
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
        <Axis field="time" grid="line" />
        <Axis field="value" grid="line" style={{ label: null }} />
        <Line x="time" y="value" color="name" />
        <Point x="time" y="value" color="name" />
        <Tooltip
          custom={true}
          alwaysShow
          defaultItem={dataSource[0]}
          snap
          showCrosshairs
          // tooltipMarkerStyle中不设置fill时，默认使用record 记录中color自动填充
          tooltipMarkerStyle={{
            r: 5,
            stroke: '#fff',
            lineWidth: '4px',
          }}
        />
      </Chart>
    </Canvas>
   </>
  )
}

export default RadarChart
