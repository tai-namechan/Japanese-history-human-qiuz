import React, { Component, useEffect} from 'react';
import { View, ImageBackground, ScrollView } from 'react-native';
import { Button, Text, Image, Header, ThemeProvider } from 'react-native-elements';
import questions from './question';


const theme = {
  Button: {
    containerStyle: {
      margin: '5%',
    },
    titleStyle: {
      fontSize: 35
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
          style={{ height: '100%' }}
        >
          <ScrollView >
          <Header
            placement="left"
            rightComponent={{ icon: 'menu', color: 'brown' }}
            centerComponent={{ text: '歴史の壁〜正解を衝け〜', style: { color: 'brown' },
            // onPress: () => this.props.navigation.navigate('Signup')
          }}
            leftComponent={{
              icon: 'home',
              color: 'brown',
              onPress: () => props.navigation.navigate('Start')
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
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop:30}}>
            <Button
              title="ランダム"
              onPress={() => {
                //props.navigation.navigate('RandomQuestion', { questionRandom: questionRandom });
                //↑ランダム ↓とりあえずSelectEra.js
                // 画面遷移先はボタンに応じるように変更（どちらも同じ処理が走るようにしているため, RandomQuestion.js内の処理も正常に動くコードにしておきたいため）by.Daisuke 8/26
                props.navigation.navigate('RandomQuestion', { questionRandom: questionRandom });
                random();
              }}
              containerStyle={{ width: '50%'}}
            />
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
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
              containerStyle={{ width: '50%' }}
            />
            </View>
            <View style={{ flex: 1, alignItems: 'center',justifyContent: 'center' }}>
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
              containerStyle={{ width: '50%',  }}
            />
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
              containerStyle={{ width: '50%', }}
            />
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
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
              containerStyle={{ width: '50%', }}
            />
            </View>
          </View>
          </ScrollView>
        </ImageBackground>
      </View>
    </ThemeProvider>
  )
}
