import React from 'react';
import { getValidations } from '../../utils/getValidations';
import { AuthValidationItem } from '../AuthValidationItem/AuthValidationItem';
import { InputField } from '../InputField';
import './AuthForm.css';

export const AuthForm: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { validations, isAuthenticated } = getValidations(password);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isAuthenticated) {
      alert('Congratulation! You have successfully logged in!');
    }
  };

  return (
    <div className="container">
      <div className="form__wrapper">
        <form onSubmit={onSubmitHandler}>
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
            <AuthValidationItem validations={validations} className="validation__list" />
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};
