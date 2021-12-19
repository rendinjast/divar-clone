import './toggle.scss';

const Toggle = ({ label, check, setCheck }) => {
  return (
    <div className="toggle-container" onClick={() => setCheck((prv) => !prv)}>
      <span>{label}</span>
      <div className={`toggle ${check ? 'active' : ''}`} />
    </div>
  );
};

export default Toggle;
