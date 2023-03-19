export type AuthValdationProps = {
  className: string;
  validations: (
    | { text: string; isValid: boolean }
    | { text: string; isValid: RegExpMatchArray | null }
  )[];
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
