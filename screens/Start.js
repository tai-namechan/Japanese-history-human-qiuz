import React, { Component, useState } from 'react';
import { View, ImageBackground } from 'react-native';
import { Button, Text, Image, Header, ThemeProvider } from 'react-native-elements';
import firebase from 'firebase';

const theme = {
  Button: {
    containerStyle: {
      margin: '6%',
    },
    titleStyle: {
      fontSize: 36.2
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
    apiKey: "AIzaSyA66EPDb9OKHJAHNtJtLSX20OLZJlXbyOs",
    authDomain: "japan-history-quiz-6e89d.firebaseapp.com",
    projectId: "japan-history-quiz-6e89d",
    storageBucket: "japan-history-quiz-6e89d.appspot.com",
    messagingSenderId: "1037148992157",
    appId: "1:1037148992157:web:03e6d263a4a2521f4d9a74",
    databaseURL: "https://japan-history-quiz-6e89d-default-rtdb.firebaseio.com/",
  }
  if (!firebase.apps.length) { // これをいれないとエラーになったのでいれてます。
      firebase.initializeApp(firebaseConfig);
  }

  const [info, setInfo] = useState("");

  firebase.firestore().collection("nicknameuser").orderBy('score', 'desc').limit(5).get().then((querySnapshot) => {
    const docs = querySnapshot.docs.map(doc => doc.data());
    setInfo(docs);
    // console.log(info);
  });
  // console.log(info);
  // console.log(info[1].username);
  
    return (
      <ThemeProvider theme={theme}>
        <View >
          <ImageBackground
            source={require('../assets/img/background.png')}
            resizeMode="cover"
            style={{ height: 1000, }}
          >
            <Header
              placement="left"
              leftComponent={{ icon: 'menu', color: 'brown' }}
              centerComponent={{ text: '日本史', style: { color: 'brown' },
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

            <View style={{ flex: 1, alignItems: 'center' }}>
              <Text h1>スタート画面</Text>
              <Text h1>覚えろ日本史!</Text>
              <Button
                title="始める"
                onPress={() => {
                  props.navigation.navigate('SelectNumber');
                }}
                containerStyle={{ width: '45%', marginBottom: 50, }}
              />
              <Button
                title="ランキング"
                onPress={() => {
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
                }}
                containerStyle={{ width: '45%' }}
              />
            </View>
          </ImageBackground>
        </View>
      </ThemeProvider>
    )
  }
