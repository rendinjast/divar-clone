import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Card } from '../../components';
import LoginEmail from './LoginEmail';
import LoginSocial from './LoginSocial';
import './styles/login.scss';

const LoginSection = () => {
  let { pathname } = useLocation();
  pathname = pathname.substring(1).toLowerCase();
  const isSignUp = pathname === 'signup';
  return (
    <div className="login-container">
      <Card style={{ width: '390px' }}>
        <div className="login__header">
          <h2>{isSignUp ? 'Register' : 'Login'}</h2>
          {isSignUp ? (
            <p look="lighten center">
              By registering account, you agree to our
              <a href="/">&nbsp;Privacy policy</a>
              and
              <a href="/">&nbsp;Terms of service</a>.
            </p>
          ) : null}
        </div>
        <LoginEmail isSignUp={isSignUp} />
        <Link className="login__toggle-page" to={`/sign${isSignUp ? 'in' : 'up'}`}>
          {isSignUp ? 'already have account?' : "i don't have account"}
        </Link>
        <LoginSocial isSignUp={isSignUp} />
      </Card>
    </div>
  );
};

export default LoginSection;
