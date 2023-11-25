import React from 'react';
import styles from './Text.module.css';
import { Txt } from './Text.style';

type Props = {
  style?: any;
  children: React.ReactNode;
  color?: string;
  fontSize?: number;
};

const Text = ({ style, children, color = 'black', fontSize = 1 }: Props) => {
  return (
    <Txt
      style={style}
      className={`${
        color === 'black'
          ? styles.blackText
          : color === 'orange'
          ? styles.orangeText
          : color === 'red'
          ? styles.redText
          : styles.greenText
      }`}
      fontSize={fontSize}
    >
      {children}
    </Txt>
  );
};

export default Text;
