import React from 'react';
import { AuthValdationProps } from '../../types';
import './AuthValidationItem.css';

export const AuthValidationItem: React.FC<AuthValdationProps> = ({ validations, className }) => {
  return (
    <div className={className}>
      {validations.map((i, index) => {
        return (
          <div key={index}>
            <img src={i.isValid ? 'assets/tick.png' : 'assets/cross.png'} />
            <p>{i.text}</p>
          </div>
        );
      })}
    </div>
  );
};
