import React, { useState, useEffect } from 'react';
import { View, ImageBackground, Animated, StyleSheet, TextInput, Dimensions } from 'react-native';
import { Button, Text, Image, Overlay, ThemeProvider, Header } from 'react-native-elements';
import Balloon from "react-native-balloon";
import * as Speech from 'expo-speech';
import questions from './question';
import { useForm, Controller } from "react-hook-form";

const {width, height} = Dimensions.get('window');

// スタイルシート関連
const theme = {
    Button: {
        containerStyle: {
            marginBottom: 15
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
        flex: 1,
        height: height,
    },
    header: {
        flex: 1,
        alignItems: 'center',
    },
    commentContainer: {
        flex: 0.8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttons: {
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        width: "100%"
    },
    image: {
        width: 170,
        height: 170,
    },
    buttonContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
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
    },[]);

    const [showQuestions, setShowQuestions] = useState(questions);
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
    const [score, setScore] = useState(16);
    // モーダルの入力されたTextInputの値
    const [text, setText] = useState("");
    // モーダルの表示
    const [visible, setVisible] = useState(false);

    // 質問ボタンを押した後
    const handleQuestionOptionClick = (questionOption, i) => {
        // 質問ボタンを押したら、対応するanswerTextが吹き出しに表示する
        var setAnswerText = questionOption.answerText;
        // テキスト読み上げ文
        var setReadText = questionOption.readText;
        showAnswerText(setAnswerText);

        // expo speech
        Speech.speak(setReadText,
            {
                "language": "ja",
                // 低い声
                "pitch": -1,
                // 高い声
                // "pitch": 1,
            }
        );

        // 質問ボタンの切り替え
        let number = i;

        if(i === 0) {
            setCountQuestionOne(countQuestionOne + 1);
            var countQuestionButton = countQuestionOne;
            var A_temp = aButton + 1;
        }


        else if(i === 1) {
            setCountQuestionTwo(countQuestionTwo + 1);
            var countQuestionButton = countQuestionTwo;
            var B_temp = bButton + 1;
        }

        else if(i === 2) {
            setCountQuestionThree(countQuestionThree + 1);
            var countQuestionButton = countQuestionThree;
            var C_temp = cButton + 1;
        }
        else if(i === 3) {
            setCountQuestionFour(countQuestionFour + 1);
            var countQuestionButton = countQuestionFour;
            var D_temp = dButton + 1;
        }

        if(countQuestionButton == 1) {
            var questionOptionsStock = questions[currentQuestion].questionOptionsSecond[number];
            var questionTextStock = questions[currentQuestion].questionOptionsSecond[number].questionText;
        }
        else if(countQuestionButton == 2) {
            var questionOptionsStock = questions[currentQuestion].questionOptionsThird[number];
            var questionTextStock = questions[currentQuestion].questionOptionsThird[number].questionText;
        }
        else if(countQuestionButton == 3) {
            var questionOptionsStock = questions[currentQuestion].questionOptionsFourth[number];
            var questionTextStock = questions[currentQuestion].questionOptionsFourth[number].questionText;
        }
        else {
            var questionOptionsStock = questions[currentQuestion].questionOptionsFifth[number];
            var questionTextStock = questions[currentQuestion].questionOptionsFifth[number].questionText;
        }

        if (questionTextStock == '') {
            setShowQuestions(showQuestions);
        } else {
            showQuestions[currentQuestion].questionOptions.splice(number, 1, questionOptionsStock);
            setShowQuestions(showQuestions);
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
                if (score > 1) {
                    // 質問ボタンを押した数だけスコアが計算される（＝初期スコア5から、質問ボタンを押した数）
                    var currectScore = score - 1;
                    // 最新のスコアを設定する
                    setScore(currectScore);
                }
                if (questionTextStock == '') {
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
    const showScoreScreen = (value) => {
        // Textinputで入力されtextに代入された値をinputTextに代入
        const inputText = value.answer_text;
        const human = questions[currentQuestion].human;
        const human2 = questions[currentQuestion].human2;

        // 入力した値が答えと一致している場合
        if (inputText == human) {
            var correctness = '正解';
        }
        else if (inputText == human2) {
            var correctness = '正解';
        }
        // 入力した値が答えと不一致の場合
        else {
            var correctness = '不正解';
        }
        // answer.jsに遷移、「正解・不正解」「スコア」をanswer.jsに送信
        navigation.navigate('Answer', { correctness: correctness, score: score, number: number});

        // モーダルの非表示
        toggleOverlay();
        
        Speech.speak(questions[currentQuestion].readDialogue,
            {
                "language": "ja",
                // 低い声
                "pitch": -1,
                // 高い声
                // "pitch": 1,
            }
        );
    }

    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({mode: 'onChange'});

    return (
        <ThemeProvider theme={theme}>
            <View style={styles.container}>
                <ImageBackground 
                    source={require('../assets/img/background.png')} resizeMode="cover"
                    style={{ height: "100%", }}
                >
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
                        style={styles.header}
                    />
                    <View style={styles.commentContainer}>
                        <Image
                            source={require('../assets/img/kuromaku.jpg')}
                            style={styles.image}
                        />
                        <Balloon
                            borderColor="#CCC"
                            backgroundColor="#FFF"
                            borderWidth={1}
                            borderRadius={10}
                            triangleDirection='top'
                        >
                            <Animated.Text 
                                style={{
                                    height: 60,
                                    fontSize: 13,
                                }}
                            >
                                {answerText}
                            </Animated.Text>
                        </Balloon>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Text h4>スコア：{score}点</Text>
                        <View style={styles.buttons}>
                            {showQuestions[currentQuestion].questionOptions.map((questionOption, i) => (
                                <Button 
                                    key={i} 
                                    title={questionOption.questionText}
                                    onPress={() => handleQuestionOptionClick(questionOption, i)}
                                />
                            ))}
                        </View>
                        <Button
                            title="わかった！"
                            onPress={toggleOverlay}
                        />
                    </View>
                </ImageBackground>
            </View>
            <Overlay isVisible={visible}>
                {/* 回答フォーム */}
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View>
                            <View style={styles.form_birth_input_wrapper}>
                                <View style={styles.birthday_input_box}>
                                    <TextInput
                                        style={{ height: 55, width: 160}}
                                        placeholder="ここに入力するのじゃ！"
                                        placeholderTextColor="#4A4444"
                                        onChangeText={(value) => onChange(value)}
                                        onBlur={onBlur}
                                        value={value}
                                    />
                                </View>
                            </View>
                        </View>
                    )}
                    name="answer_text"
                    defaultValue=""
                />
                <View
                    style={{ flexDirection: 'row', justifyContent: 'space-around' }}
                >
                    <Button
                        title="閉じる" onPress={toggleOverlay}
                    />
                    <Button
                        title="回答"
                        disabled={!isValid}
                        style={{ opacity: isValid ? 1 : 0.4 }}
                        onPress={handleSubmit(showScoreScreen)}
                    />
                </View>
            </Overlay>
        </ThemeProvider>
    )
}
