import React from 'react';
import './AuthForm.css';

export const AuthForm: React.FC = () => {
  return (
    <div className="form__wrapper">
      <form>
        <div className="form__input">
          <label htmlFor="Email">Email</label>
          <input type="Email" placeholder="Email" />
        </div>
        <div className="form__input">
          <label htmlFor="Password">Password</label>
          <input type="Password" placeholder="Password" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
