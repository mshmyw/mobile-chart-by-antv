import {  Interval } from '@antv/f2'
import { useEffect } from 'react';

interface IntervalWrapperProps {
    option: any
}

const IntervalWrapper = (props: IntervalWrapperProps) => {
    const {option} = props
    const {
        scale = [],
        dim,
        color,
        ...rest
    } = option;
  useEffect(() =>{
    // initInterval()
  }, [])
  const fields = scale.map((item: Record<string, any>) => item.dataKey);
  const newOption = {
      x: fields[0],
      y: fields[1],
      color: [dim, color],
      ...rest
  };
  return (<>
  <Interval {...newOption} />
  </>)
}


export default IntervalWrapper
