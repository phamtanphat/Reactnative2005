import * as actionTypes from '../action/actionTypes'
const defaultWords = [
    { id: "a1", en: "One", vn: "Mot", isMemorized: true },
    { id: "a2", en: "Two", vn: "Hai", isMemorized: false },
    { id: "a3", en: "Three", vn: "Ba", isMemorized: false },
    { id: "a4", en: "Four", vn: "Bon", isMemorized: false },
    { id: "a5", en: "Five", vn: "Nam", isMemorized: true },
    { id: "a6", en: "Six", vn: "Sau", isMemorized: false }
]

export function WordReducer(state = defaultWords, action){
    switch(action.type){
        case actionTypes.TOGGLE_WORD : {
            const newWords = state.map(w => {
                if(w.id !== action.id) return w
                return {...w, isMemorized : !w.isMemorized}
            })
            return newWords
        }
        case actionTypes.REMOVE_WORD : {           
            const newWords = state.filter(w => w.id !== action.id)
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

