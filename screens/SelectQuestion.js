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
                { questionText: 'あなたは何年生まれですか？', answerText: 'わしは1604年にこの地に誕生した' },
                { questionText: 'あなたは何をした人ですか？', answerText: 'わしは実は将軍じゃったんじゃ' },
                { questionText: 'あなたが行なった政治は文治政治ですか？', answerText: 'わしはたしか...武断政治を行っていたな' },
                { questionText: 'あなたが農民に出した規制は何ですか？', answerText: 'わしが出した規制は[1643年]田畑永代売買の禁令と[同年]田畑勝手作りの禁じゃ' },
            ],
        },
    ]

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
    const handleQuestionOptionClick = (questionOption) => {
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

        // 質問ボタンを全て押し切る前
        if (score > 1) {
            // 質問ボタンを押した数だけスコアが計算される（＝初期スコア5から、質問ボタンを押した数）
            var currectScore = score - 1;
            // 最新のスコアを設定する
            setScore(currectScore);
            console.log(score);
        } else {
            // 用意された質問が全部終わった後

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
        const human = '徳川家光';
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
                            {questions[currentQuestion].questionOptions.map((questionOption) => (
                                <Button title={questionOption.questionText}
                                    onPress={() => handleQuestionOptionClick(questionOption)}
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