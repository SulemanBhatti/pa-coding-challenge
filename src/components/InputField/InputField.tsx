import React from 'react';
import { InputFieldProps } from '../../types';

export const InputField: React.FC<InputFieldProps> = ({
  value,
  type,
  placeholder,
  label,
  className,
  onChange,
}) => {
  return (
    <div className={className}>
      <label htmlFor={placeholder}>{label}</label>
      <input type={type} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
};
