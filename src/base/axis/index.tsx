import {  Axis } from '@antv/f2'
import getAxisProps from './utils';

interface AxisWrapperProps {
    [key: string]: any
}
const AxisWrapper = (props: AxisWrapperProps) => {
  const newOption = getAxisProps(props)
  return (<>
        <Axis {...newOption} />
    </>
  )
}

export default AxisWrapper
