// ctrl + space : goi y code
import React, { Component } from 'react'
import { View, ScrollView, } from 'react-native'

import Word from './Word';
import Fillter from './Fillter';
import Form from './Form';
import {connect} from 'react-redux'

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
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
                        <Form/>
                        <Fillter />
                        {this.Fitered.map(word => 
                            <Word
                                word={word} 
                                key={word.id}/>)}
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default connect(state => ({words : state.words , filterMode : state.filterMode}))(List)