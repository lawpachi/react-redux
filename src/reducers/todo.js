/**
 * Created by shenlu on 17/2/28.
 */
import { handleActions } from 'redux-actions'
const initialState = [
    {
        text: 'Use Redux',
        completed: false,
        id: 0
    }
];
export default handleActions({
    'save todo list' (state, action) {
        state.unshift(
            {   text: action.payload,
                completed: false,
                id:state.reduce((pre, next) => { return Math.max(pre, next.id)+1},-1)
            }
        )
        return [
            ...state
        ]
    },
    'delect todo list'(state, action) {
        return state.filter((todo) => {
            return todo.id !== action.payload
        })
    },
    'complete todo list'(state, action) {
        return state.map((todo) =>{
            return todo.id === action.payload ?
                    Object.assign({}, todo, { completed: !todo.completed }) : todo
        })
    },
    'clear completed list'(state, action) {
        return state.filter(todo => todo.completed === false)
    },
    'complete all list'(state, action) {
        const areAllMarked = state.every(todo => todo.completed)
        return state.map(todo => Object.assign({}, todo, {
            completed: !areAllMarked
        }))
    },
},initialState)