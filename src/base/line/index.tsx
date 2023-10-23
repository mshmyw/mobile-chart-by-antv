import {  Line } from '@antv/f2'
import { useEffect } from 'react';
import getLineProps from './utils';

interface LineWrapperProps {
  [key: string]: any
}

const LineWrapper = (props: LineWrapperProps) => {
  const newOption = getLineProps(props);
  return (<Line {...newOption} />)
}


export default LineWrapper
