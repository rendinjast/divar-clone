import { IoChevronDownOutline } from 'react-icons/io5';
import './collapse.scss';

const Collapse = ({ children, title, show, setShow }) => {
  return (
    <div className={`collapse ${show ? 'active' : ''}`}>
      <div className="collapse__header" onClick={() => setShow((prv) => !prv)}>
        <IoChevronDownOutline />
        {title}
      </div>
      <div className="collapse__content">{children}</div>
    </div>
  );
};

export default Collapse;
