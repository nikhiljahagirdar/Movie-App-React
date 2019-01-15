import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import routes from './routes/AppRouter'
import {store} from './store/store';
import App from './App';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faFilm} from '@fortawesome/free-solid-svg-icons';
library.add(faStar, faFilm);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
);

module.hot.accept();