import React, { Component, useState, useEffect } from 'react';
import { View, ImageBackground } from 'react-native';
import { Button, Text, Image, Header, ThemeProvider } from 'react-native-elements';
import firebase from 'firebase';

const theme = {
  Button: {
    containerStyle: {
      margin: '6%',
    },
    titleStyle: {
      fontSize: 40
    },
    raised: true,
  },
  colors: {
    primary: 'brown',
  },
};

export default function Start(props) {
  const firebaseConfig = {
    // 各自生成された値を入れる
    apiKey: "AIzaSyAlFs-hQv_K-11iiZxtRuWprNdt_Wexb38",
    authDomain: "japa-his-quiz.firebaseapp.com",
    projectId: "japa-his-quiz",
    storageBucket: "japa-his-quiz.appspot.com",
    messagingSenderId: "488843376693",
    appId: "1:488843376693:web:0ac02be9f4c44634ab197c",
    databaseURL: "https://japa-his-quiz-default-rtdb.firebaseio.com/",
  }
  if (!firebase.apps.length) { // これをいれないとエラーになったのでいれてます。
      firebase.initializeApp(firebaseConfig);
  }

  const getDatabaseData = async() => {
    await firebase.firestore().collection("nicknameuser").orderBy('score', 'desc').limit(5).get().then((querySnapshot) => {
      // console.log("bbb");
      const docs = querySnapshot.docs.map(doc => doc.data());
      // console.log("ccc");
      // console.log(docs);
      const info = docs;
      // console.log(info[0].username);
      return info;
    }).then((info) => {
      // console.log("eee");
      props.navigation.navigate(
        'Ranking', { 
          username1: info[0].username, 
          score1: info[0].score, 
          username2: info[1].username, 
          score2: info[1].score, 
          username3: info[2].username, 
          score3: info[2].score, 
          username4: info[3].username, 
          score4: info[3].score, 
          username5: info[4].username, 
          score5: info[4].score, 
        });
    });
  }

  return (
    <ThemeProvider theme={theme}>
        <View >
          <ImageBackground
            source={require('../assets/img/background.png')}
            resizeMode="cover"
            style={{ height: 1000, }}
          >
            <Header
              // authは右にあった方がいい気がしたため、iconの左右入れ替えた
              placement="left"
              leftComponent={{ icon: 'menu', color: 'brown' }}
              centerComponent={{ text: '歴史の壁〜正解を衝け〜', style: { color: 'brown' },
              // onPress: () => this.props.navigation.navigate('Signup')
            }}
              rightComponent={{
                icon: 'login',
                color: 'brown',
                onPress: () => this.props.navigation.navigate('Auth')
              }}
              containerStyle={{
                backgroundColor: '',
                justifyContent: 'space-around',
              }}
            />

            <View style={{ flex: 1, alignItems: 'center' }}>
              {/* <Text h1>スタート画面</Text> */}
              <Text
                h1
                style={{ marginTop:30,}}
              >
                歴史の壁
              </Text>
              <Text h1>〜正解を衝け〜</Text>
              <Button
                title="始める"
                onPress={() => {
                  props.navigation.navigate('SelectNumber');
                }}
                containerStyle={{ width: '50%', marginBottom: 50, marginTop:100, }}
              />
              <Button
                title="ランキング"
                onPress={getDatabaseData}
                containerStyle={{ width: '50%' }}
              />
            </View>
          </ImageBackground>
        </View>
      </ThemeProvider>
  )
}