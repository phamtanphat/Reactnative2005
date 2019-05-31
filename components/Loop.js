import React, { Component } from 'react'
import { Text, View } from 'react-native'

const monhoc = ["Php" ,"React Native" ,"Android","iOS","Unity"]

export default class Loop extends Component {
    render() {
        return (
            <View>
                {/* {
                    [
                        <Text style={{color : 'red'}}>{monhoc[0]}</Text>,
                        <Text style={{color : 'red'}}>{monhoc[1]}</Text>,
                        <Text style={{color : 'red'}}>{monhoc[2]}</Text>,
                        <Text style={{color : 'red'}}>{monhoc[3]}</Text>,
                    ]
                } */}
                {/* {monhoc.map(subject => <Text>{subject}</Text>)} */}
            </View>
        )
    }
}
