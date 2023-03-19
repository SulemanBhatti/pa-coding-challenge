import React from 'react';
import './AuthForm.css';

export const AuthForm: React.FC = () => {
  return (
    <div className="container">
      <div className="form__wrapper">
        <form>
          <div className="first__column__wrapper">
            <label htmlFor="Email">Email</label>
            <input type="Email" placeholder="Email" />
          </div>
          <div className="second__column__wrapper">
            <label htmlFor="Password">Password</label>
            <input type="Password" placeholder="Password" />
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};
