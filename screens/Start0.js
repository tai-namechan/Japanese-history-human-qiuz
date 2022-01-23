import React, { Component, useState, useEffect } from 'react';
import { View, ImageBackground, StyleSheet, SafeAreaView, Linking, Platform } from 'react-native';
import { Button, Text, Image, Header, ThemeProvider } from 'react-native-elements';
import questions from './question';

const theme = {
  Button: {
    containerStyle: {
      margin: '4%',
    },
    titleStyle: {
      fontSize: 30
    },
    raised: true,
  },
  colors: {
    primary: 'brown',
  },
};

export default function Start0(props) {
  const [isVisible, setIsVisible] = useState(false)
  const _dismissModal = () => {
    setIsVisible(false)
  }


  let id=[];
  for(i=0;i<questions.length;i++){
  //for(i=0;i<4;i++){
    id.push(i);
  }
  //id[0]=10;
  //console.log(id);

  function arrayShuffle(array) {
    for(var i = (array.length - 1); 0 < i; i--){
  
      // 0〜(i+1)の範囲で値を取得
      var r = Math.floor(Math.random() * (i + 1));
  
      // 要素の並び替えを実行
      var tmp = array[i];
      array[i] = array[r];
      array[r] = tmp;
    }
    return array;
  }

  arrayShuffle(id);
  
  let idCount = 0;
  console.log(id);
  setTimeout(() => {
    props.navigation.navigate('Start',{idCount,id});
  }, 1);

  return (
    <ThemeProvider theme={theme}>
      <View>
        <ImageBackground
          source={require('../assets/splash.png')}
          resizeMode="cover"
          style={{ height: "100%", }}
        >
          
          
        </ImageBackground>
      </View>
    </ThemeProvider>
  )
}
