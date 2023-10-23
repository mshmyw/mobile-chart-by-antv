// 图表类型
export enum ChartType {
    DtBar = 'dt-bar',
    DtLine = 'dt-line',
    DtArea = 'dt-area',
    DtRadar = 'dt-radar',
}

// 基础组件类型
export enum ElementType {
    DtAxis = 'axis',
    DtTooltip = 'tooltip',
    DtInterval = 'interval',
    DtLine = 'line',
    DtArea = 'area',
    DtPoint = 'point',
    DtCanvas = 'canvas',
}

export interface IDataFormatCallBack {
    (value: Record<string, any>): void;
}

export interface IScale {
    dataKey: string;
    tickCount: number;
    dataType?: string;
    dataFormat?: { dataDigit?: number; } | IDataFormatCallBack;
    min?: number;
    max?: number;
}

/**
 * adjust 配置（柱图相关）
 * type 值： dodge(分组)、stack(层叠)
 * marginRadio: 柱子间距
*/
export interface IGeometryProps {
    shape?: string | Record<string, any>;
    color?: string | string[];
    size?: number | string;
    style?: Record<string, any>;
    adjust?: { type: 'dodge' | 'stack'; marginRadio: number };
}

export interface ICallBack {
    (records: Record<string, any>): void;
}

export interface IEventEmitterParams {
    msgType: string;
    msgId: string;
    value: Record<string, any>
}

export interface IChartElement {
    elementType: string;
    elementId: string;
    elementValue: Record<string, any>;
}

export interface IChartOption {
    data: Record<string, any>[];
    scale: IScale[];
    coord: string;
}

export interface IDtLegendProps {
    option: {
        status: string;
        showTitle?: boolean;
        postfix?: string;
        items: ILengendItem[]
    };
}

export interface IRecord {
    xField: string;
    yField: string;
    x: number;
    y: number;
    name: string;
    value: string | number;
    color: string;
    origin: { name: string;[key: string]: any; };
    [key: string]: any
}

export interface ILengendItem extends IRecord {
    title?: string;
    markerColor?: string;
    crcText?: string;
    crcValue?: number;
    _crcValue?: number;
}
