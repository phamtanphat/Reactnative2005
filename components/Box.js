import React, { Component } from 'react'
import { Text, View , TouchableOpacity } from 'react-native'

export default class Box extends Component {
    constructor(props){
        super(props);
        this.state = {
            value : 1
        }
    }
    render() {
        return(
            <View style={{flex : 1 , flexDirection : 'column' , justifyContent : 'center' , alignContent : 'center'}}>
                <Text style={{fontSize : 20 , color : 'red' , alignSelf :'center'}}>Value = {this.state.value}</Text>
                <View style={{flexDirection : 'row' }}>
                    <TouchableOpacity
                        style={{backgroundColor : 'green' , padding : 10 , borderRadius : 5}}
                        onPress={() => this.setState({value : this.state.value + 1 })}
                    >
                        <Text style={{color : 'white' , fontSize : 20}}>Increase</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{backgroundColor : 'red' , padding : 10 , borderRadius : 5}}
                        onPress={() => this.setState({value : this.state.value - 1 })}
                    >
                    <Text style={{color : 'white' , fontSize : 20}}>Descrease</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    style={{backgroundColor : 'indigo' , padding : 10 , borderRadius : 5}}
                    onPress={() => this.setState({value : 0 })}
                    >
                    <Text style={{color : 'white' , fontSize : 20}}>Reset</Text>
                    </TouchableOpacity>
                
                </View>
            </View>
        )
    }
}
