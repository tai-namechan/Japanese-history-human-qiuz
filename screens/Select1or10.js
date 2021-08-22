import React, { Component, useEffect } from 'react';
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

export default function SelectNumber(props) {
    const random = () => {
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
            <Text h1>問題数を選択</Text>
            <Text h1>選べ！1問 or 10問</Text>
            <Button
                title="1問"
                onPress={() => {
                    props.navigation.navigate('SelectEra');
                }}
                containerStyle={{ width: '45%', marginBottom: 50, }}
            />
            <Button
                title="10問"
                onPress={() => {
                    props.navigation.navigate('Question', { questionRandom: questionRandom });
                    random();
                }}
                containerStyle={{ width: '45%' }}
            />
            </View>
        </ImageBackground>
        </View>
    </ThemeProvider>
    )
}
