import { Link } from 'react-router-dom';
import { IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter, IoLogoYoutube } from 'react-icons/io5';
import './greeting.scss';
import Enamad from '../../../assets/img/enamad.png';
import Samandehi from '../../../assets/img/samandehi.png';
import Etehadie from '../../../assets/img/etehadie.png';
import greeting from '../../../fixtures/greeting.json';
import { Socials } from '../..';

const Greeting = () => {
  return (
    <div className="greeting">
      <div className="greeting__description">
        <p>دیوار! پایگاه خرید و فروش بی‌واسطه‌</p>
        <p>اگه دنبال چیزی هستی، شهرت رو انتخاب کن و تو دسته‌بندی‌ها به دنبالش بگرد.</p>
        <p>اگر هم می‌خوای چیزی بفروشی، چند تا عکس خوب ازش بگیر و آگهیت رو بچسبون به دیوار.</p>
        <p>
           علاوه بر وبسایت، می‌تونی از دیوار روی
          {' '}
          <Link to="https://play.google.com">اندروید</Link>
          {'، '}
          <Link to="https://store.apple.com">آیفون</Link>
          {' و '}
          <Link to="https://store.apple.com"> آیپد</Link>
          {' '}
          هم استفاده کنی.
        </p>
      </div>
      <div className="greeting__trust">
        <Link to="//google.ir" replace>
          <img src={Enamad} alt="" />
        </Link>
        <Link to="https://enamad.ir">
          <img src={Samandehi} alt="" />
        </Link>
        <Link to="https://enamad.ir">
          <img src={Etehadie} alt="" />
        </Link>
      </div>
      <h3>دیوار را در شبکه‌های اجتماعی دنبال کنید:</h3>
      <Socials look="primary" />
    </div>
  );
};

export default Greeting;
