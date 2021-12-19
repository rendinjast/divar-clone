/* eslint-disable react/forbid-prop-types */
import { memo, useEffect, useRef, useState } from 'react';
import { IoChevronDownOutline, IoSearchOutline } from 'react-icons/io5';
import { Button, TextField } from '..';
import useOutsideClick from '../../hooks/useOutsideClick';
import './selector.scss';

interface Props {
  searchable?: boolean;
  options: object[];
  setSelected?: any;
  selected?: any;
  placeholder?: string;
  label: string;
  value: string;
  handleError?: string;
}
const Selector = ({
  options = [],
  selected,
  setSelected,
  searchable,
  label,
  value,
  placeholder,
  handleError,
}: Props) => {
  const [lists, setLists] = useState<any[]>(options);
  const [formInput, setFormInput] = useState<string>('');
  const ref = useRef(null);
  const [expanded, setExpanded] = useState(false);
  const [filter, setFilter] = useState('');
  const outside = useOutsideClick(ref);
  useEffect(() => {
    setLists(options.filter((list) => list[label].indexOf(filter) > -1));
  }, [filter]);

  useEffect(() => {
    if (outside) {
      setExpanded(false);
    }
  }, [outside]);
  const onClickHandler = (op: object) => {
    setExpanded(false);
    setSelected(op);
  };

  return (
    <>
      <div ref={ref} className={`selector ${expanded ? 'expanded' : ''}`}>
        <div
          className="selector__header"
          onClick={() => setExpanded((prv) => !prv)}
          style={{ borderColor: handleError && '#ea5f51' }}
        >
          <span className={placeholder && !selected ? 'textview lighten' : ''}>
            {selected ? selected[label] : placeholder}
          </span>
          <IoChevronDownOutline />
        </div>
        {expanded && (
          <div className="selector__lists">
            {searchable && (
              <div className="selector__search">
                <TextField
                  icon={IoSearchOutline}
                  handleValue={filter}
                  handleChange={(e) => setFilter(e.target.value)}
                  placeholder="جست‌و‌جو کنید..."
                />
              </div>
            )}
            <div className="selector__options">
              {lists.map((item) => (
                <Button
                  onClick={() => onClickHandler(item)}
                  look="option"
                  key={item[value]}
                  text={item[label]}
                />
              ))}
            </div>
          </div>
        )}
      </div>
      {handleError && <span className="textview error">{handleError}</span>}
    </>
  );
};

export default memo(Selector);
