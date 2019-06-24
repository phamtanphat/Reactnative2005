import * as actionTypes from '../action/actionTypes'
export function FilterModeReducer(state = "Show_ALL" , action){
    switch(action.type){
        case actionTypes.SET_FILTER_MODE : return action.filterMode
        default : return state;
    }
}