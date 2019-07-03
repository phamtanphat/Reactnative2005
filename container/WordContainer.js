import {connect} from 'react-redux';
import * as action from '../action/action'
import Word from '../components/Word'
import axios from 'axios'

const mapDispatchToProps = (dispatch) => {
    return {
        onToggleWord : (_id , isMemorized) => {
            const url = "https://serverwords.herokuapp.com/word/"
            axios.put(url + _id , {isMemorized})
            .then(response => dispatch({type : "TOGGLE_WORD" , word : response.data.word}))

        },
        onRemoveWord : (id) => {
            dispatch(action.onRemoveWord(id))
        }
    }
}
const WordContainer = connect(null, mapDispatchToProps)(Word)
export default WordContainer