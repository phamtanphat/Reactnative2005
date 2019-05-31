/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Word from './components/Word';
import Loop from './components/Loop';

const words = [
  {en:"One" , vn:"Mot" , isMemorized : true },
  {en:"Two" , vn:"Hai" , isMemorized : false },
  {en:"Three" , vn:"Ba" , isMemorized : false },
  {en:"Four" , vn:"Bon" , isMemorized : false },
  {en:"Five" , vn:"Nam" , isMemorized : true }
]


export default class App extends Component {
  render() {
    return (
      <View>
        <Loop/>
      </View>
    );
  }
}

