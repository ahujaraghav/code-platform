import { createStore, combineReducers } from 'redux'
import usersReducer from '../reducers/users'
const configureStore = ()=>{
    const store = createStore(combineReducers({
        users: usersReducer
    }))
    return store
}
export default configureStore