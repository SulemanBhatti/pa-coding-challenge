import React from 'react';
import './AuthForm.css';

export const AuthForm: React.FC = () => {
  return (
    <div className="form__wrapper">
      <form>
        <input type="Email" placeholder="Username/Email" />
        <input type="Password" placeholder="Password" />
      </form>
    </div>
  );
};
