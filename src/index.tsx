import ReactDOM from 'react-dom/client';
import './index.scss';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import store from './components/store';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);