import React from 'react';
import { Inp } from '../Input/Input.style';

type Props = {
  name: string;
  width?: string;
  height?: string;
  value: any;
  onChange: any;
  color?: 'black' | 'orange';
  fontSize?: number;
};

const DatePicker = ({
  name,
  width = 'auto',
  height = 'auto',
  value,
  onChange,
  color = 'black',
  fontSize = 1,
}: Props) => {
  return (
    <Inp
      type="date"
      name={name}
      value={value}
      onChange={onChange}
      width={width}
      height={height}
      color={color}
      fontSize={fontSize}
    />
  );
};

export default DatePicker;
