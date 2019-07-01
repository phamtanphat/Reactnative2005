// ctrl + space : goi y code
import React, { Component } from 'react'
import { View, ScrollView, } from 'react-native'
import WordContainer from  '../container/WordContainer'
import FormContainer from '../container/FormContainer'
import FillterContainer from '../container/FillterContainer'


export default class List extends Component {
    componentWillMount(){
       this.props.getallWords();
    }

    get Fitered(){
        return this.props.words.filter(w => {
            if (this.props.filterMode === 'Show_ALL') return true
            if (this.props.filterMode === 'Show_Forgot' && w.isMemorized) return true
            if (this.props.filterMode === 'Show_Memorized' && !w.isMemorized) return true
            return false
        })
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <View style={{ flex: 1 }}>
                        <FormContainer/>
                        <FillterContainer />
                        {this.Fitered.map(word => 
                            <WordContainer
                                word={word} 
                                key={word._id}/>)}
                    </View>
                </ScrollView>
            </View>
        )
    }
}
