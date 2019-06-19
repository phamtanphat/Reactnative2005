import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Child from './Child';
import {connect} from 'react-redux'

class Box extends Component {

    render() {
        return(
            <View style={{flex : 1 , flexDirection : 'column' , justifyContent : 'center' , alignContent : 'center'}}>
                <Text style={{fontSize : 20 , color : 'red' , alignSelf :'center'}}>Value = {this.props.count}</Text>
                <Child 
                    style={{ alignSelf :'center'}}/>
            </View>
        )
    }
}
export default connect(store => ({count : store.count}))(Box)
