import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { requestRobots, searchRobots } from './reducers';
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';

const rootReducer = combineReducers({requestRobots, searchRobots});
const logger = createLogger();
const STORE = createStore(
  rootReducer, 
  applyMiddleware(thunk, logger)
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={STORE} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
