import * as actionTypes from '../action/actionTypes'

export function WordReducer(state = [], action){
    switch(action.type){
        case actionTypes.SET_ALL_WORDS : {
            return action.words
        }
        case actionTypes.TOGGLE_WORD : {
            const newWords = state.map(w => {
                if(w._id !== action.word._id) return w
                return action.word
            })
            return newWords
        }
        case "ERROR_WORD" : {
            alert(action.error.message)
            return state
        }
        case actionTypes.REMOVE_WORD : {           
            const newWords = state.filter(w => w._id !== action.word._id)
            return newWords
        }
        case actionTypes.ADD_WORD : {
            const newWords = Object.assign([],state)
            newWords.unshift(action.word)
            return newWords
        }
        default : return state
    }
}

