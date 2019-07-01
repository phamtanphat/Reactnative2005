import * as actionTypes from './actionTypes'

//actionCreateTor
export const onToggleForm = () => {
    return {
        type : actionTypes.TOGGLE_FORM
    }
}
export const onAddword = (word) => {
    return {
        type : actionTypes.ADD_WORD,
        word
    }
}
export const onSetfiltermode = (filterMode) =>{
   return {
       type : actionTypes.SET_FILTER_MODE,
       filterMode
   }
}
export const onToggleWord = (id) =>{
    return {
        type : actionTypes.TOGGLE_WORD,
        id
    }
}
export const onRemoveWord = (id) =>{
    return {
        type : actionTypes.REMOVE_WORD,
        id
    }
}
export const onsetallwords = (words) =>{
    return {
        type : actionTypes.SET_ALL_WORDS,
        words
    }
}


