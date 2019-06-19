/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View , TouchableOpacity} from 'react-native';
import List from './components/List';
import Box from './components/Box';
import Form from './components/Form';
import Fillter from './components/Fillter';
import { createStore } from 'redux'

const store = createStore((state = 0 , action) => {
    if(action.type == "INCREASE") return state + action.count
    return state
})
// alert(store.getState())
// store.dispatch({type : "INCREASE" , count : 1})
// alert(store.getState())

// 1 : Gọi lại hàm createStore dùng để định nghĩa ra store
// 2 : Giá trị ở trong createStore là 1 function có 2 tham số
//    + Dữ liệu trong store(state)
//    +Chỉ thị để thay đổi store(action)
// 3 : Khi muốn lấy dữ liệu thì gọi store.getState()
// 4 : Khi muốn thay đổi store thì dùng dispatch

export default class App extends Component {
  render() {
    return (
      <View style={{flex : 1 , alignContent : 'center' , justifyContent : 'center'}}>
          <Text style={{fontSize : 30 , color : 'red' , alignSelf : 'center'}}>Value = {store.getState()}</Text>
          <View style={{alignSelf :'center'}}>
                <View style={{flexDirection : 'row' }}>
                    <TouchableOpacity
                        style={{backgroundColor : 'green' , padding : 10 , borderRadius : 5}}
                        onPress={() => {}}
                    >
                        <Text style={{color : 'white' , fontSize : 20}}>Increase</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{backgroundColor : 'red' , padding : 10 , borderRadius : 5}}
                    >
                        <Text style={{color : 'white' , fontSize : 20}}>Descrease</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{backgroundColor : 'indigo' , padding : 10 , borderRadius : 5}}
                    >
                        <Text style={{color : 'white' , fontSize : 20}}>Reset</Text>
                    </TouchableOpacity>
                
                </View>
            </View>
      </View>
    );
  }
}

