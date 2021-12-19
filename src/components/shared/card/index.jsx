import './styles/card.scss';

const Card = ({ children, ...restProps }) => (
  <div {...restProps} className="card-container">
    {children}
  </div>
);

export default Card;
