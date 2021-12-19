import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { Greeting, SelectCity } from '../../components';
import './home.scss';

const Home = () => {
  const history = useHistory();
  useEffect(() => {
    const city = localStorage.getItem('city');
    // if (city) history.push(`/s/${city}`);
  }, []);
  return (
    <div className="home-container">
      <Greeting />
      <SelectCity />
    </div>
  );
};

export default Home;
