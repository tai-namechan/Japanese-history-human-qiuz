import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Start from './screens/Start.js';
import  Question  from './screens/SelectQuestion.js';
import  Answer  from './screens/Answer.js';
import firebase from 'firebase';
import env from './env.json';
import  Signup  from './screens/SignUpScreen.js';
import  Login  from './screens/LoginScreen.js';
import Defult from './defult.js';
import SelectNumber from './screens/Select1or10';
import SelectEra from './screens/SelectEra';



// setting main nav
const MainStack = createStackNavigator(
  {
    Start: Start,
    SelectNumber: SelectNumber,
    SelectEra: SelectEra,
    Defult:Defult,
    Signup:Signup,
    Login:Login,

    Question: Question,
    Answer: Answer,

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
      // <SelectNumber />
    )
  }
}
