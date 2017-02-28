/**
 * Created by shenlu on 17/2/28.
 */
import { createAction } from 'redux-actions'
export const saveTodoList = createAction('save todo list');
export const delectTodoList = createAction('delect todo list');
export const completeTodoList = createAction('complete todo list');
export const completeAllList = createAction('complete all list');
export const clearCompletedList = createAction('clear completed list');