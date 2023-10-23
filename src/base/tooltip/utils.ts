import { deepMix } from "@antv/util";
import { defaultTooltip } from '../../utils/theme';

interface TooltipWrapperProps {
    [key: string]: any
}

const getTooltipProps = (props: TooltipWrapperProps) => {
    const newOption  = deepMix({}, defaultTooltip, props);

  return newOption
}


export default getTooltipProps
