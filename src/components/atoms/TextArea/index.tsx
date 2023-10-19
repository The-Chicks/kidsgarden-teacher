import React from 'react';
import { StyledTextArea } from './TextArea.style';

type Props = {
  name: string;
  width?: string;
  height?: string;
  placeholder?: string;
  value: any;
  onChange: any;
  color?: 'black' | 'orange';
  fontSize?: number;
};

const TextArea = ({
  name,
  width = 'auto',
  height = 'auto',
  placeholder = '',
  value,
  onChange,
  color = 'black',
  fontSize = 1,
}: Props) => {
  return (
    <StyledTextArea
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      width={width}
      height={height}
      color={color}
      fontSize={fontSize}
    />
  );
};

export default TextArea;
