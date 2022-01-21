import React, { Component, useState, useEffect } from 'react';
import { View, ImageBackground, StyleSheet, SafeAreaView, Linking, Platform } from 'react-native';
import { Button, Text, Image, Header, ThemeProvider } from 'react-native-elements';
import { BottomBannerAds, InterstitialAds } from '../Advertisement/Ads';

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

  let id = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

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
  

  return (
    <ThemeProvider theme={theme}>
      <View>
        <ImageBackground
          source={require('../assets/img/sakura-change.jpg')}
          resizeMode="cover"
          style={{ height: "100%", }}
        >
          
          <View style={{ flex: 1, alignItems: 'center' }}>
            <View style={{flex: 1, justifyContent: "center",}}>
              <Image source={require('../assets/img/歴史の壁.png')}
                style={{
                  width: 300,
                  height: 90,
                  justifyContent: 'center',
                }} />
              <Image source={require('../assets/img/タイトル.png')}
                style={{
                  width: 300,
                  height: 90,
                  justifyContent: 'center',
                }} />
            </View>
            
            <View style={{flex: 2.5}}>
              <Button
                title="始める"
                onPress={() => {
                  props.navigation.navigate('Start',{idCount,id});
                }}
              />
            </View>

            <BottomBannerAds/>
            
          </View>
        </ImageBackground>
      </View>
    </ThemeProvider>
  )
}
