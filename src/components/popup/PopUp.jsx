/* eslint-disable arrow-body-style */
import { createPortal } from 'react-dom';
import { POPUP_HIDDEN } from '../../context/types/uiTypes';
import { useUiContext } from '../../context/UiContext';
// import CreateCollection from './forms/CreateCollection';
import './popup.scss';

const form = (formComponent) => {
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
  const { uiState, uiDispatch } = useUiContext();
  const hidePopUpDispatch = () => {
    uiDispatch({ type: POPUP_HIDDEN });
  };
  return createPortal(
    <>
      <div type="button" className="modal-background" onClick={hidePopUpDispatch} />

      <div className="modal__container light-theme">
        <div className="modal">{form(uiState.popup.component.name)}</div>
      </div>
    </>,
    document.getElementById('popup')
  );
};

export default PopUp;
