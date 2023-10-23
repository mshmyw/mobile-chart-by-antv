import {  Tooltip } from '@antv/f2'
import { IRecord } from '../../types';
import getTooltipProps from './utils';

interface TooltipWrapperProps {
    [key: string]: any
    onChange: (records: IRecord[]) => void
}

const TooltipWrapper = (props: TooltipWrapperProps) => {
    const {onChange: onTooltipChange} = props
    const newOption  = getTooltipProps(props)
    const onChange = (records: IRecord[]) => {
      if (typeof onTooltipChange === 'function') {
        onTooltipChange(records);
      }
    }
  return (<>
    <Tooltip {...newOption}
      onChange={onChange} />
    </>)
}


export default TooltipWrapper
