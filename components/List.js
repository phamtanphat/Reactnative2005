// ctrl + space : goi y code
import React, { Component } from 'react'
import { Text, View, ScrollView, Dimensions, TouchableOpacity, TextInput } from 'react-native'

import { Dropdown } from 'react-native-material-dropdown';
import Word from './Word';
import Fillter from './Fillter';


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
                { id: "a6", en: "Six", vn: "Sau", isMemorized: false },
            ],
            fillterMode: [
                { value: "Show_ALL" },
                { value: "Show_Forgot" },
                { value: "Show_Memorized" }
            ],
            fillterPick: 'Show_ALL',
            txten: '',
            txtvn: '',
            shouldShowForm: false
        }
    }
    getForm() {
        if (this.state.shouldShowForm) {
            return (
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'column', backgroundColor: 'gainsboro', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <TextInput
                            style={{ height: DeviceWidth * 0.15, width: DeviceWidth * 0.7, backgroundColor: 'white', borderRadius: 2, paddingLeft: DeviceWidth * 0.05, marginBottom: DeviceWidth * 0.03, fontSize: 20 }}
                            placeholder="English"
                            value={this.state.txten}
                            onChangeText={(text) => this.setState({ txten: text })} />
                        <TextInput
                            style={{ height: DeviceWidth * 0.15, width: DeviceWidth * 0.7, backgroundColor: 'white', borderRadius: 2, paddingLeft: DeviceWidth * 0.05, fontSize: 20 }}
                            placeholder="Vietnamese"
                            value={this.state.txtvn}
                            onChangeText={(text) => this.setState({ txtvn: text })} />
                    </View>

                    <View style={{ flexDirection: "row", marginTop: DeviceWidth * 0.01, alignItems: "center" }}>
                        <TouchableOpacity
                            style={{ backgroundColor: "#218838", padding: 10, borderRadius: 8, marginRight: DeviceWidth * 0.03 }}
                            onPress={() => {
                                if (this.state.txten.trim().length > 0 && this.state.txtvn.trim().length > 0) {
                                    const word = {
                                        id: Math.random(),
                                        en: this.state.txten,
                                        vn: this.state.txtvn,
                                        isMemorized: false
                                    }
                                    const newWords = Object.assign([], this.state.words)
                                    newWords.unshift(word)
                                    this.setState({ words: newWords })
                                } else {
                                    alert("Truyen thong tin cho tu vung!!")
                                }
                            }}
                        >
                            <Text style={{ fontSize: DeviceWidth * 0.08, color: 'white' }}>Add word</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ backgroundColor: "#C82333", padding: 10, borderRadius: 8 }}
                            onPress={() => this.setState({ shouldShowForm: false })}
                        >
                            <Text style={{ fontSize: DeviceWidth * 0.08, color: 'white' }}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
        return (
            <TouchableOpacity
                style={{ backgroundColor: "#218838", padding: 10, borderRadius: 8, width: DeviceWidth * 0.7, alignSelf: 'center', marginTop: DeviceWidth * 0.05 }}
                onPress={() => this.setState({ shouldShowForm: true })}
            >
                <Text style={{ fontSize: DeviceWidth * 0.08, color: 'white', textAlign: 'center' }}>+</Text>
            </TouchableOpacity>
        )

    }
    getFilterForm() {
        return (
            <Dropdown
                containerStyle={{ width: DeviceWidth * 0.95, height: DeviceWidth * 0.1, borderRadius: 5, borderWidth: 1, paddingLeft: DeviceWidth * 0.02, alignSelf: 'center', marginVertical: DeviceWidth * 0.05 }}
                inputContainerStyle={{ borderBottomColor: 'transparent' }}
                dropdownOffset={{ top: DeviceWidth * 0.01, left: 0 }}
                data={this.state.fillterMode}
                value={this.state.fillterPick}
                onChangeText={text => this.setState({ fillterPick: text })}
            />
        )
    }
    get Fitered(){
        return this.state.words.filter(w => {
            if (this.state.fillterPick === 'Show_ALL') return true
            if (this.state.fillterPick === 'Show_Forgot' && w.isMemorized) return true
            if (this.state.fillterPick === 'Show_Memorized' && !w.isMemorized) return true
            return false
        })
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <View style={{ flex: 1 }}>
                        {this.getForm()}
                        <Fillter/>
                        {this.Fitered.map(word => <Word word={word} key={word.id}/>)}
                    </View>
                </ScrollView>
            </View>
        )
    }
}
