import React, {Component} from 'react';
import {Text, View  , TouchableOpacity , Dimensions} from 'react-native';

export default class Word extends Component {
    // checkMemorized(){
    //     if(this.props.word.isMemorized){
    //         return <Text style={{color : 'red' , fontSize : 20}}>----</Text>
    //     }else{
    //         return <Text style={{color : 'red' , fontSize : 20}}>{this.props.word.vn}</Text>
    //     }
    // }
    render() {
        const {en , vn , isMemorized , id} = this.props.word
        const { onToggleWord , onRemove} = this.props;
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
                        onPress={() => onToggleWord(id)}
                    >
                        <Text style={{fontSize : 20 , color : 'white'}}>{isMemorized ? "Forgot" : "isMemorized"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{backgroundColor : "orange" , padding : 10 , borderRadius : 5}}
                        onPress={() => onRemove(id)}
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