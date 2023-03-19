import React from 'react';
import { AuthValidationItem } from '../AuthValidationItem/AuthValidationItem';
import { InputField } from '../InputField';
import './AuthForm.css';

export const AuthForm: React.FC = () => {
  return (
    <div className="container">
      <div className="form__wrapper">
        <form>
          <InputField
            className="first__column__wrapper"
            type="email"
            value=""
            placeholder="Email"
            label="Email"
            onChange={(e) => {
              console.log(e);
            }}
          />
          <div className="second__column__wrapper">
            <InputField
              className="password__wrapper"
              type="email"
              value=""
              placeholder="Password"
              label="Password"
              onChange={(e) => {
                console.log(e);
              }}
            />
            <AuthValidationItem text="8 characters minimum" className="validation__list" />
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};
