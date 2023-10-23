export const defaultTooltip = {
    visible: true,
    padding: '30px',  // 距离画布顶端距离
    snap: true,
    showCrosshairs: true,
    alwaysShow: true,
    showItemMarker: false,
    background: {
      radius: 4,
      fill: '#000',
      padding: [5,5]
    },
    nameStyle: {
      fontSize: 13,
      fill: '#fff',
    }
  };

  const defaultGrid = {
    stroke: '#e7e7e7',
    lineWidth: 0.5,
    lineDash: null
  };

  export const defaultTheme = {
    colors: ['#0b7ff7', '#77e0de', '#ffc159'],
    areaColor: 'l(90) 0:#c1e0fe 1:#ffffff',
    grid: [{lineWidth: 0}, defaultGrid]
  };