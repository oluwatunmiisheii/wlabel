import { ButtonHTMLAttributes, FC } from "react";
import  "./Button.css";
interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  children: React.ReactNode;
  variant: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'link';
  size: 'small' | 'medium' | 'large';
  disabled?: boolean;
  extraClass?: string;
}

export const Button: FC<IButtonProps> = (props) => {
  const { onClick, children, type } = props;

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={props.disabled}
      className={`button ${props.variant} ${props.size} ${props.extraClass}`}
      aria-label="button"
    >
      {children}
    </button>
  );
};
