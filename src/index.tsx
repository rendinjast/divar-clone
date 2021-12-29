import { render } from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import 'leaflet/dist/leaflet.css';
import store from './redux/store';
import ParentContext from './context';

render(
  <Provider store={store}>
    <ParentContext>
      <App />
    </ParentContext>
  </Provider>,
  document.getElementById('root')
);
