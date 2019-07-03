import {connect} from 'react-redux'
import * as action from '../action/action'
import Form from '../components/Form';
import axios from 'axios'

const mapStateToProps = function(state){
    return {shouldShowForm : state.shouldShowForm}
}
const mapDispatchToProps = function(dispatch){
    return {
        onToggleForm : () =>{
            dispatch(action.onToggleForm())
        },
        onAddword : (txten , txtvn) => {
            const url = "https://serverwords.herokuapp.com/word/"
            axios.post(url ,{en : txten , vn : txtvn}) 
            .then(response => dispatch({type : "ADD_WORD" , word : response.data.word}))
        }
    }
}
const FormContainer = connect(mapStateToProps,mapDispatchToProps)(Form)
export default FormContainer