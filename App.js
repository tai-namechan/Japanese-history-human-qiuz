import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Start from './screens/Start.js';
import  SelectQuestion  from './screens/SelectQuestion.js';
import  RandomQuestion  from './screens/RandomQuestion.js';
import  Answer  from './screens/Answer.js';
import firebase from 'firebase';
import env from './env.json';
import  Index  from './auth/index.js';
import  Signup  from './auth/SignupScreen.js';
import  Login  from './auth/LoginScreen.js';
import Auth from './auth/authIndex.js';
import SelectNumber from './screens/Select1or10';
import SelectEra from './screens/SelectEra';
// import Tokumei from './auth/Tokumei.js';
import Ranking from './screens/Ranking.js';

// setting main nav
const MainStack = createStackNavigator(
  {
    Start: Start,
    SelectNumber: SelectNumber,
    SelectEra: SelectEra,
    Auth:Auth,
    Signup:Signup,
    Login:Login,
    Index:Index,
    Ranking:Ranking,
    // Tokumei:Tokumei,
    SelectQuestion: SelectQuestion,
    RandomQuestion: RandomQuestion,
    Answer: Answer,

  },
  // デフォルトでつくページ名
    {
    headerMode: 'none',
      navigationOptions: {
        headerVisible: true,
    },
  }
)
const AppContainer = createAppContainer(MainStack)
export default class App extends Component {
  render() {
    return (
      <AppContainer />
    )
  }
}
