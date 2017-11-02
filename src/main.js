import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { configureStore } from './utils';
import rootReducer from './rootReducer';
import { TooltipDemo } from './pages';


const store = configureStore(rootReducer);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <TooltipDemo />
    </Provider>,
    document.getElementById('mount'),
  );
});
