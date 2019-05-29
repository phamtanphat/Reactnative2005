import React, {Component} from 'react';
import {Text, View} from 'react-native';

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
            <View style={{flexDirection : 'row' , justifyContent : 'space-around'}}>
                <Text style={{color : 'green' , fontSize : 20}}>{en}</Text>
                <Text style={{color : 'red' , fontSize : 20}}>{isMemorized ? "----" : vn}</Text>
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