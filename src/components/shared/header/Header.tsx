import { useState, useEffect, useRef } from 'react';
import { IoMenuOutline } from 'react-icons/io5';
import Logo from '../../../assets/img/logo.svg';
import lists from '../../../fixtures/header.json';
import { Button, Link } from '../..';
import useResponsive from '../../../hooks/useResponsive';
import './header.scss';
import useOutsideClick from '../../../hooks/useOutsideClick';

const Header = () => {
  const responsive = useResponsive();
  const ref = useRef(null);
  const outside = useOutsideClick(ref);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  useEffect(() => {
    if (outside) {
      setShowMobileMenu(false);
    }
  }, [outside]);

  return (
    <header className="header__container no-select">
      <Link to="/" className="header__logo" icon={Logo} />
      <div ref={ref} className="header__menu">
        <div className={`header__lists ${showMobileMenu && 'active'}`}>
          {lists.map((list: { url: string; id: number; name: string }) => (
            <Link className="lighten" to={list.url} key={list.id} text={list.name} />
          ))}
        </div>
        <Link to="/new" className="primary bold space" text="ثبت آگهی" />

        {responsive === 'mobile' && (
          <Button icon={IoMenuOutline} onClick={() => setShowMobileMenu((prv) => !prv)} />
        )}
      </div>
    </header>
  );
};

export default Header;
