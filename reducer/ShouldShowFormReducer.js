export function ShouldShowFormReducer(state = false , action){
    switch(action.type){
        case "TOGGLE_FORM" : return !state
        case "ADD_WORD" : return !state
        default : return state;
    }

}