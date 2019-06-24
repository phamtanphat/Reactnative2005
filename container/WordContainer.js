import {connect} from 'react-redux';
import * as action from '../action/action'
import Word from '../components/Word'

const mapDispatchToProps = (dispatch) => {
    return {
        onToggleWord : (id) => {
            dispatch(action.onToggleWord(id))
        },
        onRemoveWord : (id) => {
            dispatch(action.onRemoveWord(id))
        }
    }
}
const WordContainer = connect(null, mapDispatchToProps)(Word)
export default WordContainer