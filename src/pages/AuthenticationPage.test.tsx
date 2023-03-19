import React from 'react';
import { render, screen } from '@testing-library/react';
import { AuthenticationPage } from './AuthenticationPage';

test('render Authentication Email', () => {
  render(<AuthenticationPage />);
  const text = screen.getByText('Email');
  expect(text).toBeInTheDocument();
});

test('render Authentication Password', () => {
  render(<AuthenticationPage />);
  const text = screen.getByText('Password');
  expect(text).toBeInTheDocument();
});
