/* eslint-disable arrow-body-style */
import { createPortal } from 'react-dom';
import { useAppContext } from '../../context/AppContext';
import { AppActionTypes } from '../../context/reducer/appReducer';
// import CreateCollection from './forms/CreateCollection';
import './popup.scss';

const form = (formComponent: string | null) => {
  switch (formComponent) {
    case 'workspace':
      // return <CreateWorkspace title="Create Workspace" />;
      return '';
    case 'collection':
      return '';
    // return <CreateCollection title="Add New Collection" />;
    default:
      return 'theres nothing to show ❗ ';
  }
};
const PopUp = () => {
  const { appState, appDispatch } = useAppContext();
  const hidePopUpDispatch = () => {
    appDispatch({ type: AppActionTypes.POPUP_HIDE });
  };
  return createPortal(
    <>
      <div className="modal-background" onClick={hidePopUpDispatch} />

      <div className="modal__container light-theme">
        <div className="modal">{form(appState.popup)}</div>
      </div>
    </>,
    document.getElementById('popup')!
  );
};

export default PopUp;
