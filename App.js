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
import {Provider} from 'react-redux'

const store = createStore((state = 10, action) => {
    switch(action.type){
        case "INCREASE" : return state + 1
        default : return state
    }
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
      <View style={{flex : 1 }}>
          <Provider store={store}>
            <Box/>
          </Provider>
      </View>
    );
  }
}

