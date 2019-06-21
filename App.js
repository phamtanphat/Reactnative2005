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
import {createStore} from 'redux';
import {Provider} from 'react-redux'
  const defaultState = {
    words: [
      { id: "a1", en: "One", vn: "Mot", isMemorized: true },
      { id: "a2", en: "Two", vn: "Hai", isMemorized: false },
      { id: "a3", en: "Three", vn: "Ba", isMemorized: false },
      { id: "a4", en: "Four", vn: "Bon", isMemorized: false },
      { id: "a5", en: "Five", vn: "Nam", isMemorized: true },
      { id: "a6", en: "Six", vn: "Sau", isMemorized: false }
    ],  
    filterMode : 'Show_ALL',
    shouldShowForm: true
  }
const store = createStore((state = defaultState ,action) => {
    switch(action.type){
        case "TOGGLE_WORD" : {
          const newWords = state.words.map(w => {
              if(w.id !== action.id) return w
              return {...w , isMemorized : !w.isMemorized}
          })
          return {...state , words : newWords}
        }
        case "REMOVE_WORD" : {           
          const newWords = state.words.filter(w => w.id !== action.id)
          return {...state , words : newWords}
        }
        case "SET_FILTER_MODE" : return {...state , filterMode : action.filterMode}
        default : return state
    }
})



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

