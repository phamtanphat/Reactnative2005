import {createStore} from 'redux';
import { combineReducers } from 'redux'

// const defaultState = {
    //     words: [
    //       { id: "a1", en: "One", vn: "Mot", isMemorized: true },
    //       { id: "a2", en: "Two", vn: "Hai", isMemorized: false },
    //       { id: "a3", en: "Three", vn: "Ba", isMemorized: false },
    //       { id: "a4", en: "Four", vn: "Bon", isMemorized: false },
    //       { id: "a5", en: "Five", vn: "Nam", isMemorized: true },
    //       { id: "a6", en: "Six", vn: "Sau", isMemorized: false }
    //     ],  
    //     filterMode : 'Show_ALL',
    //     shouldShowForm: false
    // }

    // (state = defaultState ,action) => {
    //     switch(action.type){
    //         case "TOGGLE_WORD" : {
    //           const newWords = state.words.map(w => {
    //               if(w.id !== action.id) return w
    //               return {...w , isMemorized : !w.isMemorized}
    //           })
    //           return {...state , words : newWords}
    //         }
            // case "REMOVE_WORD" : {           
            //   const newWords = state.words.filter(w => w.id !== action.id)
            //   return {...state , words : newWords}
            // }
    //         case "SET_FILTER_MODE" : return {...state , filterMode : action.filterMode}
    //         case "TOGGLE_FORM" : return {...state , shouldShowForm : !state.shouldShowForm}
    //         case "ADD_WORD" : {
    //            const newWords = Object.assign([],state.words)
    //            newWords.unshift(action.word)
    //            return {...state, words : newWords , shouldShowForm : !state.shouldShowForm}
    //         }
    //         default : return state
    //     }
// }
const defaultWords = [
        { id: "a1", en: "One", vn: "Mot", isMemorized: true },
        { id: "a2", en: "Two", vn: "Hai", isMemorized: false },
        { id: "a3", en: "Three", vn: "Ba", isMemorized: false },
        { id: "a4", en: "Four", vn: "Bon", isMemorized: false },
        { id: "a5", en: "Five", vn: "Nam", isMemorized: true },
        { id: "a6", en: "Six", vn: "Sau", isMemorized: false }
    ]
function WordReducer(state = defaultWords, action){
    switch(action.type){
        case "TOGGLE_WORD" : {
            const newWords = state.map(w => {
                if(w.id !== action.id) return w
                return {...w, isMemorized : !w.isMemorized}
            })
            return newWords
        }
        case "REMOVE_WORD" : {           
            const newWords = state.filter(w => w.id !== action.id)
            return newWords
        }
        case "ADD_WORD" : {
            const newWords = Object.assign([],state)
            newWords.unshift(action.word)
            return newWords
        }
        default : return state
    }
}
function ShouldShowFormReducer(state = false , action){
    switch(action.type){
        case "TOGGLE_FORM" : return !state
        case "ADD_WORD" : return !state
        default : return state;
    }

}
function FilterModeReducer(state = "Show_ALL" , action){
    switch(action.type){
        case "SET_FILTER_MODE" : return action.filterMode
        default : return state;
    }
}

const reducer = combineReducers({
    words : WordReducer,
    shouldShowForm : ShouldShowFormReducer,
    filterMode : FilterModeReducer
})

const store = createStore(reducer)
export default store
