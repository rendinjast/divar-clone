import { useRouteMatch } from 'react-router-dom';
import { Socials } from '../..';
import Logo from '../../../assets/img/logo.svg';
import './footer.scss';

const Footer = () => {
  const home = useRouteMatch('/');
  if (home.isExact) return null;
  return (
    <div className="footer">
      <Logo />
      <Socials look="lighten" />
    </div>
  );
};

export default Footer;
