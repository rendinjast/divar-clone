import { FC, useState } from 'react';
import { IconType } from 'react-icons/lib';
import './textField.scss';

interface ITextField {
  name?: string;
  type?: string;
  look?: string;
  focus?: boolean;
  icon?: IconType;
  placeholder?: string;
  handleValue?: string | number;
  handleBlur?: () => void;
  handleChange?: (e: any) => void;
  handleError?: string;
}
const TextField: FC<ITextField> = ({
  name,
  type,
  look,
  focus,
  icon,
  placeholder,
  handleBlur,
  handleChange,
  handleValue,
  handleError,
}) => {
  const [focused, setFocused] = useState(false);
  return (
    <>
      <div
        style={{ borderColor: handleError && '#ff7d7d' }}
        className={`input-container ${focused ? 'focused' : ''} ${look}`}
      >
        <input
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus={focus}
          name={name}
          placeholder={placeholder}
          type={type}
          onFocus={() => setFocused(true)}
          onBlur={() => handleBlur}
          value={handleValue}
          onChange={handleChange}
        />
        {icon}
      </div>
      {handleError && <span className="textview error">{handleError}</span>}
    </>
  );
};

export default TextField;
