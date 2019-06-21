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
import {Provider} from 'react-redux'
import store from './store';


export default class App extends Component {
  render() {
    return (
      <View style={{flex : 1 }}>
        <Provider store={store}>
          <List/>
        </Provider>
      </View>
    );
  }
}

