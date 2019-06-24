import { combineReducers } from 'redux'
import WordReducer  from './WordReducer';



const reducer = combineReducers({
    words : WordReducer,
    shouldShowForm : ShouldShowFormReducer,
    filterMode : FilterModeReducer
})