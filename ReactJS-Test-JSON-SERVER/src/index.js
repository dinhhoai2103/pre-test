import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Switch } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'

import DefaultLayout from './layout/DefaultLayout'

import './index.css';

import Home from './pages/Home'
import User from './pages/User'
import Photo from './pages/Photo'
import Todo from './pages/Todo'
import Comment from './pages/Comment'

import myReducer from './redux/reducers/index'
import mySaga from './redux/sagas'
import history from './util/history'

import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(myReducer, applyMiddleware(...[sagaMiddleware, logger]))
sagaMiddleware.run(mySaga)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router  history={history}>
        <Switch>
        <DefaultLayout exact path="/" component= {Home} />
        <DefaultLayout exact path="/photo" component={Photo}/>
        <DefaultLayout exact path="/todo" component={Todo}/>
        <DefaultLayout exact path="/comment" component={Comment}/>
        <DefaultLayout exact path="/users/:id" component={User}/>

        </Switch>
      </Router>
    </Provider>
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
