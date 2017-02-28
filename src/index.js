/**
 * Created by shenlu on 17/2/27.
 */
import { Router,Route, hashHistory } from 'react-router';
import ReactDOM from 'react-dom';
import React from 'react'
import configureStore from './store'
import { Provider } from 'react-redux'
import TodoComponent from './components'
import 'todomvc-app-css/index.css' // 引入todomvc的css模块

const store = configureStore()
ReactDOM.render(
    <Provider store={store}>
    <Router  history={hashHistory}>
        <Route path="/" component={TodoComponent}></Route>
    </Router>
    </Provider>,
    document.getElementById('root')
)
