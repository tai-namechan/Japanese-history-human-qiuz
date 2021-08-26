import React, { Component } from 'react';
import { View, ImageBackground } from 'react-native';
import { Button, Text, Image, Header, ThemeProvider } from 'react-native-elements';

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


export default class Start extends Component {
  render() {
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
              rightComponent={{ icon: 'menu', color: 'brown' }}
              centerComponent={{ text: '歴史の壁〜正解を衝け〜', style: { color: 'brown' },
              // onPress: () => this.props.navigation.navigate('Signup')
            }}
              leftComponent={{
                icon: 'login',
                color: 'brown',
                onPress: () => this.props.navigation.navigate('Auth')
              }}
              containerStyle={{
                backgroundColor: '',
                justifyContent: 'space-around',
              }}
            />

            <View style={{ flex: 1, alignItems: 'center' }}>
              {/* <Text h1>スタート画面</Text> */}
              <Text
                h1
                style={{ marginTop:30,}}
              >
                歴史の壁
              </Text>
              <Text h1>〜正解を衝け〜</Text>
              <Button
                title="始める"
                onPress={() => {
                  this.props.navigation.navigate('SelectNumber');
                }}
                containerStyle={{ width: '50%', marginBottom: 50, marginTop:100, }}
              />
              <Button
                title="ランキング"
                onPress={() => {
                  this.props.navigation.navigate('Ranking');
                }}
                containerStyle={{ width: '50%' }}
              />
            </View>
          </ImageBackground>
        </View>
      </ThemeProvider>
    )
  }
}
