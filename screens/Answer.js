import React, { useState, useEffect} from 'react';
// usestateが使える
import { View, ImageBackground, StyleSheet, Animated } from 'react-native';
import { Button, Text, Image, Overlay, Input, Header, ThemeProvider } from 'react-native-elements';
import Balloon from "react-native-balloon";
import { TouchableOpacity } from 'react-native';
import questions from './question';
// import useWindowSize from 'react-use/lib/useWindowSize'
// import Confetti from 'react-confetti'
// import ConfettiCannon from 'react-native-confetti-cannon';
import firebase from 'firebase';

const theme = {
    colors: {
        primary: 'brown',
    },
    Button: {
        containerStyle: {
          margin: '6%',
        },
    }
};

export default function Answer({ navigation }) {
    //question.jsからcorrectness(正誤)とscore(5点満点)の値を受け取る
    const correctness = navigation.state.params.correctness;
    const score = navigation.state.params.score;
    //const human = navigation.state.params.human;
    const number = navigation.state.params.number;


    const [lastScore, setlastScore] = useState("");
    const [answerText, setAnswerText] = useState("");

    const [correctImg, setCorrectImg] = useState("");


    const [databaseScore, setDatabaseScore] = useState("");


    // 正誤表示
    const answerWord = {
        seikai : "正解おめでとう！",
        huseikai : "残念"
    }
    const marubatsu = {
        seikai : require('../assets/img/正解.png'),
        huseikai : require('../assets/img/不正解.png')
    }


    useEffect(() => {
        console.log(correctness);
        console.log(score);
        //console.log(human);
        console.log(number);

        //console.log(questionRandom);
    }, []);

    useEffect(() => {
        console.log(correctness);
        //正解だった場合
        if(correctness=="正解") {
            //最終点数：score
            setlastScore(score);
            //コメント：正解おめでとう！
            setAnswerText(answerWord.seikai);
            console.log(answerText);
            setCorrectImg(marubatsu.seikai);
        }
        //不正解だった場合
        else {
            //最終点数：0
            setlastScore(0);
            //正誤：残念
            setAnswerText(answerWord.huseikai);
            setCorrectImg(marubatsu.huseikai);
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
            marginTop: 10,
            //backgroundColor: 'peru',
            //backgroundColor: 'darkgoldenrod',
            //backgroundColor: 'rosybrown',
            //backgroundColor: 'saddlebrown',
            backgroundColor: 'maroon',
            //backgroundColor: 'sienna',
        },
    });
    



    // const image = questions[number].image;



  
    const image = questions[number].image;

    const firebaseConfig = {
        // 各自生成された値を入れる
        apiKey: "AIzaSyAlFs-hQv_K-11iiZxtRuWprNdt_Wexb38",
        authDomain: "japa-his-quiz.firebaseapp.com",
        projectId: "japa-his-quiz",
        storageBucket: "japa-his-quiz.appspot.com",
        messagingSenderId: "488843376693",
        appId: "1:488843376693:web:0ac02be9f4c44634ab197c",
        databaseURL: "https://japa-his-quiz-default-rtdb.firebaseio.com/",
    }
    if (!firebase.apps.length) { // これをいれないとエラーになったのでいれてます。
        firebase.initializeApp(firebaseConfig);
    }
    
    // 現在ログインしているユーザーを取得する
    const user = firebase.auth().currentUser;
    if (user !== null) {
        const uid = user.uid;
        // console.log(uid);

        const userInfomation = firebase.firestore().collection('nicknameuser').doc(user.uid);

        userInfomation.get().then((doc) => {
            // console.log(doc.data('score'));
            const data = doc.data();
            // setDataScore(data);
            const datascore = data.score;
            // console.log(datascore);
            let cc = Number(lastScore) + Number(datascore);
            // setDatabaseScore(cc);
            // console.log('スコア：', cc);

            const datatimes = data.times;
            // console.log('回数：',datatimes);
            let dd = 1 + Number(datatimes);
            // console.log(dd);

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
    }
    
    

    return (

        <ThemeProvider theme={theme}>
            <View>
                <ImageBackground source={require('../assets/img/background.png')} resizeMode="cover"
                    style={{ height: 1000, }}>

                    <Header
                        placement="left"
                        leftComponent={{ icon: 'menu', color: 'brown' }}
                        centerComponent={{ text: '日本史の壁〜正解を衝け〜', style: { color: 'brown' } }}
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
                    
                    {/* <Text>
                        正誤：{correctness}
                    </Text>
                    <Text>
                        コメント：{answerText}
                    </Text> */}
                    
                    
                    <View style={{ flex: 1, alignItems: 'center' }}>
                    { <Image
                                source={correctImg}
                                style={{
                                    width:220,
                                    height: 150,
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    justifyContent: 'center',
                                    lignItems: 'center'
                                }} /> }
                    <Text h2>
                        {/* 不正解の場合は0,正解の場合はscoreと同じ点 */}
                        {lastScore}点/15点中
                    </Text>
                        {/* 偉人の名前 */}
                        {/* <Animated.Text
                            style={{
                                opacity,
                                alignItems: 'center',
                                fontSize: 30
                            }}>A.{questions[number].human}</Animated.Text> */}

                        {/* 偉人の画像 */}
                        <View style={{
                            marginLeft: '25%',
                            marginRight: '25%',
                        }}>
                            <Animated.Image
                                //白黒
                                source={require('../assets/img/kuromaku.jpg')}
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
                                source = {image}
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
                                fontSize: 22,
                                height: 27,
                                
                                //吹き出し内の文字をフェードインさせる
                                opacity
                            }}
                            >
                                {questions[number].dialogue}
                            </Animated.Text>
                        </Balloon>

                        {/* <TouchableOpacity
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
                        </TouchableOpacity> */}

                        {/* 解説文 */}
                        <View style={styles.container} >
                            <Animated.View
                                //解説文をフェードインさせる
                                style={{ opacity, }}>
                                <Text style={{ color: 'white' }}>{questions[number].explanationTitle}</Text>
                                <Text style={{ color: 'white' }}>{questions[number].explanationDetail}
                                </Text>
                            </Animated.View>
                        </View>
                        <Button
                            title="ランキング"
                            onPress={() => {
                            this.props.navigation.navigate('Ranking');
                            }}
                            containerStyle={{ width: '45%' }}
                        />

                    </View>

                </ImageBackground>
            </View>
        </ThemeProvider>
    )
}
