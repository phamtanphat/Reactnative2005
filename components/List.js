// ctrl + space : goi y code
import React, { Component } from 'react'
import { Text, View, ScrollView, Dimensions, TouchableOpacity, TextInput } from 'react-native'

import Word from './Word';
import Fillter from './Fillter';
import Form from './Form';

const DeviceWidth = Dimensions.get('window').width
const DeviceHeight = Dimensions.get('window').height

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            words: [
                { id: "a1", en: "One", vn: "Mot", isMemorized: true },
                { id: "a2", en: "Two", vn: "Hai", isMemorized: false },
                { id: "a3", en: "Three", vn: "Ba", isMemorized: false },
                { id: "a4", en: "Four", vn: "Bon", isMemorized: false },
                { id: "a5", en: "Five", vn: "Nam", isMemorized: true },
                { id: "a6", en: "Six", vn: "Sau", isMemorized: false }
            ],
            filterMode : 'Show_ALL',
            shouldShowForm: false
        }
        this.onToggleWord = this.onToggleWord.bind(this)
    }
    get Fitered(){
        return this.state.words.filter(w => {
            if (this.state.filterMode === 'Show_ALL') return true
            if (this.state.filterMode === 'Show_Forgot' && w.isMemorized) return true
            if (this.state.filterMode === 'Show_Memorized' && !w.isMemorized) return true
            return false
        })
    }
    onToggleWord(id){
        const newWords = this.state.words.map(w => {
            if(w.id !== id) return w
            return {...w,isMemorized : !w.isMemorized}
        })
        this.setState({words : newWords})
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <View style={{ flex: 1 }}>
                        <Form shouldShowForm={this.state.shouldShowForm}/>
                        <Fillter filterMode={this.state.filterMode}/>
                        {this.Fitered.map(word => 
                            <Word
                                onToggleWord={(id) => this.onToggleWord(id)} 
                                word={word} 
                                key={word.id}/>)}
                    </View>
                </ScrollView>
            </View>
        )
    }
}
