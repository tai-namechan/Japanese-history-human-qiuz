import React, { Component } from 'react';
import { View, TouchableOpacity, Text, TextInput, ActivityIndicator } from 'react-native';
import firebase from 'firebase';

class SignupForm extends Component {
  state = { username: '', email: '', password: '', error: '', loading: false };

  onButtonPress() {
    const { username, email, password } = this.state;
    this.setState({ error: '', loading: true });

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((this.onSignupSuccess.bind(this)))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then((this.onSignupSuccess.bind(this)))
          .catch((this.onSignupFail.bind(this)));
      });

    // firestoreにユーザー情報を登録
    firebase
      .firestore()
      .collection('nicknameuser')
      .add({
        // DBに登録したい情報
        username,
        email,
        password,
      })
      .then(() => {
        console.log('Add Firestore Success');
      })
      .catch((error) => {
        console.log(error);
      });
      
  //   // 新規登録ボタンを押した時の処理
  // handleSubmit() {
  //   // このメソッドを呼ぶだけ
  //   firebase.auth().createUserWithEmailAndPassword(
  //     this.state.email,
  //     this.state.password,
  //   ).then((user) => {
  //     console.log(user);
  //     // 完了時の処理
  //   }).catch((error) => {
  //     console.log(error);
  //     // 失敗時の処理
  //   });
  // }
  }

  onSignupSuccess() {
    this.setState({
      // username: '',
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  onSignupFail() {
    this.setState({
      loading: false,
      error: 'Authentication Failed'
    });
  }

  loadSpinner() {
    if (this.state.loading) {
      return <ActivityIndicator size="small" />
    }

    return (

      <TouchableOpacity onPress={this.onButtonPress.bind(this)} style={styles.button}>
        <Text style={styles.buttonTitle}>
          新規登録
        </Text>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <TextInput
            placeholder="ユーザー名"
            autoCorrect={false}
            value={this.state.username}
            onChangeText={username => this.setState({ username })}
            style={styles.input}
          />
        </View>
        <View>
          <TextInput
            placeholder="user@gmail.com"
            autoCorrect={false}
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            style={styles.input}
          />
        </View>
        <View style={styles.wrap}>
          <TextInput
            secureTextEntry
            placeholder="password"
            autoCorrect={false}
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            style={styles.input}
          />
        </View>

        <View style={styles.wrap}>
          {this.loadSpinner()}
        </View>
        
      </View>
    )
  }
}

const styles = {
  container: {
    width: '100%',
    // marginTop:'50%',
    padding: 24,

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
  tokumeibutton: {
    fontSize: 18,
    color: 'white',
  }
}
export default SignupForm;