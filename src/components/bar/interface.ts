import { IScale, IGeometryProps, ICallBack } from "../../types";
export interface IDtBarOption {
    // chart data
    data: Record<string, any>[];
    // 图表维度 区分颜色
    dim: string;
    // 图表度量，分别为x和y轴
    scale: IScale[];
    interval: IGeometryProps;
    axis: [Record<string, any>, Record<string, any>];
    legend?: Record<string, any> | boolean;
    tooltip: { [key: string]: any; onChange?: ICallBack | null };
    // 是否横屏
    isPortrait?: boolean;
    // 柱子选中后变宽大小
    deltaWidth?: number;
}