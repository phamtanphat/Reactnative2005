import React, {Component} from 'react';
import {Text, View  , TouchableOpacity , Dimensions} from 'react-native';


export default class Word extends Component {
    render() {
        const {en , vn , isMemorized , _id} = this.props.word
        const DeviceWidth = Dimensions.get('window').width
        const DeviceHeight = Dimensions.get('window').height
        return (
            <View style={{flex : 1 , flexDirection : 'column' , height : DeviceHeight * 0.2 , margin : 10 , backgroundColor : 'gainsboro' , padding : 10 , borderRadius : 5}}>
                <View style={{flexDirection : 'row' , justifyContent : 'space-around' , paddingBottom : 5}}>
                    <Text style={{fontSize : 30 , color :  'green' }}>{en}</Text>
                    <Text 
                        style={{fontSize : 30 , color :  'red' }}>
                            {isMemorized ? "----" : vn}
                    </Text>
                </View>
                <View style={{flexDirection : 'row' , justifyContent : 'space-around' , paddingBottom : 5}}>
                    <TouchableOpacity
                        style={{backgroundColor : isMemorized ? "green" : "red" , padding : 10 , borderRadius : 5}}
                        onPress={() => this.props.onToggleWord(_id , !isMemorized)}
                    >
                        <Text style={{fontSize : 20 , color : 'white'}}>{isMemorized ? "Forgot" : "isMemorized"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{backgroundColor : "orange" , padding : 10 , borderRadius : 5}}
                        onPress={() => this.props.onRemoveWord(_id)}
                    >
                        <Text style={{fontSize : 25 , color :  'white' }}>Remove</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        )
    }
  }

 // Auto Close Tag
//Auto Rename Tag
//ES7 React/Redux/GraphQL/React-Native snippets
//npm Intellisense
//Path Intellisense
//React-Native/React/Redux snippets for es6/es7
//vscode-icons