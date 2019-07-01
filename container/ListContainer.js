import {connect} from 'react-redux'
import List  from '../components/List'
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
            .then(response => dispatch())
        }
    }
}
const ListContainer = connect(mapStateToprops)(List)
export default ListContainer
