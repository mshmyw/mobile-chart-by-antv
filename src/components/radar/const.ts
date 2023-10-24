import { defaultTheme, defaultTooltip } from "../../utils/theme";
import { IDtRadarOption } from "./interface";

export const defaultOption: IDtRadarOption = {
    data: [],
    dim: 'name',
    scale: [{
        dataKey: 'time',
        tickCount: 4,
    }, {
        dataKey: 'value',
        tickCount: 5,
        dataType: 'number'
        }],
    axis: [{
        visible: true,
        style: {grid: defaultTheme.grid[0]}
    }, {
        visible: true,
        style: {grid: defaultTheme.grid[1]}
        }],
    line: {
        color: defaultTheme.colors,
        shape: ['smooth'],
        size: 2
    },
    legend: {
        visible: true,
    },
    tooltip: {...defaultTooltip}
};