import * as actionTypes from '../action/actionTypes'
export function ShouldShowFormReducer(state = false , action){
    switch(action.type){
        case actionTypes.TOGGLE_FORM : return !state
        case actionTypes.ADD_WORD : return !state
        default : return state;
    }

}