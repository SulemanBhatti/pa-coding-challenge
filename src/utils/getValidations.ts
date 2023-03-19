export const getValidations = (text: string) => [
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
