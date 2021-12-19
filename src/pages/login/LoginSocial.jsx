import { IoLogoGoogle } from 'react-icons/io5';
import { Button } from '../../components';

const LoginSocial = () => {
  const buttonHandler = (e) => {
    e.preventDefault();
    console.log('google sign in clicked Clicked');
  };

  return (
    <div className="login-section login-social">
      <Button onClick={buttonHandler} icon={<IoLogoGoogle />} look="google">
        Continue With Google
      </Button>
    </div>
  );
};

export default LoginSocial;
