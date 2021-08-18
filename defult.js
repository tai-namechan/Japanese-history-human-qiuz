import React, { Component } from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import firebase from 'firebase';
import LoginForm from './screens/LoginForm';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Start from './screens/start.js';
// import  Question  from './screens/question.js';
// import  Answer  from './screens/answer.js';
import { Button, Image, Header,ThemeProvider } from 'react-native-elements';

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
      return(
        
        <View style={styles.wrap}>
          <TouchableOpacity onPress={() => firebase.auth().signOut()} style={styles.button}>
            <Text style={styles.logout }>ログアウト</Text>
          </TouchableOpacity>
        </View>
        
      )
    } else {
      return(<LoginForm />)
    }
  }

  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.buttonTitle }>{this.state.loggedIn ? "ログイン中です" : "ログインしろよ"}</Text>
        </View>
        {this.renderForm()}
      </SafeAreaView>
    )
  }
}

const styles = {
  // スタイルを記述
  container: {
    marginTop:'50%',
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
  logout:{
    color:'white',
  }
}

export default App;