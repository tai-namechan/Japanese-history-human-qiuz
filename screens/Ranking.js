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
    }
});
export default function Answer({ navigation }) {

    // 紙吹雪

    // 画像フェードインアウト
    const opacity = useState(new Animated.Value(0))[0]

    // 遷移したら自動的に黒幕が姿あらわす
    Animated.timing(opacity, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true
    }).start()

    // ランキング
    const firebaseConfig = {
        // 各自生成された値を入れる
        apiKey: "AIzaSyAH4YeRPvUMVJOMfTc29bpUJJtsi7Ehsik",
        authDomain: "history-quiz-112eb.firebaseapp.com",
        projectId: "history-quiz-112eb",
        storageBucket: "history-quiz-112eb.appspot.com",
        messagingSenderId: "84366476538",
        appId: "1:84366476538:web:bb54d4267b33769217b543",
        databaseURL: "https://history-quiz-112eb-default-rtdb.firebaseio.com/",
    }
    if (!firebase.apps.length) { // これをいれないとエラーになったのでいれてます。
        firebase.initializeApp(firebaseConfig);
    }

    // const [rankingInfo, setRankingInfo] = useState([]);

    // const onpress = () => {
    //     console.log('=============!!');
    //     var ff = firebase.firestore().collection('nicknameuser').orderBy("score", "desc").limit(2).get();
    //     console.log(ff);
    //     console.log('=============!!');
    //     setRankingInfo(ff);
    //     // console.log(rankingInfo);
    // }

    const [text, setText] = useState([]);

    firebase.firestore().collection("nicknameuser").orderBy('score', 'desc').limit(5).get().then((querySnapshot) => {
        const docs = querySnapshot.docs.map(doc => doc.data());
        console.log(docs);
        // const posts = docs;
        // console.log(posts[0]);
        setText(doc[0]);

        // console.log('=============!!');
        // console.log(text);
    });
    // console.log(text);
    


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
                                <Text>1位</Text>
                                <Text>{text.username} </Text>
                                <Text>{text.score} points</Text>
                            </View>
                            {/* <View style={styles.item1}>
                                <Text>2位</Text>
                                <Text>{text[1].username} </Text>
                                <Text>{text[1].score} points</Text>
                            </View>
                            <View style={styles.item1}>
                                <Text>3位</Text>
                                <Text>{text3.username}</Text>
                                <Text>{text3.score}point</Text>
                            </View>
                            <View style={styles.item1}>
                                <Text>4位</Text>
                                <Text>{text4.username}</Text>
                                <Text>{text4.score}point</Text>
                            </View>
                            <View style={styles.item1}>
                                <Text>5位</Text>
                                <Text>{text5.username}</Text>
                                <Text>{text5.score}point</Text>
                            </View> */}
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
                                <Text>1位</Text>
                                <Text>ユーザー名</Text>
                                <Text>〇〇point</Text>
                            </View>
                            <View style={styles.item1}>
                                <Text>2位</Text>
                                <Text>ユーザー名</Text>
                                <Text>〇〇point</Text>
                            </View>
                            <View style={styles.item1}>
                                <Text>3位</Text>
                                <Text>ユーザー名</Text>
                                <Text>〇〇point</Text>
                            </View>
                            <View style={styles.item1}>
                                <Text>4位</Text>
                                <Text>ユーザー名</Text>
                                <Text>〇〇point</Text>
                            </View>
                            <View style={styles.item1}>
                                <Text>5位</Text>
                                <Text>ユーザー名</Text>
                                <Text>〇〇point</Text>
                            </View>
                        </View>
                    </View>

                </ImageBackground>
            </View>
        </ThemeProvider>
    )
}
