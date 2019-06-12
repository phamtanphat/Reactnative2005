import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Child from './Child';
import { thisExpression } from '@babel/types';

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
    onDescrease(){
        this.setState({value : this.state.value - 1})
    }
    onReset(){
        this.setState({value : 0})
    }
    render() {
        return(
            <View style={{flex : 1 , flexDirection : 'column' , justifyContent : 'center' , alignContent : 'center'}}>
                <Text style={{fontSize : 20 , color : 'red' , alignSelf :'center'}}>Value = {this.state.value}</Text>
                <Child 
                    onIncrease={() => this.onIncrease()}
                    onDescrease={() => this.onDescrease()}
                    onReset={() => this.onReset()}
                    style={{ alignSelf :'center'}}/>
            </View>
        )
    }
}
