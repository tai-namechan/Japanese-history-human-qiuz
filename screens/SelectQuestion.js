import React, { useState } from 'react';
import { View, ImageBackground, Animated, StyleSheet, TextInput } from 'react-native';
import { Button, Text, Image, Overlay, ThemeProvider, Header } from 'react-native-elements';
import Balloon from "react-native-balloon";
import * as Speech from 'expo-speech';

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
    

    // 質問
    const questions = [
        {
            human: '家光',
            questionOptions: [
                { 
                    questionText: 'どこで生まれましたか？', 
                    answerText: '武蔵国といって現在の埼玉県にあたる場所で生まれたよ。' 
                },
                { 
                    questionText: 'あなたのやってることは現代の職業で言ったら何になる？', 
                    answerText: '経営者もやったことの一つだな' 
                },
                { 
                    questionText: '西暦何年生まれですか？', 
                    answerText: '1840年に生まれたよ。' 
                },
                { 
                    questionText: '実は〇〇な話ある？', 
                    answerText: '実は68歳で側室との間に子供ができたんじゃ' 
                },
            ],
            questionOptionsSecond: [
                { 
                    questionText: '人生のターニングポイントは？', 
                    answerText: 'いくつかあるが27歳の時のパリへの渡航がなければ今の私はなかったと思う' 
                },
                { 
                    questionText: '何を経営してた？', 
                    answerText: '第一国立銀行はそのうちの一つだ。国立銀行条例をもとにして私が設立したよ。' 
                },
                { 
                    questionText: '尊敬している人は？', 
                    answerText: '尊敬している人のうちの1人は平岡円四郎様だな。' 
                },
                { 
                    questionText: '特技はなんですか？', 
                    answerText: 'そろばんが得意だよ。' 
                },
            ],
            questionOptionsThird: [
                { 
                    questionText: '異名はありますか？', 
                    answerText: '日本資本主義の父と言われているらしいな。' 
                },
                { 
                    questionText: '有名な知り合いを教えて?', 
                    answerText: '西郷隆盛殿や大久保利通殿は知り合いだぞ。' 
                },
            ],
            questionOptionsFourth: [
                { 
                    questionText: '何か自慢できることはある？', 
                    answerText: '私がもうじき１万円札の顔になるらしいぞ。' 
                },
            ],
        },
    ]

    const [showQuestions, setShowQuestions] = useState(questions);

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
            // console.log(score);
        } else {
            // 用意された質問が全部終わった後

        }
    }

    // 質問ボタンの切り替え
    const setNewQuestionText = (questionOption, i) => {
        // console.log(Object.keys(questions[currentQuestion].questionOptions));
        // console.log(questions[currentQuestion].questionOptions);
        let number = i;
        showQuestions[currentQuestion].questionOptions.splice(number, 1,questions[currentQuestion].questionOptionsSecond[number]);
        // console.log(questions[currentQuestion].questionOptions);
        setShowQuestions(showQuestions);
        console.log(showQuestions[currentQuestion].questionOptions);
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
                            {showQuestions[currentQuestion].questionOptions.map(( questionOption, i) => (
                                <Button 
                                    title={questionOption.questionText}
                                    onPress={() => handleQuestionOptionClick(questionOption, i)
                                    }
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