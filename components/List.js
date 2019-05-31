// ctrl + space : goi y code
import React, { Component } from 'react'
import { Text, View , ScrollView} from 'react-native'
import Word from './Word';

export default class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            words = [
                {id : "a1" ,en:"One" , vn:"Mot" , isMemorized : true },
                {id : "a2" ,en:"Two" , vn:"Hai" , isMemorized : false },
                {id : "a3" ,en:"Three" , vn:"Ba" , isMemorized : false },
                {id : "a4" ,en:"Four" , vn:"Bon" , isMemorized : false },
                {id : "a5" ,en:"Five" , vn:"Nam" , isMemorized : true },
                {id : "a6" ,en:"Six" , vn:"Sau" , isMemorized : false },
            ]
        }
    }
    render() {
        return (
            <View>
                <ScrollView>
                    {words.map(function(word){
                        return <Word word={word} key={word.id}/>
                    })}
                    </ScrollView>
            </View>
        )
    }
}
