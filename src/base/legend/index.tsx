import React from 'react';
import styles from "./index.module.css"

interface LegendItem {
    name?: string;
    value?: string;
    color?: string;
}

interface LegendProps {
    legendList: LegendItem[]
}

const defaultColor = '#0b7ff7'
const F2Legend: React.FC<LegendProps> = (props: LegendProps) => {
    const {legendList = []} = props
    const { name, value, color } = legendList?.[0] || {}
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div
        className={styles.legend}
        style={{
          backgroundColor: color || defaultColor,
        }}
      ></div>
      <div>
        <span>{name}: </span>
        <span>{value}</span>
      </div>
    </div>
  );
};

export default F2Legend;
