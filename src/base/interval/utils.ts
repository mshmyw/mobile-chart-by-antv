interface IntervalWrapperProps {
  [key: string]: any
}

const getIntervalProps = (props: IntervalWrapperProps) => {
    const {
        scale = [],
        dim,
        color,
        adjust
    } = props;
  const fields = scale.map((item: Record<string, any>) => item.dataKey);
  const newOption = {
      x: fields[0],
      y: fields[1],
      color: [dim, color],
      adjust
  };
  return newOption
}


export default getIntervalProps
