import { FC } from 'react';
import { IconType } from 'react-icons';
import './button.scss';
import { IconSelector, IIcon } from '../../../utils/iconSelector';

interface IButton extends IIcon {
  text?: string;
  onClick: () => void;
  submit?: boolean;
  disabled?: boolean;
  look?: 'primary' | 'outline' | 'lighten';
  className?: string;
}
const Button: FC<IButton> = ({
  text,
  onClick,
  submit,
  icon,
  look = '',
  className,
  disabled,
  ...props
}) => (
  <button
    type={submit ? 'submit' : 'button'}
    onClick={onClick}
    className={`${look} ${className} btn no-select`}
    disabled={disabled}
    {...props}
  >
    {icon && <span className="btn__icon">{IconSelector({ icon })}</span>}
    <span>{text}</span>
  </button>
);
export default Button;
