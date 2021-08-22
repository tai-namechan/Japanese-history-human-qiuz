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

export default function Question(props) {
    // 値を次のページに送る
    const { navigation } = props;

    useEffect(() => {
        const questionRandom = props.navigation.state.params.questionRandom;
        setCurrentQuestion(questionRandom);
        // setCurrentQuestion(1);
        // console.log(questionRandom);
    },[]);

    const [showQuestions, setShowQuestions] = useState(questions);

    const [countQuestionOne, setCountQuestionOne] = useState(1);
    const [countQuestionTwo, setCountQuestionTwo] = useState(1);
    const [countQuestionThree, setCountQuestionThree] = useState(1);
    const [countQuestionFour, setCountQuestionFour] = useState(1);

    // 質問した数の初期値
    const [currentQuestion, setCurrentQuestion] = useState(0);
    // answerTextの設定
    const [answerText, showAnswerText] = useState("");
    // 点数の初期値（プロトタイプでは４問しかないため、初期の点数は5に設定しておく）
    const [score, setScore] = useState(5);
    // モーダルの入力されたTextInputの値
    const [text, setText] = useState("");
    // モーダルの表示
    const [visible, setVisible] = useState(false);

    // 質問ボタンを押した後
    const handleQuestionOptionClick = (questionOption, i) => {
        //　質問ボタンを押したら、対応するanswerTextが吹き出しに表示する
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
        setNewQuestionText(questionOption, i);

        // 質問ボタンを全て押し切る前
        if (score > 1) {
            // 質問ボタンを押した数だけスコアが計算される（＝初期スコア5から、質問ボタンを押した数）
            var currectScore = score - 1;
            // 最新のスコアを設定する
            setScore(currectScore);
            console.log(score);
            console.log(props.navigation);
        } else {
            // 用意された質問が全部終わった後

        }
    }

    // 質問ボタンの切り替え
    const setNewQuestionText = (questionOption, i) => {
        let number = i;
        // console.log(number);

        if(i === 0) {
            setCountQuestionOne(countQuestionOne + 1);
            // console.log(countQuestionOne);
            var countQuestionButton = countQuestionOne;
            // console.log(countQuestionButton);
        } 
        else if(i === 1) {
            setCountQuestionTwo(countQuestionTwo + 1);
            // console.log(countQuestionTwo);
            var countQuestionButton = countQuestionTwo;
        } 
        else if(i === 2) {
            setCountQuestionThree(countQuestionThree + 1);
            // console.log(countQuestionThree);
            var countQuestionButton = countQuestionThree;
        } 
        else if(i === 3) {
            setCountQuestionFour(countQuestionFour + 1);
            // console.log(countQuestionFour);
            var countQuestionButton = countQuestionFour;
        }

        if(countQuestionButton == 1) {
            var questionOptionsStock = questions[currentQuestion].questionOptionsSecond[number];
            var questionTextStock = questions[currentQuestion].questionOptionsSecond[number].questionText;
            // console.log(questionOptionsStock);
            // console.log(countQuestionButton);

        } 
        else if(countQuestionButton == 2) {
            var questionOptionsStock = questions[currentQuestion].questionOptionsThird[number];
            var questionTextStock = questions[currentQuestion].questionOptionsThird[number].questionText;
            // console.log(questionOptionsStock);
            // console.log(countQuestionButton);
        }
        else {
            var questionOptionsStock = questions[currentQuestion].questionOptionsFourth[number];
            var questionTextStock = questions[currentQuestion].questionOptionsFourth[number].questionText;
            // console.log(questionOptionsStock);
        } 

        if (questionTextStock == '') {
            // showQuestions[currentQuestion].questionOptions.splice(number, 1);
            setShowQuestions(showQuestions);
            console.log(showQuestions[currentQuestion].questionOptions);
        } else {
            showQuestions[currentQuestion].questionOptions.splice(number, 1, questionOptionsStock);
            // console.log(questions[currentQuestion].questionOptions);
            setShowQuestions(showQuestions);
            // console.log(showQuestions[currentQuestion].questionOptions);
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
        const human = '渋沢栄一';
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
        navigation.navigate('Answer', { correctness: correctness, score: score, });

        // モーダルの非表示
        toggleOverlay();
    }    

    return (
        <ThemeProvider theme={theme}>
            <View >
                <ImageBackground source={require('../assets/img/background.png')} resizeMode="cover"
                    style={{ height: 1000, }}>

                    <Header
                        placement="left"
                        leftComponent={{ icon: 'menu', color: 'brown' }}
                        centerComponent={{ text: '日本史', style: { color: 'brown' } }}
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
                    <Text>インプット：{text}</Text>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <View style={{
                            marginLeft: '25%',
                            marginRight: '25%',
                        }}>
                            <Text h3 style={{ display: "none", }}>家光コメント</Text>
                            {/* <Image
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
                                }} /> */}
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
                                    style={{ height: 40 }}
                                    placeholder="Type here to translate!"
                                    // 入力された値をtextに代入する
                                    onChangeText={text => setText(text)}
                                    defaultValue={text}
                                />
                                <View
                                    style={{ flexDirection: 'row', }}>
                                    <Button
                                        title="閉じる" onPress={toggleOverlay}
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