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
      apiKey: "AIzaSyBnhRdmw8zEMPf1rrqsiRyxeHq4bceNh-Y",
      authDomain: "logintry-9fc99.firebaseapp.com",
      databaseURL: "https://logintry-9fc99-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "logintry-9fc99",
      storageBucket: "logintry-9fc99.appspot.com",
      messagingSenderId: "856169166658",
      appId: "1:856169166658:web:8a576746ed66149432badb"
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