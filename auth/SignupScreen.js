import React from 'react';
import firebase from 'firebase';
import { StyleSheet, View, Text, TextInput, TouchableHighlight, TouchableOpacity, SafeAreaView } from 'react-native';
import { Button, Image, Overlay, Input, Header, ThemeProvider } from 'react-native-elements';
import SignupForm from './SignupForm.js';

class SignupScreen extends React.Component {
  // emailとpasswordのstateを用意
  // state = {
  //   username: '',
  //   email: '',
  //   password: '',
  // }
  state = { username: '', email: '', password: '', error: '', loading: false };
  componentDidMount() {
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
    // メールログイン
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  // onButtonPress() {
  //   const { username, email, password } = this.state;
  //   this.setState({ error: '', loading: true });

  //   firebase.auth().signInWithEmailAndPassword(username, email, password)
  //     .then((this.onLoginSuccess.bind(this)))
  //     .catch(() => {
  //       firebase.auth().createUserWithEmailAndPassword(email, password)
  //         .then((this.onLoginSuccess.bind(this)))
  //         .catch((this.onLoginFail.bind(this)));
  //     });

  // }
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
      return (<SignupForm />)
    }
  }

  render() {
    return (
      <View style={styles.container}>
          <Header
              placement="left"
              leftComponent={{ icon: 'menu', color: 'brown' }}
              centerComponent={{ text: 'ログイン', style: { color: 'brown' }, 
            //   onPress: () => this.props.navigation.navigate('Signup')
            }}
              rightComponent={{
                icon: 'home',
                color: 'brown',
                // onPress: () => this.props.navigation.navigate('Start')
              }}
              containerStyle={{
                backgroundColor: '',
                justifyContent: 'space-around',
              }}
            />
        <Text style={styles.title}>新規登録</Text>
        <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.buttonTitle}>{this.state.loggedIn ? "ログイン中です" : "登録しろよ"}</Text>
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    alignSelf: 'center',
    marginBottom: 24,
  },
  input: {
    backgroundColor: '#ddd',
    height: 48,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
  },
  logout: {
    color: 'white',
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
    fontSize: 18,
    color: '#fff',
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
});

export default SignupScreen;