import React, { PureComponent } from 'react'
import { Text, View, TouchableOpacity, TextInput, Dimensions } from 'react-native'
import {connect} from 'react-redux'
import * as action from '../action/action'
const DeviceWidth = Dimensions.get("window").width
class Form extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            txten: '',
            txtvn: ''
        }
    }
    getForm() {
        const{dispatch} = this.props
        const { txten , txtvn} = this.state
        if (this.props.shouldShowForm) {
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
                                if(txten.length > 0 && txtvn.length > 0){
                                    const word = {
                                        id : Math.random()+ "",
                                        en : txten,
                                        vn : txtvn,
                                        isMemorized : false
                                    }
                                    this.props.onAddword(word)
                                    this.setState({txten : '' , txtvn : ''})
                                }else{
                                    alert("Truyen du thong tin!!")
                                }
                            }}
                        >
                            <Text style={{ fontSize: DeviceWidth * 0.08, color: 'white' }}>Add word</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ backgroundColor: "#C82333", padding: 10, borderRadius: 8 }}
                            onPress={this.props.onToggleForm}
                        >
                            <Text style={{ fontSize: DeviceWidth * 0.08, color: 'white' }}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
        return(
        <TouchableOpacity
            style={{ backgroundColor: "#218838", padding: 10, borderRadius: 8, width: DeviceWidth * 0.7, alignSelf: 'center', marginTop: DeviceWidth * 0.05 }}
            onPress={this.props.onToggleForm}
        >
            <Text style={{ fontSize: DeviceWidth * 0.08, color: 'white', textAlign: 'center' }}>+</Text>

        </TouchableOpacity>)
    }


    render() {
        return (
            <View>
                {this.getForm()}
            </View>
        )
    }
}
const mapStateToProps = function(state){
    return {shouldShowForm : state.shouldShowForm}
}
const mapDispatchToProps = function(dispatch){
    return {
        onToggleForm : () =>{
            dispatch(action.onToggleForm())
        },
        onAddword : (word) => {
            dispatch(action.onAddword(word))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Form)