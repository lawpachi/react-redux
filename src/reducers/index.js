/**
 * Created by shenlu on 17/2/28.
 */
import { combineReducers } from 'redux'
import {routerReducer as routing} from 'react-router-redux'
import todos from './todo'

export default combineReducers({
    todos
})