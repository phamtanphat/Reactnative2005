import {connect} from 'react-redux'
import List  from '../components/List'
import * as action from '../action/action'
import axios from 'axios'
const mapStateToprops = (state) => {
    return (
        {
            words : state.words , 
            filterMode : state.filterMode,
        }
    )
}
const mapDispatchToProps = (dispatch) =>{
    return {
        getallWords : () =>{
            const url = "https://serverwords.herokuapp.com/word"
            axios.get(url)
            .then(response => dispatch(action.onsetallwords(response.data.words)))
        }
    }
}
const ListContainer = connect(mapStateToprops ,mapDispatchToProps)(List)
export default ListContainer
