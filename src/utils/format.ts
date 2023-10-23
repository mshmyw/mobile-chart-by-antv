// 图表刻度转化规则列表
const ticksUnitList = [
    {
      unit: '亿',
      value: 10 ** 8,  // 单位
      limit: 10 ** 8,  // 触发转化的下限值
      digit: 0  // 精度
    },
    {
      unit: '万',
      value: 10000,  // 单位
      limit: 10 ** 5,  // 触发转化的下限值
      digit: 0  // 精度
    },
  ];

  /**
   *
   * @param num
   * @param digit
   * @param needRound  是否四舍五入
   */
  export const formatNumDigit = (num: number, digit: number = 2, needRound = true) => {
    const digitNum = 10 ** digit; // 精度处理
    if(needRound || Number.isInteger(num)) {
      const temp = Math.round(num * digitNum) / digitNum;
      return temp.toFixed(digit);
    }

    const numStr = num+"";
    let cutPosition = numStr.indexOf('.') + digit;
    if(digit) {
      cutPosition += 1;
    }
    const res = numStr.slice(0, cutPosition);
    return res;
  };

  export const getTicksUnit = (value: number) =>{
    let unitItem: Record<string, any> = {};
    for(const item of ticksUnitList) {
      if(value >= item.limit) {
        unitItem = item;
        break;
      }
    }

    return unitItem;
  };

  /**
   * 去掉tooltip Y 轴信息
   * @param records
   */
  export const tooltipFormatter = (records: Record<string, any>) =>{
    if(!Array.isArray(records) || !records.length) {
      return;
    }
    records.length = 1;
    records[0].value = null;
    const {origin, xField} = records[0];
    records[0].name = origin[xField];
  };