import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Route from './components/Route';
import { loadRecipes } from './actions';
import './index.css';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));
// store.dispatch(loadRecipes());
// setTimeout(() => {
//   console.log(store.getState());
// }, 5000);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Route />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
