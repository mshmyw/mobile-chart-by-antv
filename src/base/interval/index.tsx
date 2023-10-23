import {  Interval } from '@antv/f2'
import getIntervalProps from './utils'

interface IntervalWrapperProps {
  [key: string]: any
}

const IntervalWrapper = (props: IntervalWrapperProps) => {
  const newOption: any = getIntervalProps(props)
  return (<>
    <Interval {...newOption} />
  </>)
}


export default IntervalWrapper
