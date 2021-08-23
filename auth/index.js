import React, { Component } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import firebase from 'firebase';
import LoginForm from './LoginForm.js';
import { Button, Image, Header, ThemeProvider } from 'react-native-elements';

class App extends Component {
  state = { loggedIn: null };

  componentDidMount() {
    const firebaseConfig = {
      // 各自生成された値を入れる
      apiKey: "AIzaSyDr1rqtIwynxlItQpfcYCf_bwn_velxlrI",
      authDomain: "japanese-history-quiz-518c2.firebaseapp.com",
      databaseURL: "https://japanese-history-quiz-518c2-default-rtdb.firebaseio.com/",
      projectId: "japanese-history-quiz-518c2",
      storageBucket: "japanese-history-quiz-518c2.appspot.com",
      messagingSenderId: "833552253127",
      appId: "1:833552253127:web:9371bd16b0047699fb3ee2"
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
    //   return (<LoginForm />)
    }
  }

  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.buttonTitle}>{this.state.loggedIn ? "ログイン中です" : "ログインしろよ"}</Text>
        </View>
        {/* 匿名ログインのページへ遷移 */}
        <TouchableOpacity style={styles.button2} onPress={() => {
          this.props.navigation.navigate('Login')
        }}>
          <Text style={styles.tokumeibutton}>
            ログインはこちら
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={() => {
          this.props.navigation.navigate('Tokumei')
        }}>
          <Text style={styles.tokumeibutton}>
            匿名認証ページへ進む
          </Text>
        </TouchableOpacity>
        {/* ログイン後Topページに戻るボタン */}
        <TouchableOpacity style={styles.button2} onPress={() => {
          this.props.navigation.navigate('Start')
        }}>
          <Text style={styles.toppagebutton}>
            Topページに戻る
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    )
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

export default App;