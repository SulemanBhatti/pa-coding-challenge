import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('render App', () => {
  render(<App />);
  const text = screen.getByText('Move to /signup route');
  expect(text).toBeInTheDocument();
});
