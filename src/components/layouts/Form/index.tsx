import React from 'react';
import { Frm } from './Form.style';

type Props = {
  children: React.ReactNode;
};

const Form = ({ children }: Props) => {
  return (
    <Frm
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      {children}
    </Frm>
  );
};

export default Form;
