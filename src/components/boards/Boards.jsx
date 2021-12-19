/* eslint-disable no-shadow */
import { useRef, useState } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { IoAddOutline, IoCloseOutline } from 'react-icons/io5';
import BoardCard from './boards.scss';

const Boards = ({ ls, index }) => {
  const addTodoInput = useRef();
  const [showAddButton, setShowAddButton] = useState(false);
  const [showAddInput, setShowAddInput] = useState(false);
  const [addItemValue, setAddItemValue] = useState('');

  const items = [
    {
      id: 'aa1',
      name: 'fucking nothing',
      desc: 'another fucking accident out of control',
    },
    {
      id: 'aa2',
      name: 'fucking nothing',
      desc: 'another fucking accident out of control',
    },
    {
      id: 'aa3',
      name: 'fucking nothing',
      desc: 'another fucking accident out of control',
    },
  ];
  const submitAddItem = (e) => {
    e.preventDefault();
    setAddItemValue('');
  };
  return (
    <Draggable draggableId={ls.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          className="board-container"
          onClick={() => setShowAddInput(false)}
          onMouseEnter={() => setShowAddButton(true)}
          onMouseLeave={() => (showAddInput ? setShowAddButton(true) : setShowAddButton(false))}
        >
          <div {...provided.dragHandleProps} className="board__header">
            <span className="board__title">{ls.name}</span>
            <span className="board__count">6</span>
          </div>
          <Droppable droppableId={ls.id} type="ITEMS">
            {(provided) => (
              <div ref={provided.innerRef} className="board__items">
                {items.map((item, index) => (
                  <BoardCard key={item.id} item={item} index={index} />
                ))}
              </div>
            )}
          </Droppable>
          {showAddButton && (
            <span
              ref={addTodoInput}
              onClick={(e) => {
                e.stopPropagation();
                setShowAddInput(true);
              }}
              className="add-item flex-vertical"
            >
              {showAddInput ? (
                <>
                  <form onSubmit={submitAddItem}>
                    <input
                      className="add-item__input"
                      value={addItemValue}
                      onChange={(e) => setAddItemValue(e.target.value)}
                      placeholder="new item..."
                    />
                  </form>
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowAddInput(false);
                      setAddItemValue('');
                    }}
                    className="icon-24"
                  >
                    <IoCloseOutline />
                  </span>
                </>
              ) : (
                <IoAddOutline />
              )}
            </span>
          )}
        </div>
      )}
    </Draggable>
  );
};

export default Boards;
