function FilterModeReducer(state = "Show_ALL" , action){
    switch(action.type){
        case "SET_FILTER_MODE" : return action.filterMode
        default : return state;
    }
}