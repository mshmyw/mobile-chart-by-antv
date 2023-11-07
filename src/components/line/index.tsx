import {memo} from "react"
import Canvas from '@antv/f-react';
import { Legend, Chart, Line, Axis, Tooltip } from '@antv/f2'
import { tooltipFormatter } from '../../utils/format';
import { IRecord } from '../../types';
import { deepMix } from "@antv/util";
import { defaultOption } from './const';
// import Axis from "../../base/axis" // TODO: how use sub com
import getAxisProps from '../../base/axis/utils';
import getLineProps from '../../base/line/utils';
import getTooltipProps from '../../base/tooltip/utils';

interface LineChartProps {
  [key: string]: any
  onTooltipChange?: any
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
    props?.onTooltipChange(records)
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
  const lineProps = getLineProps({
    dim,
    scale,
    ...option.line
  })
  return (
   <>
     <Canvas pixelRatio={window.devicePixelRatio}>
      <Chart {...newOption}>
        <Axis
            {...xAxisProps}
        />
        <Axis {...yAxisProps} />
        <Line {...lineProps} />
        <Tooltip {...tooltipProps} onChange={onTooltipChange} />
      </Chart>
    </Canvas>
   </>
  )
}

export default memo(LineChart)
