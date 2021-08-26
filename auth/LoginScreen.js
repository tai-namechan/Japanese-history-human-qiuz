import React from 'react';
import firebase from 'firebase';
import { StyleSheet, View, Text, TextInput, TouchableHighlight, TouchableOpacity, SafeAreaView , ImageBackground } from 'react-native';
import LoginForm from './LoginForm.js';

class LoginScreen extends React.Component {
  // どっちかわからん
  state = {
    email: '',
    password: '',
  }
  state = { loggedIn: null };
  
  componentDidMount() {
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
    // メールログイン
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }
  // handleSubmit() {
  //   firebase.auth().signInWithEmailAndPassword(
  //     this.state.email,
  //     this.state.password,
  //   ).then((user) => {
  //     console.log(user);
  //     this.props.navigation.navigate('Home');
  //   }).catch((error) => {
  //     console.log(error);
  //   });
  // }
  // ログインフォームとログアウトボタン
  renderForm() {
    if (this.state.loggedIn) {
      return (

        <View style={styles.wrap}>
          <TouchableOpacity onPress={() => firebase.auth().signOut()} style={styles.button}>
            <Text style={styles.logout}>ログアウト</Text>
          </TouchableOpacity>
        </View>
      )
    } else {
      return (<LoginForm />)
    }
  }

  render() {
    return (
      <ImageBackground
        source={require('../assets/img/auth_background.png')}
        resizeMode="cover"
        style={{ height: '100%', }}
      >
        <SafeAreaView>
          <View style={styles.container}>
            <Text style={styles.buttonTitle}>{this.state.loggedIn ? "ログイン中です" : "ログインしろよ"}</Text>
          </View>
          {this.renderForm()}
          
          {/* ログイン後Topページに戻るボタン */}
          <TouchableOpacity style={styles.button2} onPress={() => {
            this.props.navigation.navigate('Start')
          }}>
            <Text style={styles.toppagebutton}>
              Topページに戻る
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

const styles = {
  // スタイルを記述
  container: {
    marginTop: '25%',
    width: '100%',
    padding: 24,
  },
  button: {
    height: 48,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    width: '60%',
    alignSelf: 'center',
  },
  buttonTitle: {
    fontSize: 17,
    marginLeft: '30%',
    marginRight: '25%',
  },
  logout: {
    color: 'white',
  },
  button2: {
    height: 48,
    borderRadius: 4,
    margin: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
    width: '60%',
    alignSelf: 'center',
  },
  toppagebutton: {
    fontSize: 18,
    color: 'white',
  },
}

export default LoginScreen;