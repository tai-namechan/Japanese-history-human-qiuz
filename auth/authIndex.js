import React, { Component } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import firebase from 'firebase';
import LoginForm from './LoginForm.js';
import { Button, Image, Header, ThemeProvider } from 'react-native-elements';

class App extends Component {


  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          {/* <Text style={styles.buttonTitle}>{this.state.loggedIn ? "ログイン中です" : "ログインしろよ"}</Text> */}
        </View>
        {/* {this.renderForm()} */}
        {/* 匿名ログインのページへ遷移 */}
        <TouchableOpacity style={styles.button2} onPress={() => {
          this.props.navigation.navigate('Signup')
        }}>
          <Text style={styles.tokumeibutton}>
          新規登録はこちら
          </Text>
        </TouchableOpacity>
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
