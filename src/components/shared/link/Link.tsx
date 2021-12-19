import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { IconSelector, IIcon } from '../../../utils/iconSelector';
import './link.scss';

interface ILink extends IIcon {
  to: string;
  text?: string;
  className?: string;
}
const Link: FC<ILink> = ({ to, text, icon, className, ...props }) => {
  return (
    <RouterLink className={`link ${className}`} to={{ pathname: to }}>
      {text}
      {IconSelector({ icon })}
    </RouterLink>
  );
};

export default Link;
