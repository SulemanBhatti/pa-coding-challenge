import React from 'react';
import { AuthValdationProps } from '../../types';
import './AuthValidationItem.css';

export const AuthValidationItem: React.FC<AuthValdationProps> = ({ text, className }) => {
  const checkValidtions = [
    {
      text: 'At least 8 characters',
      isValid: text.length >= 8,
    },
    {
      text: 'At least 1 number',
      isValid: text.match(/\d+/g),
    },
    {
      text: 'At least 1 uppercase letter',
      isValid: text.match(/[A-Z]/g),
    },
    {
      text: 'At least 1 lowercase letter',
      isValid: text.match(/[a-z]/g),
    },
    {
      text: 'At least 1 special character',
      isValid: text.match(/[^a-zA-Z\d]/g),
    },
  ];

  return (
    <div className={className}>
      {checkValidtions.map((i, index) => {
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
