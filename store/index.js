import {createStore} from 'redux';
import { combineReducers } from 'redux'



const reducer = combineReducers({
    words : WordReducer,
    shouldShowForm : ShouldShowFormReducer,
    filterMode : FilterModeReducer
})

const store = createStore(reducer)
export default store
