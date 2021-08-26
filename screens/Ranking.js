import React, { useState, useEffect, useMemo } from 'react';
// usestateが使える
import { View, ImageBackground, StyleSheet, Animated, Dimensions, } from 'react-native';
import { Button, Text, Image, Overlay, Input, Header, ThemeProvider } from 'react-native-elements';
import Balloon from "react-native-balloon";
import { TouchableOpacity } from 'react-native';
import questions from './question';
import firebase from 'firebase';


const theme = {
    colors: {
        primary: 'brown',
    },
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 'auto',
        marginHorizontal: 'auto',
        padding: 24,
        marginTop: 20,
        width: '62.5%',
        height: '35%',
        backgroundColor: 'white',
    },
    category: {
        alignItems: 'center',
    },
    item1: {
        marginTop: 20,
        justifyContent: 'space-evenly',
        flexDirection: 'row',
    },
});
export default function Answer({ navigation }) {
    const firstOpacity = useState(
        new Animated.Value(0)
    )[0]

    const secondOpacity = useState(
        new Animated.Value(0)
    )[0]

    const thirdOpacity = useState(
        new Animated.Value(0)
    )[0]

    const fourthOpacity = useState(
        new Animated.Value(0)
    )[0]

    const fifthOpacity = useState(
        new Animated.Value(0)
    )[0]

    // 画像フェードインアウト
    const opacity = useState(new Animated.Value(0))[0]

    // 遷移したら自動的に黒幕が姿あらわす
    Animated.timing(opacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true
    }).start()

    Animated.timing(firstOpacity, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true
    }).start()

    Animated.timing(secondOpacity, {
        toValue: 1,
        duration: 4000,
        useNativeDriver: true
    }).start()

    Animated.timing(thirdOpacity, {
        toValue: 1,
        duration: 6000,
        useNativeDriver: true
    }).start()

    Animated.timing(fourthOpacity, {
        toValue: 1,
        duration: 8000,
        useNativeDriver: true
    }).start()

    Animated.timing(fifthOpacity, {
        toValue: 1,
        duration: 10000,
        useNativeDriver: true
    }).start()

    // 前の画面（Start.js,Answer.js）からランキング上位5位を取得
    const username1 = navigation.state.params.username1;
    const score1 = navigation.state.params.score1;
    const username2 = navigation.state.params.username2;
    const score2 = navigation.state.params.score2;
    const username3 = navigation.state.params.username3;
    const score3 = navigation.state.params.score3;
    const username4 = navigation.state.params.username4;
    const score4 = navigation.state.params.score4;
    const username5 = navigation.state.params.username5;
    const score5 = navigation.state.params.score5;

    return (

        <ThemeProvider theme={theme}>
            <View>
                <ImageBackground source={require('../assets/img/background.png')} resizeMode="cover"
                    style={{ height: 1000, }}>

                    <Header
                        placement="left"
                        leftComponent={{ icon: 'menu', color: 'brown' }}
                        centerComponent={{ text: '日本史', style: { color: 'brown' } }}
                        //ホームボタン
                        rightComponent={{
                            icon: 'home',
                            color: 'brown',
                            onPress: () => navigation.navigate('Start')
                        }}
                        containerStyle={{
                            backgroundColor: '',
                            justifyContent: 'space-around',
                        }}
                    />

                    <View style={{ flex: 1, alignItems: 'center' }}>
                        {/* 紙吹雪 */}

                        {/* <Button 
                            title="ランキング" 
                            // onPress={onpress}
                        /> */}

                        {/* ランキング */}
                        <Animated.Text
                            style={{
                                opacity,
                                alignItems: 'center',
                                marginTop: 20,
                                fontSize: 35
                            }}>👑ランキング</Animated.Text>

                        <View style={styles.container}>

                            <View style={styles.category}>
                                <Animated.Text
                                    style={{
                                        opacity,
                                        alignItems: 'center',
                                        fontSize: 24
                                    }}>総獲得ポイント
                                </Animated.Text>
                            </View>
                            <View style={styles.item1}>
                                <Text></Text>
                                <Text>名前</Text>
                                <Text>点数</Text>
                            </View>
                            <View style={styles.item1}>
                                <Animated.Text style={{ opacity: firstOpacity, }}>1位</Animated.Text>
                                <Animated.Text style={{ opacity: firstOpacity, }}>{username1}</Animated.Text>
                                <Animated.Text style={{ opacity: firstOpacity, }}>{score1}point</Animated.Text>
                            </View>
                            <View style={styles.item1}>
                                <Animated.Text style={{ opacity: secondOpacity, }}>2位</Animated.Text>
                                <Animated.Text style={{ opacity: secondOpacity, }}>{username2}</Animated.Text>
                                <Animated.Text style={{ opacity: secondOpacity, }}>{score2}point</Animated.Text>
                            </View>
                            <View style={styles.item1}>
                                <Animated.Text style={{ opacity: thirdOpacity, }}>3位</Animated.Text>
                                <Animated.Text style={{ opacity: thirdOpacity, }}>{username3}</Animated.Text>
                                <Animated.Text style={{ opacity: thirdOpacity, }}>{score3}point</Animated.Text>
                            </View>
                            <View style={styles.item1}>
                                <Animated.Text style={{ opacity: fourthOpacity, }}>4位</Animated.Text>
                                <Animated.Text style={{ opacity: fourthOpacity, }}>{username4}</Animated.Text>
                                <Animated.Text style={{ opacity: fourthOpacity, }}>{score4}point</Animated.Text>
                            </View>
                            <View style={styles.item1}>
                                <Animated.Text style={{ opacity: fifthOpacity, }}>5位</Animated.Text>
                                <Animated.Text style={{ opacity: fifthOpacity, }}>{username5}</Animated.Text>
                                <Animated.Text style={{ opacity: fifthOpacity, }}>{score5}point</Animated.Text>
                            </View>
                        </View>

                        <View style={styles.container}>

                            <View style={styles.category}>
                                <Animated.Text
                                    style={{
                                        opacity,
                                        alignItems: 'center',
                                        fontSize: 24
                                    }}>平均ポイント
                                </Animated.Text>
                            </View>
                            <View style={styles.item1}>
                                <Text></Text>
                                <Text>お名前</Text>
                                <Text>Score</Text>
                            </View>
                            <View style={styles.item1}>
                                <Animated.Text style={{ opacity: firstOpacity, }}>1位</Animated.Text>
                                <Animated.Text style={{ opacity: firstOpacity, }}>ユーザー名</Animated.Text>
                                <Animated.Text style={{ opacity: firstOpacity, }}>〇〇point</Animated.Text>
                            </View>
                            <View style={styles.item1}>
                                <Animated.Text style={{ opacity: secondOpacity, }}>2位</Animated.Text>
                                <Animated.Text style={{ opacity: secondOpacity, }}>ユーザー名</Animated.Text>
                                <Animated.Text style={{ opacity: secondOpacity, }}>〇〇point</Animated.Text>
                            </View>
                            <View style={styles.item1}>
                                <Animated.Text style={{ opacity: thirdOpacity, }}>3位</Animated.Text>
                                <Animated.Text style={{ opacity: thirdOpacity, }}>ユーザー名</Animated.Text>
                                <Animated.Text style={{ opacity: thirdOpacity, }}>〇〇point</Animated.Text>
                            </View>
                            <View style={styles.item1}>
                                <Animated.Text style={{ opacity: fourthOpacity, }}>4位</Animated.Text>
                                <Animated.Text style={{ opacity: fourthOpacity, }}>ユーザー名</Animated.Text>
                                <Animated.Text style={{ opacity: fourthOpacity, }}>〇〇point</Animated.Text>
                            </View>
                            <View style={styles.item1}>
                                <Animated.Text style={{ opacity: fifthOpacity, }}>5位</Animated.Text>
                                <Animated.Text style={{ opacity: fifthOpacity, }}>ユーザー名</Animated.Text>
                                <Animated.Text style={{ opacity: fifthOpacity, }}>〇〇point</Animated.Text>
                            </View>
                        </View>
                    </View>

                </ImageBackground>
            </View>
        </ThemeProvider>
    )
}
