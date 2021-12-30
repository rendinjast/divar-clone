import { useState, useEffect, useRef } from 'react';
import { IoLocation, IoLocationOutline, IoMenuOutline, IoSearch } from 'react-icons/io5';
import Logo from '../../../assets/img/logo.svg';
import lists from '../../../fixtures/header.json';
import { Button, Link, TextField } from '../..';
import useResponsive from '../../../hooks/useResponsive';
import './header.scss';
import useOutsideClick from '../../../hooks/useOutsideClick';
import { useSelector } from 'react-redux';
import { CitiesSelector } from '../../../redux/features/cities/citiesSlice';

const Header = () => {
  const device = useResponsive();
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
      <div className="header">
        <div className="header__right">
          <Link to="/" className="header__logo" icon={Logo} />
          <form>
            <TextField icon={<IoSearch />} placeholder="جست‌و‌جو در همه آگهی‌ها..." />
          </form>
        </div>
        <div ref={ref} className="header__left">
          <div className={`header__lists ${showMobileMenu && 'active'}`}>
            {device === 'desktop' &&
              lists.map((list: { url: string; id: number; name: string }) => (
                <Link className="lighten" to={list.url} key={list.id} text={list.name} />
              ))}
          </div>
          <Link to="/new" className="primary bold space" text="ثبت آگهی" />

          {device !== 'desktop' && (
            <Button icon={IoMenuOutline} onClick={() => setShowMobileMenu((prv) => !prv)} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
