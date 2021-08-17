import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';
import { Button, Image, Overlay, Input, Header, ThemeProvider } from 'react-native-elements';
// firebaseのimport
import firebase from 'firebase';

class SignUpScreen extends React.Component {
  // emailとpasswordのstateを用意
  state = {
    email: '',
    password: '',
  }

  // 新規登録ボタンを押した時の処理
  handleSubmit() {
    // このメソッドを呼ぶだけ
    firebase.auth().createUserWithEmailAndPassword(
      this.state.email,
      this.state.password,
    ).then((user) => {
      console.log(user);
      // 完了時の処理
    }).catch((error) => {
      console.log(error);
      // 失敗時の処理
    });
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
        <TextInput
          style={styles.input}
          value={this.state.email}
          onChangeText={(text) => { this.setState({ email: text }); }}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          value={this.state.password}
          onChangeText={(text) => { this.setState({ password: text }); }}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Password"
          secureTextEntry
        />
        <TouchableHighlight underlayColor="#C70F66" style={styles.button} onPress={this.handleSubmit.bind(this)}>
          <Text style={styles.buttonTitle}>新規登録する</Text>
        </TouchableHighlight>
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
});

export default SignUpScreen;