import {connect} from 'react-redux'
import * as action from '../action/action'
import Fillter from '../components/Fillter';

const maptStateToProps = (state) => {
    return {filterMode : state.filterMode}
}
const maptDispatchToProps = (dispatch) => {
    return {
        onSetfiltermode : (filterMode) => {
            dispatch(action.onSetfiltermode(filterMode))
        }
    }
}
const FillterContainer = connect(maptStateToProps,maptDispatchToProps)(Fillter)
export default FillterContainer
