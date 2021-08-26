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

  const getDatabaseData = async () => {
    // console.log("================");
    // 総合スコアの降順の取得
    await firebase.firestore().collection("nicknameuser").orderBy('score', 'desc').limit(5).get().then((querySnapshot) => {
      console.log("bbb");
      const scoreDocs = querySnapshot.docs.map(doc => doc.data());
      //   console.log("ccc");
      //   console.log(scoreDocs);
      const scoreInfo = scoreDocs;
      // console.log(scoreInfo[0].username);
      return scoreInfo;
    }).then((scoreInfo) => {
      let uu = scoreInfo;
      // console.log(uu);
      return uu;
    })
      // 平均スコアの降順の取得
      .then((uu) => {
        firebase.firestore().collection("nicknameuser").orderBy('average', 'desc').limit(5).get().then((querySnapshot) => {
          // console.log("bbbbb");
          const averageDocs = querySnapshot.docs.map(doc => doc.data());
          // console.log("ccc");
          // console.log(averageDocs);
          const averageInfo = averageDocs;
          const rr = uu.concat(averageInfo);
          console.log(rr);
          // setRrr(rr);
          return rr;
        })
          .then((rr) => {
            const user = firebase.auth().currentUser;
            // console.log(user);
            if (user !== null) {
              const userInfomation = firebase.firestore().collection('nicknameuser').doc(user.uid);

              userInfomation.get().then((doc) => {
                const data = doc.data();
                const loginusername = data.username;
                // console.log(datausername);

                const loginscore = data.score;
                // console.log(datascore);

                const loginaverage = data.average;
                // console.log(datatimes);

                props.navigation.navigate(
                  'Ranking', {
                  // 遷移時に値を受け渡す
                  username1: rr[0].username,
                  score1: rr[0].score,
                  username2: rr[1].username,
                  score2: rr[1].score,
                  username3: rr[2].username,
                  score3: rr[2].score,
                  username4: rr[3].username,
                  score4: rr[3].score,
                  username5: rr[4].username,
                  score5: rr[4].score,

                  average_username1: rr[5].username,
                  average_score1: rr[5].average,
                  average_username2: rr[6].username,
                  average_score2: rr[6].average,
                  average_username3: rr[7].username,
                  average_score3: rr[7].average,
                  average_username4: rr[8].username,
                  average_score4: rr[8].average,
                  average_username5: rr[9].username,
                  average_score5: rr[9].average,

                  login_username: loginusername,
                  login_score: loginscore,
                  login_average: loginaverage,
                });
              })
            } else {
              props.navigation.navigate(
                'Ranking', {
                // 遷移時に値を受け渡す
                username1: rr[0].username,
                score1: rr[0].score,
                username2: rr[1].username,
                score2: rr[1].score,
                username3: rr[2].username,
                score3: rr[2].score,
                username4: rr[3].username,
                score4: rr[3].score,
                username5: rr[4].username,
                score5: rr[4].score,

                average_username1: rr[5].username,
                average_score1: rr[5].average,
                average_username2: rr[6].username,
                average_score2: rr[6].average,
                average_username3: rr[7].username,
                average_score3: rr[7].average,
                average_username4: rr[8].username,
                average_score4: rr[8].average,
                average_username5: rr[9].username,
                average_score5: rr[9].average,

                login_username: "（ログインしてね！）",
                login_score: "??",
                login_average: "??",
              });
            }
          })
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
            centerComponent={{
              text: '歴史の壁〜正解を衝け〜', style: { color: 'brown' },
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
                                    lignItems: 'center'
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
                                    lignItems: 'center'
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
                lignItems: 'center'
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
                lignItems: 'center'
              }} />
            <Button
              title="始める"
              onPress={() => {
                props.navigation.navigate('SelectNumber');
              }}
              containerStyle={{ width: '50%', marginBottom: 50, marginTop: 100, }}
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