import {connect} from 'react-redux'
import * as action from '../action/action'
import Form from '../components/Form';

const mapStateToProps = function(state){
    return {shouldShowForm : state.shouldShowForm}
}
const mapDispatchToProps = function(dispatch){
    return {
        onToggleForm : () =>{
            dispatch(action.onToggleForm())
        },
        onAddword : (word) => {
            dispatch(action.onAddword(word))
        }
    }
}
const FormContainer = connect(mapStateToProps,mapDispatchToProps)(Form)
export default FormContainer