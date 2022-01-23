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
        fontSize: 40
    },
        raised: true,
    },
        colors: {
        primary: 'brown',
    },
};

export default function SelectNumber(props) {
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
            // leftComponent={{ icon: 'menu', color: 'brown' }}
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
                    <Text h1>問題数を選択！</Text>
                    {/* <Text h1 style={{ marginTop:20 }}>選べ！1問 or 10問</Text> */}
                </View>
                <View style={{ flex: 4, alignItems: "center" }}>
                    <Button
                        title="1問"
                        onPress={() => {
                            props.navigation.navigate('SelectEra',{id,idCount});
                        }}
                        containerStyle={{ width: '50%', }}
                    />
                    {/* <Button
                        title="10問"
                        onPress={() => {
                            props.navigation.navigate('Question', { questionRandom: questionRandom });
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
