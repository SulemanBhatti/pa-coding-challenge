import React from 'react';
import { AuthValdationProps } from '../../types';
import './AuthValidationItem.css';

export const AuthValidationItem: React.FC<AuthValdationProps> = ({ text, className }) => {
  return (
    <div className={className}>
      <img src="assets/tick.png" />
      <p>{text}</p>
    </div>
  );
};
