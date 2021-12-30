import React from 'react';
import ReactDOM from 'react-dom';
import BaseRouter from '@/routes/index';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import configureStore from '@/redux/store/index';
import history from '@/routes/history';
import routes from './routes/index';
import renderRoutes from './components/render-routes';
import '@/style/index.less';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>{renderRoutes(routes)}</ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
