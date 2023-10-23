
interface LineWrapperProps {
  [key: string]: any
}

const getLineProps = (props: LineWrapperProps) => {
    const {
      scale = [],
      dim,
      color,
      shape,
  } = props;
  const fields = scale.map((item: Record<string, any>) => item.dataKey);
  const otherOption = {
      shape: [dim, shape],
      connectNulls: true,
  };

  const newOption: any = {
      x: fields[0],
      y: fields[1],
      color: [dim, color],
      ...(!props.isPolar ? otherOption : {}),
  };
  return newOption
}


export default getLineProps
