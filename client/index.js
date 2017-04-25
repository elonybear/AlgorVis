//libraries
import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';

//Components
import Base from './components/Base';

import configureStore from './store/configureStore';

const store = configureStore(require('./store/defaultStore.json'));

ReactDOM.render(
  <Provider store={store}>
    <Base />
  </Provider>,
  document.getElementById('root')
);
