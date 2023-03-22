import { Button as PrimeButton } from 'primereact/button';

type ButtonProps = {
  text: string;
  onClick?: () => void;
};

export function Button({ text, onClick }: ButtonProps) {
  return <PrimeButton onClick={onClick} label={text} />;
}
