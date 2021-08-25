import React, { Component, useEffect} from 'react';
import { View, ImageBackground } from 'react-native';
import { Button, Text, Image, Header, ThemeProvider } from 'react-native-elements';
import questions from './question';


const theme = {
  Button: {
    containerStyle: {
      margin: '6%',
    },
    titleStyle: {
      fontSize: 36.2
    },
    raised: true,
  },
  colors: {
    primary: 'brown',
  },
};

  let questionRandom = Math.floor(Math.random() * questions.length);
  console.log(questionRandom);

export default function SelectEra(props) {
  random = () => {
    questionRandom = Math.floor(Math.random() * questions.length);
  };

  return (
    <ThemeProvider theme={theme}>
      <View >
        <ImageBackground
          source={require('../assets/img/background.png')}
          resizeMode="cover"
          style={{ height: 1000, }}
        >
          <Header
            placement="left"
            leftComponent={{ icon: 'menu', color: 'brown' }}
            centerComponent={{ text: '日本史', style: { color: 'brown' },
            // onPress: () => this.props.navigation.navigate('Signup')
            }}
            rightComponent={{
              icon: 'login',
              color: 'brown',
              onPress: () => this.props.navigation.navigate('Defult')
            }}
            containerStyle={{
              backgroundColor: '',
              justifyContent: 'space-around',
            }}
          />

          <View style={{ flex: 1, alignItems: 'center' }}>
            {/* <Text h1>時代の選択</Text> */}
            <Text
            h1
            style={{ marginTop:20 }}
            >
              時代を選べ！
            </Text>

            <Button
              title="ランダム"
              onPress={() => {
                //props.navigation.navigate('RandomQuestion', { questionRandom: questionRandom });
                //↑ランダム　↓とりあえずSelectEra.js
                props.navigation.navigate('SelectQuestion', { questionRandom: questionRandom });
                random();
              }}
              containerStyle={{ width: '50%', marginBottom: 50, }}
            />

            <Button
              title="大正時代"
              onPress={() => {
                props.navigation.navigate('SelectQuestion', {
                  questionRandom: questionRandom,
                  period: '大正時代'
                }
                );
                random();
              }}
              containerStyle={{ width: '50%', marginBottom: 50, }}
            />
            <Button
              title="明治時代"
              onPress={() => {
                props.navigation.navigate('SelectQuestion', {
                  questionRandom: questionRandom,
                  period: '明治時代'
                }
                );
                random();
              }}
              containerStyle={{ width: '50%', marginBottom: 50, }}
            />
            <Button
              title="江戸時代"
              onPress={() => {
                props.navigation.navigate('SelectQuestion', {
                  questionRandom: questionRandom,
                  period: '江戸時代'
                }
                );
                random();
              }}
              containerStyle={{ width: '50%', marginBottom: 50, }}
            />
            <Button
              title="室町・戦国時代"
              onPress={() => {
                props.navigation.navigate('SelectQuestion', {
                  questionRandom: questionRandom,
                  period: '室町・戦国時代'
                }
                );
                random();
              }}
              containerStyle={{ width: '50%', marginBottom: 50, }}
            />
          </View>
        </ImageBackground>
      </View>
    </ThemeProvider>
  )
}
