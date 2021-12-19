import { Link } from '../..';
import greetingData from '../../../fixtures/greeting.json';
import './socials.scss';

const socials = ({ look }) => {
  return (
    <div className="socials">
      {greetingData.socials.data.map((social) => (
        <Link key={social.name} className={`${look} center`} to={social.link} icon={social.name} />
      ))}
    </div>
  );
};

export default socials;
