import React, { PureComponent } from 'react'
import { Text, View ,Dimensions } from 'react-native'
import { Dropdown } from 'react-native-material-dropdown';


const DeviceWidth = Dimensions.get("window").width;
export default class Fillter extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            fillterModes : [
                {value : "Show_ALL"},
                {value : "Show_Forgot"},
                {value : "Show_Memorized"}
            ],
            fillterPick : 'Show_All'
        }
    }
    render() {
        return (
                <Dropdown
                    containerStyle={{width : DeviceWidth * 0.9 , height : DeviceWidth * 0.1 , borderRadius : 5 , borderWidth : 1 , paddingLeft : DeviceWidth * 0.02, alignSelf: 'center', marginVertical: DeviceWidth * 0.05}}
                    inputContainerStyle={{ borderBottomColor: 'transparent' }}
                    dropdownOffset={{top: DeviceWidth * 0.01, left : 0}}
                    data={this.state.fillterModes}
                    value={this.props.filterMode}
                    onChangeText={text => this.props.onSetfiltermode(text)}
                />
        )
    }
}
