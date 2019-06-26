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
const ListContainer = connect(mapStateToprops)(List)
export default ListContainer
