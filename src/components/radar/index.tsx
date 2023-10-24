import Canvas from '@antv/f-react';
import { Chart, Line, Axis, Point, Tooltip } from '@antv/f2'
import { deepMix } from "@antv/util";
import { defaultOption } from './const';
import getAxisProps from '../../base/axis/utils';
import getLineProps from '../../base/line/utils';
import getTooltipProps from '../../base/tooltip/utils';


interface RadarChartProps {
  [key: string]: any
}
const RadarChart = (props: RadarChartProps) => {
  const option = deepMix({}, defaultOption, props);
  const { data = [], dim, scale, coord="polar", tooltip, legend, ...rest } = option;
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
    custom: true,
    visible: !!data.length,
  })
  const convertChartScale = (scale: Record<string, any>[]) => {
    const chartScale = scale.reduce((acc: Record<string, any>, cur: Record<string, any>) => {
        acc[cur.dataKey] = cur;
        return acc;
    }, {});
    return chartScale;
  }
  const newOption: any = {
    data,
    coord,
    scale: convertChartScale(scale)
  }

  const lineProps = getLineProps({
    dim,
    scale,
    isPolar: true,
    ...option.line
  })
  return (
   <>
     <Canvas pixelRatio={window.devicePixelRatio}>
      <Chart
        {...newOption}
      >
        <Axis {...xAxisProps} />
        <Axis {...yAxisProps} style={{ label: null }} />
        <Line {...lineProps} />
        <Point x={fields[0]} y={fields[1]} color={dim} />
        <Tooltip
         {...tooltipProps}
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
