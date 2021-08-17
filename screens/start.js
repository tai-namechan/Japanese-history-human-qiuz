import React, { Component } from 'react';
import { View, ImageBackground } from 'react-native';
import { Button, Text, Image, Header, ThemeProvider } from 'react-native-elements';

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
              <Text h1>スタート画面</Text>
              <Text h1>覚えろ日本史!</Text>
              <Button
                title="始める"
                onPress={() => {
                  this.props.navigation.navigate('Question')
                }}
                containerStyle={{ width: '45%', marginBottom: 50, }}
              />
              <Button
                title="ランキング"
                onPress={() => {
                  this.props.navigation.navigate('Signup')
                }}
                containerStyle={{ width: '45%' }}
              />
            </View>
          </ImageBackground>
        </View>
      </ThemeProvider>
    )
  }
}