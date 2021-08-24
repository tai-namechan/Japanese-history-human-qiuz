import React, { useState, useEffect } from 'react';
// usestateが使える
import { View, ImageBackground, StyleSheet, Animated } from 'react-native';
import { Button, Text, Image, Overlay, Input, Header, ThemeProvider } from 'react-native-elements';
import Balloon from "react-native-balloon";
import { TouchableOpacity } from 'react-native';
// import useWindowSize from 'react-use/lib/useWindowSize'
// import Confetti from 'react-confetti'
// import ConfettiCannon from 'react-native-confetti-cannon';
import firebase from 'firebase';

const theme = {
    colors: {
        primary: 'brown',
    },
};

export default function Answer({ navigation }) {
    //question.jsからcorrectness(正誤)とscore(5点満点)の値を受け取る
    const correctness = navigation.state.params.correctness;
    const score = navigation.state.params.score;

    const [lastScore, setlastScore] = useState("");
    const [answerText, setAnswerText] = useState("");
    const [databaseScore, setDatabaseScore] = useState("");

    // 正誤表示
    const answerWord = {
        seikai: "正解おめでとう！",
        huseikai: "残念"
    }

    useEffect(() => {
        // console.log(correctness);
        // console.log(score);
    }, []);

    useEffect(() => {
        // console.log(correctness);
        //正解だった場合
        if (correctness == "正解") {
            //最終点数：score
            setlastScore(score);
            //コメント：正解おめでとう！
            setAnswerText(answerWord.seikai);
            // console.log(answerText);
        }
        //不正解だった場合
        else {
            //最終点数：0
            setlastScore(0);
            //正誤：残念
            setAnswerText(answerWord.huseikai);
        }
    }, []);

    // 画像フェードインアウト
    const opacity = useState(new Animated.Value(0))[0]

    // 遷移したら自動的に黒幕が姿あらわす
    Animated.timing(opacity, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true
    }).start()

    // フェードイン
    function fadeInBall() {
        Animated.timing(opacity, {
            toValue: 1,
            //2sかけて現れる
            duration: 2000,
            useNativeDriver: true
        }).start()
    }
    // フェードアウト
    function fadeOutBall() {
        Animated.timing(opacity, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true
        }).start()
    }

    // 関数の準備
    const [visible, setVisible] = useState(false);
    // 関数
    // const toggleOverlay = () => {
    //     // if文入れたりできる
    //     // visibleはあたい=false
    //     // !をつけるとfalseがtrueに変わる
    //     setVisible(!visible);
    // }

    // 下の解説文のview
    const styles = StyleSheet.create({
        container: {
            marginVertical: 'auto',
            marginHorizontal: 'auto',
            padding: 24,
            marginTop: 40,
            backgroundColor: 'orange',
        },
    });

    // 現在ログインしているユーザーを取得する
    const user = firebase.auth().currentUser;
    if (user !== null) {
        const email = user.email;
        const uid = user.uid;
        // console.log(email);
        // console.log(uid);

        const userInfomation = firebase.firestore().collection('nicknameuser').doc(user.uid);

        // if (lastScore !== 0) {
            userInfomation.get().then((doc) => {
                // console.log(doc.data('score'));
                const data = doc.data();
                // setDataScore(data);
                const datascore = data.score;
                // console.log(datascore);
                
                let cc = Number(lastScore) + Number(datascore);
                // setDatabaseScore(cc);
                console.log('スコア：', cc);

                const datatimes = data.times;
                // console.log('回数：',datatimes);
                let dd = 1 + Number(datatimes);
                console.log(dd);

                // firebaseのデータ更新（スコアの更新）
                firebase
                    .firestore()
                    .collection('nicknameuser')
                    .doc(user.uid)
                    .update({
                        score: cc,
                        times: dd,
                    })
                    .then(() => {
                        // console.log('Add Firestore Success');
                    })
                    .catch((error) => {
                        // console.log(error);
                    });
            });
        // }
    }

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
                    <Text>
                        正誤：{correctness}
                    </Text>
                    <Text>
                        コメント：{answerText}
                    </Text>
                    <Text>
                        {/* 不正解の場合も点数は０ではない値(5-質問数) */}
                        点数：{score}
                    </Text>
                    <Text>
                        {/* 不正解の場合は0,正解の場合はscoreと同じ点 */}
                        最終点数：{lastScore}
                    </Text>
                    <View style={{ flex: 1, alignItems: 'center' }}>

                        {/* 偉人の名前 */}
                        <Animated.Text
                            style={{
                                opacity,
                                alignItems: 'center',
                                fontSize: 30
                            }}>A.徳川家光</Animated.Text>

                        {/* 偉人の画像 */}
                        <View style={{
                            marginLeft: '25%',
                            marginRight: '25%',
                        }}>
                            <Animated.Image
                                //白黒
                                source={require('../assets/img/iemitu-sihouette.png')}
                                style={{
                                    width: 300,
                                    height: 300,
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    justifyContent: 'center',
                                    lignItems: 'center'
                                }} />
                            <Animated.Image
                                //カラー
                                source={require('../assets/img/iemitu.png')}
                                style={{
                                    width: 300,
                                    height: 300,
                                    opacity,
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }} />
                        </View>

                        {/* 関数を入れる */}
                        {/* 吹き出し */}
                        <Balloon
                            borderColor="#CCC"
                            backgroundColor="#FFF"
                            borderWidth={1}
                            borderRadius={10}
                            triangleDirection='top'
                        >
                            <Animated.Text style={{
                                height: 60,
                                //吹き出し内の文字をフェードインさせる
                                opacity
                            }}
                            >
                                私は江戸幕府三代将軍徳川家光じゃ
                            </Animated.Text>
                        </Balloon>

                        <TouchableOpacity
                            style={{ flexDirection: 'row', }}>
                            <Button
                                //「消す」ボタンを押すと白黒に変わる
                                style={{ marginRight: 10, }}
                                title="消す" onPress={fadeOutBall}
                            />
                            <Button
                                //「出現させる」ボタンを押すとカラーに変わる
                                style={{ marginLeft: 30, }}
                                title="出現させる"
                            />
                        </TouchableOpacity>

                        {/* 解説文 */}
                        <View style={styles.container} >
                            <Animated.View
                                //解説文をフェードインさせる
                                style={{ opacity, }}>
                                <Text>三代将軍徳川家光</Text>
                                <Text>二代将軍秀忠に続き、武断主義政策をとり浪人が大量に発生。1635年、林羅山[道春]が起草した武家諸法度寛永令が出された。また、強力な領主権を持つ公儀権力[幕府と藩]が全国の土地と人民を直接統括支配する幕藩体制が確立された
                                </Text>
                            </Animated.View>
                        </View>

                    </View>

                </ImageBackground>
            </View>
        </ThemeProvider>
    )
}