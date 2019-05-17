import { createStore, combineReducers } from 'redux'
import usersReducer from '../reducers/users'
import collegesReducer from '../reducers/college'
const configureStore = ()=>{
    const store = createStore(combineReducers({
        users: usersReducer,
        colleges: collegesReducer
    }))
    return store
}
export default configureStore