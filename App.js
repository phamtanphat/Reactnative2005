/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View , TouchableOpacity} from 'react-native';


import {Provider} from 'react-redux'
import store from './store';
import ListContainer from './container/ListContainer';


export default class App extends Component {
  render() {
    return (
      <View style={{flex : 1 }}>
        <Provider store={store}>
          <ListContainer/>
        </Provider>
      </View>
    );
  }
}

