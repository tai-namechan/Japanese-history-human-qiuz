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


export default class SelectEra extends Component {
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
              <Text h1>時代の選択</Text>
              <Text h1>時代を選べ！</Text>
              <Button
                title="江戸時代"
                onPress={() => {
                  this.props.navigation.navigate('Question')
                }}
                containerStyle={{ width: '45%', marginBottom: 50, }}
              />
              <Button
                title="明治時代"
                onPress={() => {
                  this.props.navigation.navigate('Question')
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
