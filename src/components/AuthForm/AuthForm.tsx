import React from 'react';
import { AuthValidationItem } from '../AuthValidationItem/AuthValidationItem';
import { InputField } from '../InputField';
import './AuthForm.css';

export const AuthForm: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className="container">
      <div className="form__wrapper">
        <form>
          <InputField
            className="first__column__wrapper"
            type="email"
            value={email}
            placeholder="Email"
            label="Email"
            onChange={handleEmailChange}
          />
          <div className="second__column__wrapper">
            <InputField
              className="password__wrapper"
              type="password"
              value={password}
              placeholder="Password"
              label="Password"
              onChange={handlePasswordChange}
            />
            <AuthValidationItem text="8 characters minimum" className="validation__list" />
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};
