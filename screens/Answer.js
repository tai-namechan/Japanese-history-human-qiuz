import React, { useState, useEffect} from 'react';
// usestateが使える
import { View, ImageBackground, StyleSheet, Animated, SafeAreaView, ScrollView, } from 'react-native';
import { Button, Text, Image, Overlay, Input, Header, ThemeProvider } from 'react-native-elements';
import Balloon from "react-native-balloon";
import { TouchableOpacity } from 'react-native';
import questions from './question';
//import * as Speech from 'expo-speech';
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


    //const [databaseScore, setDatabaseScore] = useState("");
    
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
        // console.log(correctness);
        // console.log(score);
        //console.log(human);
        // console.log(number);

        //console.log(questionRandom);
    }, []);

    useEffect(() => {
        // console.log(correctness);
        //正解だった場合
        if(correctness=="正解") {
            //最終点数：score
            setlastScore(score);
            //コメント：正解おめでとう！
            setAnswerText(answerWord.seikai);

            setCorrectImg(marubatsu.seikai);

            // console.log(answerText);

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
    // function fadeInBall() {
    //     Animated.timing(opacity, {
    //         toValue: 1,
    //         //2sかけて現れる
    //         duration: 2000,
    //         useNativeDriver: true
    //     }).start()
    // }
    // // フェードアウト
    // function fadeOutBall() {
    //     Animated.timing(opacity, {
    //         toValue: 0,
    //         duration: 1000,
    //         useNativeDriver: true
    //     }).start()
    // }

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
            padding: 19,
            // marginTop: 10,
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
        apiKey: "AIzaSyDr1rqtIwynxlItQpfcYCf_bwn_velxlrI",
        authDomain: "japanese-history-quiz-518c2.firebaseapp.com",
        databaseURL: "https://japanese-history-quiz-518c2-default-rtdb.firebaseio.com",
        projectId: "japanese-history-quiz-518c2",
        storageBucket: "japanese-history-quiz-518c2.appspot.com",
        messagingSenderId: "833552253127",
        appId: "1:833552253127:web:9371bd16b0047699fb3ee2"
    }
    if (!firebase.apps.length) { // これをいれないとエラーになったのでいれてます。
        firebase.initializeApp(firebaseConfig);
    }

    const [databaseUserName, setDatabaseUserName] = useState("");
    const [databaseUserScore, setDatabaseUserScore] = useState("");
    const [databaseUserAverage, setDatabaseUserAverage] = useState("");

    
        // 現在ログインしているユーザーを取得する
        const user = firebase.auth().currentUser;
        if (user !== null) {
            const uid = user.uid;
            // console.log(uid);

            const userInfomation = firebase.firestore().collection('nicknameuser').doc(user.uid);

            userInfomation.get().then((doc) => {
                // console.log(doc.data('score'));
                const data = doc.data();

                const datausername = data.username;
                // setDatabaseUserName(datausername);
                // console.log("名前", databaseUserName);

                
                // const databaseuseraverage = datauseraverage;
                // console.log(datauseraverage);
                // setDatabaseUserAverage(databaseuseraverage);
                // console.log("平均点", databaseUserAverage);

                const datascore = data.score;

                // setDatabaseUserScore(datascore);
                // console.log("スコア", databaseUserScore);
                // console.log(datascore);
                let cc = Number(lastScore) + Number(datascore);
                // setDatabaseScore(cc);
                // console.log('スコア：', cc);

                const datatimes = data.times;
                // console.log('回数：',datatimes);
                let dd = 1 + Number(datatimes);
                // console.log(dd);

                let ee = Number(cc)/Number(dd);
                let ff = Math.round(ee * 100) / 100;
                // console.log(ff);

                // firebaseのデータ更新（スコアの更新）
                firebase
                    .firestore()
                    .collection('nicknameuser')
                    .doc(user.uid)
                    .update({
                        score: cc,
                        times: dd,
                        average: ff,
                    })
                    .then(() => {
                        // console.log('Add Firestore Success');
                    })
                    .catch((error) => {
                        // console.log(error);
                    });
                
                // const datauseraverage = data.average;
                // return datauseraverage;
            });
            // setDatabaseUserAverage(datauseraverage);
            // console.log(datauseraverage);
        }
        // console.log(datauseraverage);


        const getDatabaseData = async() => {
            // console.log("================");
            // 総合スコアの降順の取得
            await firebase.firestore().collection("nicknameuser").orderBy('score', 'desc').limit(5).get().then((querySnapshot) => {
              console.log("bbb");
              const scoreDocs = querySnapshot.docs.map(doc => doc.data());
            //   console.log("ccc");
            //   console.log(scoreDocs);
              const scoreInfo = scoreDocs;
              // console.log(scoreInfo[0].username);
              return scoreInfo;
            }).then((scoreInfo) => {
                let uu = scoreInfo;
                // console.log(uu);
                return uu;
            })
            // 平均スコアの降順の取得
            .then((uu) =>{
                firebase.firestore().collection("nicknameuser").orderBy('average', 'desc').limit(5).get().then((querySnapshot) => {
                    // console.log("bbbbb");
                    const averageDocs = querySnapshot.docs.map(doc => doc.data());
                    // console.log("ccc");
                    // console.log(averageDocs);
                    const averageInfo = averageDocs;
                    const rr = uu.concat(averageInfo);
                    console.log(rr);
                    // setRrr(rr);
                    return rr;
            })
            .then((rr)=>{
                const user = firebase.auth().currentUser;
                // console.log(user);
                if (user !== null){
                    const userInfomation = firebase.firestore().collection('nicknameuser').doc(user.uid);

                    userInfomation.get().then((doc) => {
                        const data = doc.data();
                        const loginusername = data.username;
                        // console.log(datausername);

                        const loginscore = data.score;
                        // console.log(datascore);

                        const loginaverage = data.average;
                        // console.log(datatimes);

                        navigation.navigate(
                            'Ranking', {
                            // 遷移時に値を受け渡す
                            username1: rr[0].username, 
                            score1: rr[0].score, 
                            username2: rr[1].username, 
                            score2: rr[1].score, 
                            username3: rr[2].username, 
                            score3: rr[2].score, 
                            username4: rr[3].username, 
                            score4: rr[3].score, 
                            username5: rr[4].username, 
                            score5: rr[4].score, 
    
                            average_username1: rr[5].username,
                            average_score1: rr[5].average,
                            average_username2: rr[6].username,
                            average_score2: rr[6].average,
                            average_username3: rr[7].username,
                            average_score3: rr[7].average,
                            average_username4: rr[8].username,
                            average_score4: rr[8].average,
                            average_username5: rr[9].username,
                            average_score5: rr[9].average,
    
                            login_username: loginusername,
                            login_score: loginscore,
                            login_average : loginaverage,
                        });
                    })
                } else {
                    navigation.navigate(
                        'Ranking', {
                        // 遷移時に値を受け渡す
                        username1: rr[0].username, 
                        score1: rr[0].score, 
                        username2: rr[1].username, 
                        score2: rr[1].score, 
                        username3: rr[2].username, 
                        score3: rr[2].score, 
                        username4: rr[3].username, 
                        score4: rr[3].score, 
                        username5: rr[4].username, 
                        score5: rr[4].score, 

                        average_username1: rr[5].username,
                        average_score1: rr[5].average,
                        average_username2: rr[6].username,
                        average_score2: rr[6].average,
                        average_username3: rr[7].username,
                        average_score3: rr[7].average,
                        average_username4: rr[8].username,
                        average_score4: rr[8].average,
                        average_username5: rr[9].username,
                        average_score5: rr[9].average,

                        login_username: "（ログインしてね！）",
                        login_score: "??",
                        login_average : "??",
                    });
                }
            })
        });
    }

    return (
        <ThemeProvider theme={theme}>
            <View style={{ flex: 1 }}>
                <ImageBackground source={require('../assets/img/background.png')} resizeMode="cover"
                    style={{ height: "100%", }}>

                    <Header
                        placement="left"
                        // leftComponent={{ icon: 'menu', color: 'brown' }}
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
                    <View style={{ alignItems: 'center' }}>
                        <Image
                            source={correctImg}
                            style={{
                                width: 180,
                                height: 90,
                                alignItems: 'center'
                            }}
                        /> 
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
                    </View>
                    <View style={{flex: 2, alignItems: "center", justifyContent: "center"}}>
                        <SafeAreaView>
                            <ScrollView>
                                {/* 偉人の画像 */}
                                <View style={{ alignItems: "center", marginTop: 15 }}>
                                    <Animated.Image
                                        //白黒
                                        source={require('../assets/img/kuromaku.jpg')}
                                        style={{
                                            width: 230,
                                            height: 230,
                                            alignItems: 'center'
                                        }} 
                                    />
                                    <Animated.Image
                                        //カラー
                                        source = {image}
                                        style={{
                                            width: 230,
                                            height: 230,
                                            opacity,
                                            position: 'absolute',
                                            alignItems: 'center'
                                        }} 
                                    />
                                </View>

                                {/* 関数を入れる */}
                                {/* 吹き出し */}
                                <View style={{ alignItems: "center", justifyContent: "center" }}>
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
                                </View>
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
                                <View style={styles.container} >
                                    <Animated.View
                                        //解説文をフェードインさせる
                                        style={{ opacity, }}>
                                        <Text style={{ color: 'white' }}>{questions[number].explanationTitle}</Text>
                                        <Text style={{ color: 'white' }}>{questions[number].explanationDetail}
                                        </Text>
                                    </Animated.View>
                                </View>
                            </ScrollView>
                        </SafeAreaView>
                    </View>
                    <View style={{alignItems: "center", height: "12%"}}>
                        <Button
                            title="ランキング"
                            onPress={getDatabaseData}
                            containerStyle={{ width: '50%' }}
                        />
                    </View>
                </ImageBackground>
            </View>
        </ThemeProvider>
    )
}
