import React from 'react';
import styles from './FormRow.module.css';
import { FrmRow } from './FormRow.style';

type Props = {
  title: string;
  children: React.ReactNode;
};

const FormRow = ({ title, children }: Props) => {
  return (
    <FrmRow>
      <div className={styles.formRowTitle}>{title}</div>
      {children}
    </FrmRow>
  );
};

export default FormRow;
