import {createStore} from 'redux';

const defaultState = {
    words: [
      { id: "a1", en: "One", vn: "Mot", isMemorized: true },
      { id: "a2", en: "Two", vn: "Hai", isMemorized: false },
      { id: "a3", en: "Three", vn: "Ba", isMemorized: false },
      { id: "a4", en: "Four", vn: "Bon", isMemorized: false },
      { id: "a5", en: "Five", vn: "Nam", isMemorized: true },
      { id: "a6", en: "Six", vn: "Sau", isMemorized: false }
    ],  
    filterMode : 'Show_ALL',
    shouldShowForm: false
}
const store = createStore((state = defaultState ,action) => {
    switch(action.type){
        case "TOGGLE_WORD" : {
          const newWords = state.words.map(w => {
              if(w.id !== action.id) return w
              return {...w , isMemorized : !w.isMemorized}
          })
          return {...state , words : newWords}
        }
        case "REMOVE_WORD" : {           
          const newWords = state.words.filter(w => w.id !== action.id)
          return {...state , words : newWords}
        }
        case "SET_FILTER_MODE" : return {...state , filterMode : action.filterMode}
        case "TOGGLE_FORM" : return {...state , shouldShowForm : !state.shouldShowForm}
        case "ADD_WORD" : {
           const newWords = Object.assign([],state.words)
           newWords.unshift(action.word)
           return {...state, words : newWords , shouldShowForm : !state.shouldShowForm}
        }
        default : return state
    }
})
export default store
