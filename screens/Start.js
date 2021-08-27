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
    apiKey: "AIzaSyDr1rqtIwynxlItQpfcYCf_bwn_velxlrI",
    authDomain: "japanese-history-quiz-518c2.firebaseapp.com",
    databaseURL: "https://japanese-history-quiz-518c2-default-rtdb.firebaseio.com",
    projectId: "japanese-history-quiz-518c2",
    storageBucket: "japanese-history-quiz-518c2.appspot.com",
    messagingSenderId: "833552253127",
    appId: "1:833552253127:web:9371bd16b0047699fb3ee2"
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
            source={require('../assets/img/sakura-change.jpg')}
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
                onPress: () => props.navigation.navigate('Auth')
              }}
              containerStyle={{
                backgroundColor: '',
                justifyContent: 'space-around',
              }}
            />
            {/* <Image source={require('../assets/img/歴史の壁.png')}
                                style={{
                                    // width: 300,
                                    height: 90,
                                    marginTop: 50,
                                    marginLeft:'20%',
                                    marginRight:'20%',
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }} />
              <Image source={require('../assets/img/タイトル.png')}
                                style={{
                                    // width: 300,
                                    height: 90,
                                    marginTop: 30,
                                    marginLeft:'20%',
                                    marginRight:'20%',
                                    bottom: 0,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }} /> */}
            <View style={{ flex: 1, alignItems: 'center' }}>
              <Image source={require('../assets/img/歴史の壁.png')}
                                style={{
                                    width: 300,
                                    height: 90,
                                    marginTop: 40,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }} />
              <Image source={require('../assets/img/タイトル.png')}
                                style={{
                                    width: 300,
                                    height: 90,
                                    marginTop: 40,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }} />
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