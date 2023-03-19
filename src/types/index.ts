export type AuthValdationProps = {
  text: string;
  className: string;
};

export type InputFieldProps = {
  className: string;
  type: string;
  placeholder: string;
  value: string;
  label: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
