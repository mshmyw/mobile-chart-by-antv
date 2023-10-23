import Canvas from '@antv/f-react';
import { Chart, Interval, Axis, Tooltip } from '@antv/f2'
import { tooltipFormatter } from '../../utils/format';
import { IRecord } from '../../types';
import { deepMix } from "@antv/util";
import { defaultOption } from './const';
import getAxisProps from '../../base/axis/utils';
import getTooltipProps from '../../base/tooltip/utils';
import getIntervalProps from '../../base/interval/utils';

interface LineChartProps {
  [key: string]: any
}
const LineChart = (props: LineChartProps) => {
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

  if (rest.coord) {
      newOption['coord'] = rest.coord;
  }
  const intervalProps: any = getIntervalProps({
    dim,
    scale,
    ...option.interval
  })
  return (
   <>
     <Canvas pixelRatio={window.devicePixelRatio}>
      <Chart {...newOption}>
        <Axis
            {...xAxisProps}
        />
        <Axis {...yAxisProps} />
        <Interval {...intervalProps} />
        <Tooltip {...tooltipProps} onChange={onTooltipChange} />
      </Chart>
    </Canvas>
   </>
  )
}

export default LineChart
