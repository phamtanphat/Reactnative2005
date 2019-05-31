import React, {Component} from 'react';
import {Text, View , TouchableOpacity} from 'react-native';

export default class Word extends Component {
    // checkMemorized(){
    //     if(this.props.word.isMemorized){
    //         return <Text style={{color : 'red' , fontSize : 20}}>----</Text>
    //     }else{
    //         return <Text style={{color : 'red' , fontSize : 20}}>{this.props.word.vn}</Text>
    //     }
    // }
    render() {
        //destructuring
        const {vn,en,isMemorized} = this.props.word
        return (
            <View style={{flexDirection : 'column' }}>
                <View style={{flexDirection : 'row' , justifyContent : 'space-around' , alignItems : 'center'}}>
                    <Text style={{color : 'green' , fontSize : 20}}>{en}</Text>
                    <Text style={{color : 'red' , fontSize : 20}}>{isMemorized ? "----" : vn}</Text>
                </View>
                
                <View style={{flexDirection : 'row' , justifyContent : 'space-around' , alignItems : 'center'}}>
                    <TouchableOpacity
                        style={{backgroundColor : 'green' , padding : 10 , borderRadius : 5}}
                    >
                        <Text style={{fontSize : 20 , color : 'white'}}>Forgot</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{backgroundColor : 'yellow' , padding : 10 , borderRadius : 5}}
                    >
                        <Text>Remove</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        );
    }
  }

 // Auto Close Tag
//Auto Rename Tag
//ES7 React/Redux/GraphQL/React-Native snippets
//npm Intellisense
//Path Intellisense
//React-Native/React/Redux snippets for es6/es7
//vscode-icons