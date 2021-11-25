import * as React from 'react';

import styles from './style.css';

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: string | JSX.Element | JSX.Element[];
  dataType?: 'primary' | 'secondary' | 'simple-text' | 'simple-icon';
  dataSize?: 'big' | 'small';
  dataForm?: 'rounded' | 'rectangle' | 'circle' | 'square';
  dataBg?: 'light' | 'dark';
  dataIcon?: string;
  dataIconPosition?: 'start' | 'end' | 'center' | 'center-start' | 'center-end';
}

const Button: React.FC<Props> = ({
  className,
  dataType,
  dataSize,
  dataForm,
  dataBg,
  dataIcon,
  dataIconPosition,
  children,
  ...props
}: Props) => {
  return (
    <button
      {...props}
      className={`${styles.button} ${className}`}
      type={props.type || 'button'}
      data-size={dataSize || 'big'}
      data-type={dataType || 'primary'}
      data-form={dataForm || 'rounded'}
      data-bg={dataBg || 'light'}
      data-icon={dataIcon}
      data-icon-position={dataIconPosition}
    >
      {children}
    </button>
  );
};

export { Button, Props as ButtonProps };
