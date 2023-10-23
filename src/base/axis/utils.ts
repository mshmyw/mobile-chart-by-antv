import { formatNumDigit, getTicksUnit } from '../../utils/format';

interface AxisWrapperProps {
    [key: string]: any
}
const getAxisProps = (props: AxisWrapperProps) => {
    const {
        xField,
        yField,
        records,
        scale = [],
        field,
        tickCount,
        style,
    } = props;
    const yLabelFn: any = (_text: string, index: number, ticks: Record<string, any>[]) => {
        yAxisLabelFormatter(index, ticks, scale[1]);
    };
    const xAxisLabelFormatter = (index: number, ticks: Record<string, any>[]) => {
        const { records, activeFill } = props;
        const textConfig: any = {};
        const tick = ticks[index];
        const record = records ? records[0] : null;
        if (!record) {
            return textConfig;
        }
        const { origin } = record;
        if (activeFill && tick.tickValue === origin[record.xField]) {
            textConfig.fill = activeFill || '#3d7fff';
        }
        return textConfig;
    }
    const yAxisLabelFormatter = (index: number, ticks: Record<string, any>[], scale: any) => {
        const textConfig: any = {};
        const tickValue = ticks[index].tickValue;
        if (!tickValue) {
            // 非法值（0， null， undefined)处理
            return {text: '0'};
        }
        if (Array.isArray(ticks) && ticks.length > 0) {
            switch(scale.dataType) {
                case 'number': {
                    const maxTickValue = ticks[ticks.length - 1].tickValue;
                    const unitItem = getTicksUnit(maxTickValue);
                    if (unitItem.unit) {
                        const numStr = formatNumDigit(tickValue / unitItem.value, 0);
                        textConfig.text = numStr + unitItem.unit;
                    }
                    break;
                }
                case 'percent':{
                    textConfig.text = formatNumDigit(+tickValue * 100, 2) + '%';
                    break;
                }
                default:
            }
        }

        return textConfig;
    }
    const initAxis = () => {
        let newStyle = { ...style };
        if (xField) {
            newStyle = {
                ...newStyle,
                label: (_text: string, index: number, ticks: Record<string, any>[]) => {
                    xAxisLabelFormatter(index, ticks);
                }
            }
        }
        if (yField) {
            newStyle = {
                label: yLabelFn,
                ...newStyle
            };
        }

        const newOption: any = {
            field,
            tickCount,
            style: newStyle
        };

        if (xField) {
            newOption.record = records && records[0];
        }
        return newOption
    }
    const newOption = initAxis()
    return newOption
}

export default getAxisProps
