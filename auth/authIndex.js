import React, { Component } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView , ImageBackground } from 'react-native';
import firebase from 'firebase';
import LoginForm from './LoginForm.js';
import { Button, Image, Header, ThemeProvider } from 'react-native-elements';
import { BottomBannerAds, InterstitialAds } from '../Advertisement/Ads';

class App extends Component {


  render() {
    return (
      <ImageBackground
        source={require('../assets/img/auth_background.png')}
        resizeMode="cover"
        style={{ height: '100%', }}
      >
        <SafeAreaView style={styles.container}>
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
          {/* ログイン後Topページに戻るボタン */}
          <TouchableOpacity style={styles.button} onPress={() => {
            this.props.navigation.navigate('Start')
          }}>
            <Text style={styles.toppagebutton}>
              Topページに戻る
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
        <View style={ styles.ads }>
            {/* バナー広告 */}
            <BottomBannerAds style={{}} />
          </View>

      </ImageBackground>
    )
  }
}

const styles = {
  // スタイルを記述
  container: {
    marginTop: '70%',
    width: '100%',
    padding: '25%',
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
    backgroundColor: 'brown',
    width: '60%',
    alignSelf: 'center',
  },
  button: {
    backgroundColor: 'grey',
    height: 48,
    borderRadius: 4,
    margin: 30,
    justifyContent: 'center',
    alignItems: 'center',
    width: '60%',
    alignSelf: 'center',

  },
  tokumeibutton: {
    color: 'white',
    fontSize: 18,
  },
  toppagebutton: {
    fontSize: 18,
    color: 'white',
  },
  ads: {
    marginTop: '56%',
    alignItems: "center",
  }
}

export default App;
