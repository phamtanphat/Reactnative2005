import React, { Component } from 'react'
import { Text, View  } from 'react-native'
import Child from './Child';

export default class Box extends Component {
    constructor(props){
        super(props);
        this.state = {
            value : 1
        }
    }
    onIncrease(){
        this.setState({value : this.state.value + 1})
    }
    render() {
        return(
            <View style={{flex : 1 , flexDirection : 'column' , justifyContent : 'center' , alignContent : 'center'}}>
                <Text style={{fontSize : 20 , color : 'red' , alignSelf :'center'}}>Value = {this.state.value}</Text>
                <Child onIncrease={() => this.onIncrease()}/>
            </View>
        )
    }
}
