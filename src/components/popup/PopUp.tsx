/* eslint-disable arrow-body-style */
import { createPortal } from 'react-dom';
import { useAppContext } from '../../context/AppContext';
import { AppActionTypes } from '../../context/reducer/appReducer';
// import CreateCollection from './forms/CreateCollection';
import './popup.scss';

const PopUp = () => {
  const {
    appState: { popup },
    appDispatch,
  } = useAppContext();
  const hidePopUpDispatch = () => {
    appDispatch({ type: AppActionTypes.POPUP_HIDE });
  };
  return createPortal(
    popup && (
      <>
        <div className="modal-background" onClick={hidePopUpDispatch} />
        <div className="modal__container light-theme">
          <div className="modal">{popup}</div>
        </div>
      </>
    ),
    document.getElementById('popup')!
  );
};

export default PopUp;
