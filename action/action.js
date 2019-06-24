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