import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Start from './screens/start.js';
// import  Question  from './screens/question.js';
// import  Answer  from './screens/answer.js';
import firebase from 'firebase';
import env from './env.json';
import  Signup  from './screens/SignUpScreen.js';
import  Login  from './screens/LoginScreen.js';
import  Defult  from './defult.js';



// setting main nav
const MainStack = createStackNavigator(
  {
    // Signup:Signup,
    // Login:Login,
    // Defult:Defult,
    Start: Start,
    Defult:Defult,
    Signup:Signup,
    Login:Login,
    // Question: Question,
    // Answer: Answer,
  },
  // デフォルトでつくページ名
  //   {
  //   headerMode: 'none',
  //   navigationOptions: {
  //     headerVisible: true,
  //   },
  // }
)
const AppContainer = createAppContainer(MainStack)
export default class App extends Component {
  render() {
    return (
      <AppContainer />
    )
  }
}

