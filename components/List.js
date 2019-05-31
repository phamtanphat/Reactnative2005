// ctrl + space : goi y code
import React, { Component } from 'react'
import { Text, View , ScrollView} from 'react-native'
import Word from './Word';


const words = [
    {en:"One" , vn:"Mot" , isMemorized : true },
    {en:"Two" , vn:"Hai" , isMemorized : false },
    {en:"Three" , vn:"Ba" , isMemorized : false },
    {en:"Four" , vn:"Bon" , isMemorized : false },
    {en:"Five" , vn:"Nam" , isMemorized : true },
    {en:"Six" , vn:"Sau" , isMemorized : false },
]
export default class List extends Component {
    render() {
        return (
            <View>
                <ScrollView>
                    {words.map(function(word){
                        return <Word word={word}/>
                    })}
                    </ScrollView>
            </View>
        )
    }
}
