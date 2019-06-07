// ctrl + space : goi y code
import React, { Component } from 'react'
import { Text, View , ScrollView , Dimensions , TouchableOpacity , TextInput} from 'react-native'
import Word from './Word';
import { thisExpression } from '@babel/types';

const DeviceWidth = Dimensions.get('window').width
const DeviceHeight = Dimensions.get('window').height

export default class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            words : [
                {id : "a1" ,en:"One" , vn:"Mot" , isMemorized : true },
                {id : "a2" ,en:"Two" , vn:"Hai" , isMemorized : false },
                {id : "a3" ,en:"Three" , vn:"Ba" , isMemorized : false },
                {id : "a4" ,en:"Four" , vn:"Bon" , isMemorized : false },
                {id : "a5" ,en:"Five" , vn:"Nam" , isMemorized : true },
                {id : "a6" ,en:"Six" , vn:"Sau" , isMemorized : false },
            ],
            txten : '',
            txtvn : ''
        }
    }
    getWordItem(word){
        return (
            <View 
                key={word.id}
                style={{flex : 1 , flexDirection : 'column' , height : DeviceHeight * 0.2 , margin : 10 , backgroundColor : 'gainsboro' , padding : 10 , borderRadius : 5}}>
                <View style={{flexDirection : 'row' , justifyContent : 'space-around' , paddingBottom : 5}}>
                    <Text style={{fontSize : 30 , color :  'green' }}>{word.en}</Text>
                    <Text 
                        style={{fontSize : 30 , color :  'red' }}>
                        {word.isMemorized ? "----" : word.vn}
                    </Text>
                </View>
                <View style={{flexDirection : 'row' , justifyContent : 'space-around' , paddingBottom : 5}}>
                    <TouchableOpacity
                        style={{backgroundColor : word.isMemorized ? "green" : "red" , padding : 10 , borderRadius : 5}}
                        onPress={() => {
                            const newWords = this.state.words.map(w => {
                                if(w.id !== word.id) return w
                                return {...w, isMemorized : !w.isMemorized}
                            })
                            this.setState({words : newWords})
                        }}
                    >
                        <Text style={{fontSize : 20 , color : 'white'}}>{word.isMemorized ? "Forgot" : "isMemorized"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{backgroundColor : "orange" , padding : 10 , borderRadius : 5}}
                        onPress={() => {
                            const newWords = this.state.words.filter(function(w){
                                if(w.id !== word.id) return true
                                return false
                            })
                            this.setState({words :newWords})
                        }}
                    >
                        <Text style={{fontSize : 25 , color :  'white' }}>Remove</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        )
    }
    render() {
        return (
            <View style={{flex : 1}}>
                <ScrollView>
                    <View style={{flex : 1}}>
                        <View style={{justifyContent : 'center' , alignItems : 'center'}}>
                            <View style={{flexDirection : 'column' , backgroundColor : 'gainsboro' , padding : 10 , justifyContent : 'center' ,  alignItems : 'center'  }}>
                                <TextInput 
                                    style={{height: DeviceWidth  * 0.15 , width : DeviceWidth * 0.7, backgroundColor: 'white', borderRadius :2 , paddingLeft : DeviceWidth * 0.05 , marginBottom : DeviceWidth * 0.03  , fontSize : 20}}
                                    placeholder="English"
                                    value={this.state.txten}
                                    onChangeText={(text) => this.setState({txten : text})}/>
                                <TextInput 
                                    style={{height: DeviceWidth  * 0.15 , width : DeviceWidth * 0.7, backgroundColor: 'white', borderRadius :2 , paddingLeft : DeviceWidth * 0.05 , fontSize : 20}}
                                    placeholder="Vietnamese"
                                    value={this.state.txtvn}
                                    onChangeText={(text) => this.setState({txtvn : text})}/>
                                </View>

                            <View style={{flexDirection : "row" , marginTop : DeviceWidth * 0.01 , alignItems : "center"}}>
                                <TouchableOpacity
                                    style={{backgroundColor : "#218838" , padding : 10 , borderRadius : 8 , marginRight : DeviceWidth * 0.03}}
                                    onPress={() => {
                                        if(this.state.txten.trim().length > 0 && this.state.txtvn.trim().length > 0){
                                            const word = {
                                                id : Math.random(),
                                                en : this.state.txten,
                                                vn : this.state.txtvn,
                                                isMemorized : false
                                            }
                                            
                                            const newWords = Object.assign([], this.state.words)
                                            newWords.unshift(word)
                                            this.setState({words : newWords})
                                        }else{
                                            alert("Truyen thong tin cho tu vung!!")
                                        }
                                       
                                        
                                    }}
                                >
                                    <Text style={{fontSize : DeviceWidth * 0.08 , color : 'white' }}>Add word</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{backgroundColor : "#C82333", padding : 10 , borderRadius : 8}}
                                >
                                    <Text style={{fontSize : DeviceWidth * 0.08 , color : 'white'}}>Cancel</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        {this.state.words.map(word => this.getWordItem(word))}
                    </View>
                </ScrollView>
            </View>
        )
    }
}
