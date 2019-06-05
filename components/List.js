// ctrl + space : goi y code
import React, { Component } from 'react'
import { Text, View , ScrollView , Dimensions , TouchableOpacity} from 'react-native'
import Word from './Word';

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
            ]
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
            <View>
                <ScrollView>
                    {this.state.words.map(word => this.getWordItem(word))}

                </ScrollView>
            </View>
        )
    }
}
