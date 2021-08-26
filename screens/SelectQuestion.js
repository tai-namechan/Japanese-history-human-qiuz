import React, { useState, useEffect } from 'react';
import { View, ImageBackground, Animated, StyleSheet, TextInput } from 'react-native';
import { Button, Text, Image, Overlay, ThemeProvider, Header } from 'react-native-elements';
import Balloon from "react-native-balloon";
import * as Speech from 'expo-speech';
import questions from './question';

// スタイルシート関連
const theme = {
    Button: {
        containerStyle: {
            marginBottom: 20
        },
        titleStyle: {
            fontSize: 19
        },
        raised: true,
    },
    colors: {
        primary: 'brown',
    },
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 'auto',
        marginHorizontal: 'auto',
        padding: 24,
        marginTop: 10,
        backgroundColor: 'white',
    },
});

export default function SelectQuestion(props) {
    // 値を次のページに送る
    const { navigation } = props;
    const number = props.navigation.state.params.questionRandom;
    useEffect(() => {
        const questionRandom = props.navigation.state.params.questionRandom;
        // 選択された時代をSelectEraから受け取る
        const period = props.navigation.state.params.period;
        setCurrentQuestion(questionRandom);
         //setCurrentQuestion(1);
        console.log(questionRandom);
        console.log(period);
    },[]);

    const [showQuestions, setShowQuestions] = useState(questions);
    //console.log(questionRandom);
    const [countQuestionOne, setCountQuestionOne] = useState(1);
    const [countQuestionTwo, setCountQuestionTwo] = useState(1);
    const [countQuestionThree, setCountQuestionThree] = useState(1);
    const [countQuestionFour, setCountQuestionFour] = useState(1);
    const [aButton,setAButton] = useState(0);
    const [bButton,setBButton] = useState(0);
    const [cButton,setCButton] = useState(0);
    const [dButton,setDButton] = useState(0);


    // 質問した数の初期値
    const [currentQuestion, setCurrentQuestion] = useState(0);
    // answerTextの設定
    const [answerText, showAnswerText] = useState("");
    // 点数の初期値（プロトタイプでは４問しかないため、初期の点数は5に設定しておく）
    const [score, setScore] = useState(15);
    // モーダルの入力されたTextInputの値
    const [text, setText] = useState("");
    // モーダルの表示
    const [visible, setVisible] = useState(false);

    // 質問ボタンを押した後
    const handleQuestionOptionClick = (questionOption, i) => {
        // 質問ボタンを押したら、対応するanswerTextが吹き出しに表示する
        var setAnswerText = questionOption.answerText;
        showAnswerText(setAnswerText);

        // expo speech
        Speech.speak(setAnswerText,
            {
                "language": "ja",
                // 低い声
                "pitch": -1,
                // 高い声
                // "pitch": 1,
            }
        );

        // 質問ボタンの切り替え
        // console.log(i);
        //setNewQuestionText(questionOption, i);
        let number = i;


        if(i === 0) {
            //console.log(countQuestionOne);
            setCountQuestionOne(countQuestionOne + 1);
             //console.log(countQuestionOne);
            var countQuestionButton = countQuestionOne;

             //console.log(countQuestionButton);
            var A_temp = aButton + 1;
            //console.log("A"+A_temp);
        }


        else if(i === 1) {
            setCountQuestionTwo(countQuestionTwo + 1);
            // console.log(countQuestionTwo);
            var countQuestionButton = countQuestionTwo;

            var B_temp = bButton + 1;
            //console.log("B"+B_temp);
        }

        else if(i === 2) {
            setCountQuestionThree(countQuestionThree + 1);
            // console.log(countQuestionThree);
            var countQuestionButton = countQuestionThree;

            var C_temp = cButton + 1;
            //console.log("C"+C_temp);
        }
        else if(i === 3) {
            setCountQuestionFour(countQuestionFour + 1);
            // console.log(countQuestionFour);
            var countQuestionButton = countQuestionFour;
            var D_temp = dButton + 1;
            //console.log("D"+D_temp);
        }

        if(countQuestionButton == 1) {
            var questionOptionsStock = questions[currentQuestion].questionOptionsSecond[number];
            var questionTextStock = questions[currentQuestion].questionOptionsSecond[number].questionText;

            //var questionPreTextStock = questions[currentQuestion].questionOptions[number].questionText;


            // console.log(questionOptionsStock);
            // console.log(countQuestionButton);

        }
        else if(countQuestionButton == 2) {
            var questionOptionsStock = questions[currentQuestion].questionOptionsThird[number];
            var questionTextStock = questions[currentQuestion].questionOptionsThird[number].questionText;

            //var questionPreTextStock = questions[currentQuestion].questionOptionsSecond[number].questionText;
            // console.log(questionOptionsStock);
            // console.log(countQuestionButton);
        }
        else if(countQuestionButton == 3) {
            var questionOptionsStock = questions[currentQuestion].questionOptionsFourth[number];
            var questionTextStock = questions[currentQuestion].questionOptionsFourth[number].questionText;

            //var questionPreTextStock = questions[currentQuestion].questionOptionsSecond[number].questionText;
            // console.log(questionOptionsStock);
            // console.log(countQuestionButton);
        }
        else {
            var questionOptionsStock = questions[currentQuestion].questionOptionsFifth[number];
            var questionTextStock = questions[currentQuestion].questionOptionsFifth[number].questionText;

            //var questionPreTextStock = questions[currentQuestion].questionOptionsThird[number].questionText;
            // console.log(questionOptionsStock);
        }

        if (questionTextStock == '') {
            //showQuestions[currentQuestion].questionOptions.splice(number, 1);
            setShowQuestions(showQuestions);
            //console.log(showQuestions[currentQuestion].questionOptions);
        } else {
            showQuestions[currentQuestion].questionOptions.splice(number, 1, questionOptionsStock);
            // console.log(questions[currentQuestion].questionOptions);
            setShowQuestions(showQuestions);
            // console.log(showQuestions[currentQuestion].questionOptions);
        }


        // 質問ボタンを全て押し切る前
        if (i === 0){
        if (A_temp == 1) {
            //一度もnullに当たったことがない時
            if (score > 1) {
                // 質問ボタンを押した数だけスコアが計算される（＝初期スコア5から、質問ボタンを押した数）
                var currectScore = score - 1;
                // 最新のスコアを設定する
                setScore(currectScore);
            }
            if (questionTextStock == '') {
                //もし次がnullだったらaButtonの値を１に変える。
                setAButton(1);
            } else {
                //もし次がnullじゃなかったら次押された時も点数がへる。
                setAButton(0);
            }
        }else if (A_temp >= 2) {
             //前回までにnullに当たったことがある時これ以上減点されない。
            setAButton(A_temp);
        }
        }

        if (i === 1){
            if (B_temp == 1) {
                //console.log('ok');
                if (score > 1) {
                    // 質問ボタンを押した数だけスコアが計算される（＝初期スコア5から、質問ボタンを押した数）
                    var currectScore = score - 1;
                    // 最新のスコアを設定する
                    setScore(currectScore);
                }
                if (questionTextStock == '') {
                    setBButton(1);
                } else {
                    setBButton(0);
                }
            }else if (B_temp >= 2) {
                 //先がnullの時これ以上減点されない。
                setBButton(B_temp);
            }
        }




        if (i === 2){
            if (C_temp == 1) {
                //console.log('ok');
                if (score > 1) {
                    // 質問ボタンを押した数だけスコアが計算される（＝初期スコア5から、質問ボタンを押した数）
                    var currectScore = score - 1;
                    // 最新のスコアを設定する
                    setScore(currectScore);
                }
                if (questionTextStock == '') {
                    //setAButton(1);
                    setCButton(1);
                } else {
                    setCButton(0);
                }
            }else if (C_temp >= 2) {
                 //先がnullの時これ以上減点されない。
                setCButton(C_temp);
            }
        }



        if (i === 3){
            if (D_temp == 1) {
                //console.log('ok');
                if (score > 1) {
                    // 質問ボタンを押した数だけスコアが計算される（＝初期スコア5から、質問ボタンを押した数）
                    var currectScore = score - 1;
                    // 最新のスコアを設定する
                    setScore(currectScore);
                }
                if (questionTextStock == '') {
                    //setAButton(1);
                    setDButton(1);
                } else {
                    setDButton(0);
                }
            }else if (D_temp >= 2) {
                 //先がnullの時これ以上減点されない。
                setDButton(D_temp);
            }
        }

    }

    // モーダルの表示・非表示
    const toggleOverlay = () => {
        setVisible(!visible);
    }

    // 正誤判定とスコア画面への値送信
    const showScoreScreen = () => {
        // Textinputで入力されtextに代入された値をinputTextに代入
        const inputText = text;
        // humanに答えとなる人物を設定する
        //const human = '渋沢栄一';
        const human = questions[currentQuestion].human;
        //const number = questions[currentQuestion];

        // console.log(human);
        // console.log(inputText);

        // 入力した値が答えと一致している場合
        if (inputText == human) {
            var correctness = '正解';
            console.log(correctness);
        }
        // 入力した値が答えと不一致の場合
        else {
            var correctness = '不正解';
            console.log(correctness);
        }
        console.log(score);
        // answer.jsに遷移、「正解・不正解」「スコア」をanswer.jsに送信
        navigation.navigate('Answer', { correctness: correctness, score: score, number: number});

        // モーダルの非表示
        toggleOverlay();
    }

    return (
        <ThemeProvider theme={theme}>
            <View >
                <ImageBackground source={require('../assets/img/background.png')} resizeMode="cover"
                    style={{ height: 1000, }}>

                    <Header
                        // 問題画面にはstart.jsに戻るボタンはいらない？
                        // leftComponent={{
                        //     icon: 'home',
                        //     color: 'brown',
                        //     onPress: () => props.navigation.navigate('Start')
                        // }}
                        placement="left"
                        centerComponent={{ text: '歴史の壁〜正解を衝け〜', style: { color: 'brown' } }}
                        containerStyle={{
                            backgroundColor: '',
                            justifyContent: 'space-around',
                        }}
                    />
                    {/* <Text>インプット：{text}</Text> */}
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <View style={{
                            marginLeft: '25%',
                            marginRight: '25%',
                            marginTop: 15,
                        }}>
                            <Text h3 style={{ display: "none", }}>家光コメント</Text>
                            { <Image
                                source={require('../assets/img/kuromaku.jpg')}
                                style={{
                                    width: 225,
                                    height: 225,
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    justifyContent: 'center',
                                    lignItems: 'center'
                                }} /> }
                        </View>
                        <Balloon
                            borderColor="#CCC"
                            backgroundColor="#FFF"
                            borderWidth={1}
                            borderRadius={10}
                            triangleDirection='top'
                        >
                            <Animated.Text style={{
                                height: 60,
                            }}>
                                {answerText}
                            </Animated.Text>
                        </Balloon>

                        <Text>スコア：{score}</Text>

                        {/* 質問 */}
                        <Text h3>質問</Text>
                        <View style={styles.container}>
                            {showQuestions[currentQuestion].questionOptions.map((questionOption, i) => (
                                <Button title={questionOption.questionText}
                                    onPress={() => handleQuestionOptionClick(questionOption, i)}
                                />
                            ))}
                        </View>
                        <View style={{ marginTop: 30 }}>
                            <Button
                                title="わかった！"
                                onPress={toggleOverlay}
                            />
                            <Overlay isVisible={visible} >
                                {/* 回答フォーム */}
                                <TextInput
                                    style={{ height: 55, width: 160}}
                                    placeholder="ここに入力するのじゃ！"
                                    placeholderTextColor="#4A4444"
                                    // 入力された値をtextに代入する
                                    onChangeText={text => setText(text)}
                                    defaultValue={text}
                                />
                                <View
                                    style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                    <Button
                                        title="閉じる" onPress={toggleOverlay}
                                        // style={{ marginRight: 30, }}
                                    />
                                    <Button
                                        title="回答"
                                        onPress={showScoreScreen}
                                    />
                                </View>
                            </Overlay>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </ThemeProvider>
    )
}
