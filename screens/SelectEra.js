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
      fontSize: 40
    },
    raised: true,
  },
  colors: {
    primary: 'brown',
  },
};  

export default function SelectEra(props) {

  let id = props.navigation.state.params.id;
  let idCount = props.navigation.state.params.idCount;

  return (
    <ThemeProvider theme={theme}>
      <View >
        <ImageBackground
          source={require('../assets/img/background.png')}
          resizeMode="cover"
          style={{ height: "100%", }}
        >
          <Header
            placement="left"
            leftComponent={{ 
              icon: 'chevron-left', 
              color: 'brown',
              onPress: () => props.navigation.navigate('SelectNumber') 
            }}
            centerComponent={{ text: '歴史の壁〜正解を衝け〜', style: { color: 'brown' },
            // onPress: () => this.props.navigation.navigate('Signup')
          }}
            rightComponent={{
              icon: 'home',
              color: 'brown',
              onPress: () => props.navigation.navigate('Start')
            }}
            containerStyle={{
              backgroundColor: '',
              justifyContent: 'space-around',
            }}
          />
          <View style={{ flex: 1 }}>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
              <Text h1 style={{ marginTop:30 }}>
                時代を選べ！
              </Text>
            </View>
            <View style={{ flex: 4, alignItems: "center" }}>
              <Button
                title="ランダム"
                onPress={() => {
                  //props.navigation.navigate('RandomQuestion', { questionRandom: questionRandom });
                  //↑ランダム ↓とりあえずSelectEra.js
                  // 画面遷移先はボタンに応じるように変更（どちらも同じ処理が走るようにしているため, RandomQuestion.js内の処理も正常に動くコードにしておきたいため）by.Daisuke 8/26
                  props.navigation.navigate('RandomQuestion', {id,idCount});
                  //random();
                }}
                containerStyle={{ width: '50%' }}
              />
              {/* <Button
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
                containerStyle={{ width: '50%' }}
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
                containerStyle={{ width: '50%' }}
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
                containerStyle={{ width: '50%' }}
              /> */}
            </View>
          </View>
        </ImageBackground>
      </View>
    </ThemeProvider>
  )
}
