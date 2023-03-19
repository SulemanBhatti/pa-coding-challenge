import React from 'react';
import { AuthValdiaionProps } from '../../types';
import './AuthValidation.css';

export const AuthValidation: React.FC<AuthValdiaionProps> = ({ text, className }) => {
  return (
    <div className={className}>
      <img src="assets/tick.png" />
      <p>{text}</p>
    </div>
  );
};
