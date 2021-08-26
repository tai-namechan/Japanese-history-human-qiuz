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
            source={require('../assets/img/sakura-change.jpg')}
            resizeMode="cover"
            style={{ height: 1000, }}
          >
            <Header
              // authは右にあった方がいい気がしたため、iconの左右入れ替えた
              placement="left"
              leftComponent={{ icon: 'menu', color: 'brown' }}
              centerComponent={{ text: '歴史の壁〜正解を衝け〜', style: { color: 'brown' },
              // onPress: () => this.props.navigation.navigate('Signup')
            }}
              rightComponent={{
                icon: 'login',
                color: 'brown',
                onPress: () => this.props.navigation.navigate('Auth')
              }}
              containerStyle={{
                backgroundColor: '',
                justifyContent: 'space-around',
              }}
            />
            {/* <Image source={require('../assets/img/歴史の壁.png')}
                                style={{
                                    // width: 300,
                                    height: 90,
                                    marginTop: 50,
                                    marginLeft:'20%',
                                    marginRight:'20%',
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    justifyContent: 'center',
                                    lignItems: 'center'
                                }} />
              <Image source={require('../assets/img/タイトル.png')}
                                style={{
                                    // width: 300,
                                    height: 90,
                                    marginTop: 30,
                                    marginLeft:'20%',
                                    marginRight:'20%',
                                    bottom: 0,
                                    justifyContent: 'center',
                                    lignItems: 'center'
                                }} /> */}
            <View style={{ flex: 1, alignItems: 'center' }}>
              <Image source={require('../assets/img/歴史の壁.png')}
                                style={{
                                    width: 300,
                                    height: 90,
                                    marginTop: 40,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    justifyContent: 'center',
                                    lignItems: 'center'
                                }} />
              <Image source={require('../assets/img/タイトル.png')}
                                style={{
                                    width: 300,
                                    height: 90,
                                    marginTop: 40,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    justifyContent: 'center',
                                    lignItems: 'center'
                                }} />
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
