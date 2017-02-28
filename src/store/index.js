/**
 * Created by shenlu on 17/2/28.
 */
import { createStore } from 'redux'
import rootReducer from '../reducers'
export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState)
    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers/index')
            store.replaceReducer(nextReducer)
        })
    }

    return store

}