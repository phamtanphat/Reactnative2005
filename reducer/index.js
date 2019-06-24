import { combineReducers } from 'redux'
import {WordReducer}  from './WordReducer';
import { FilterModeReducer } from './FilterModeReducer';
import { ShouldShowFormReducer } from './ShouldShowFormReducer';


const reducer = combineReducers({
    words : WordReducer,
    shouldShowForm : ShouldShowFormReducer,
    filterMode : FilterModeReducer
})
export default reducer
