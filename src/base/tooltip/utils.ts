import { deepMix } from "@antv/util";
import { defaultTooltip } from '../../utils/theme';

interface TooltipWrapperProps {
    [key: string]: any
}

const getTooltipProps = (props: TooltipWrapperProps) => {
    const {option} = props
    const newOption  = deepMix({}, defaultTooltip, option);

  return newOption
}


export default getTooltipProps
