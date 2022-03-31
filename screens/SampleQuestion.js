import React, { useState, useEffect } from 'react';
import { View, ImageBackground, Animated, StyleSheet, TextInput, Dimensions, ScrollView } from 'react-native';
import { Button, Text, Image, Overlay, ThemeProvider, Header } from 'react-native-elements';
import * as Speech from 'expo-speech';
import questions from './question';
import { useForm, Controller } from "react-hook-form";
import axios from 'axios';

const {width, height} = Dimensions.get('window');

const defaultQuestionText = '（読み込み中じゃ）'

const defaultQuestion = {
    questionOptions: [
        {
            questionText: defaultQuestionText,
        },
        {
            questionText: defaultQuestionText,
        },
        {
            questionText: defaultQuestionText,
        },
        {
            questionText: defaultQuestionText,
        },
    ],
}

export default function SampleQuestion(props) {
    let id = props.navigation.state.params.id;
    let idCount = props.navigation.state.params.idCount;
    const { navigation } = props;
    const number = id[idCount];

    const [question, setQuestion] = useState(defaultQuestion);
    const [countQuestionZero, setCountQuestionZero] = useState(1);
    const [countQuestionOne, setCountQuestionOne] = useState(1);
    const [countQuestionTwo, setCountQuestionTwo] = useState(1);
    const [countQuestionThree, setCountQuestionThree] = useState(1);

    const [validButtonZero, isValidButtonZero] = useState(false);
    const [validButtonOne, isValidButtonOne] = useState(false);
    const [validButtonFour, isValidButtonFour] = useState(false);
    const [validButtonThree, isValidButtonThree] = useState(false);
    console.log(validButtonThree, validButtonFour)

    const [currentQuestion, setCurrentQuestion] = useState(0); // 質問した数の初期値
    const [answerText, showAnswerText] = useState(""); // answerTextの設定
    const [score, setScore] = useState(16); // スコアの初期値
    const [visible, setVisible] = useState(false);  // モーダルの表示
    
    useEffect(() => {
        const questionRandom = id[idCount];
        const period = props.navigation.state.params.period; // 選択された時代をSelectEraから受け取る
        setCurrentQuestion(questionRandom);
        fetchQuestions()
    },[]);

    // 質問ボタンを押した後の処理
    const handleQuestionOptionClick = (questionOption, i) => {
        const currentAnswerText = questionOption.answerText; // 吹き出しに表示するanswerText
        // const currentReadText = questionOption.readText; // テキスト読み上げ文

        showAnswerText(currentAnswerText); // 吹き出しにanswerTextを表示する
        setNewQuestion(i) // ボタンを押したらquestionTextが切り替わる
        onChangeScore() // ボタンを押したらスコアが減る
        setSpeech(currentAnswerText) // answerTextの読み上げ
    }

    const setNewQuestion = (i) => { 
        switch (i) {
            case 0:
                setCountQuestionZero(countQuestionZero + 1)
                break;
            case 1:
                setCountQuestionOne(countQuestionOne + 1)
                break;
            case 2:
                setCountQuestionTwo(countQuestionTwo + 1)
                break;
            case 3:
                setCountQuestionThree(countQuestionThree + 1)
                break;
        }

        if (i == 0) {
            countQuestionNumber = countQuestionZero
            console.log("countQuestionNumber："+countQuestionNumber)
        } else if (i == 1) {
            countQuestionNumber = countQuestionOne
        } else if (i == 2) {
            countQuestionNumber = countQuestionTwo
        } else if (i == 3) {
            countQuestionNumber = countQuestionThree
        }

        switch (countQuestionNumber) {
            case 1:
                question.questionOptions[i] = question.questionOptionsSecond[i]
                break;
            case 2:
                var empty = isEmpty(question.questionOptionsThird[i])
                console.log("2:"+empty)
                // if (empty == true) {
                //     isValidButtonThree(true)
                // } else {
                //     question.questionOptions[i] = question.questionOptionsThird[i]
                // }
                break;
            case 3:
                var empty = isEmpty(i, question.questionOptionsThird[i])
                if (empty == true) {
                    isValidButtonFour(true)
                } else {
                    question.questionOptions[i] = question.questionOptionsFourth[i]
                }
                break;
            case 4:
                question.questionOptions[i] = []
                break;
        }
    } 

    function isEmpty (i, questionOptionsSecond, questionOptionsThird, questionOptionsFourth) {
        console.log("isEmpty")
        if (questionOptionsSecond) {
            return !Object.keys(question.questionOptionsSecond[i]).length
        } else if (questionOptionsThird) {
            console.log(questionOptionsThird)
            return !Object.keys(question.questionOptionsThird[i]).length
        } else if (questionOptionsFourth) {
            return !Object.keys(question.questionOptionsFourth[i]).length
        } 
    }

    // console.log(isEmpty({}));        // -> true
    // console.log(isEmpty({"a":"a"}));  // -> false

    const onChangeScore = () => { 
        if (score > 0) {
            setScore(score - 1)
        }
    } 

    const setSpeech = (text) => { 
        Speech.speak(text,
            {
                "language": "ja",
                "pitch": -1, // 低い声
                // "pitch": 1, // 高い声
            }
        );
    } 

    const toggleOverlay = () => {
        setVisible(!visible);
    }

    // 正誤判定とスコア画面への値送信
    const showScoreScreen = (value) => {
        const inputAnswerName = value.input_answer_name; // TextInputで入力された人物名
        const correctName = question.name; // 正解の人物名

        if (inputAnswerName == correctName) {
            var correctness = '正解';
        }
        // else if (inputAnswerName == human2) {
        //     var correctness = '正解';
        // }
        else {
            var correctness = '不正解';
        }

        //1人人物解くとidCountが一つ増える（同じ問題が出ないようにする）
        idCount = idCount + 1;

        navigation.navigate('Answer', { correctness: correctness, score: score, number: number, id: id, idCount: idCount});

        // モーダルの非表示
        toggleOverlay();
    }

    // 回答フォーム(react-hook-form)
    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({mode: 'onChange'});

    // API
    const fetchQuestions = async () => {
        try {
          await axios.get(`http://rekishino-kabe-api.herokuapp.com/api/question/${number}`)
          .then((res)=>{
            // console.log(res.data)
            setQuestion(res.data)
          })
        } catch (error) {
          console.error(error)
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <View style={styles.container}>
                <ImageBackground 
                    source={require('../assets/img/background.png')} resizeMode="cover"
                    style={{ height: "100%", }}
                >
                    <Header
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

                        <View style={styles.balloonSelf}>
                            <ScrollView>
                                <Animated.Text 
                                    style={{
                                        height: 80,
                                        fontSize: 13,
                                    }}
                                >
                                    {answerText}
                                </Animated.Text>
                            </ScrollView>
                            <View style={styles.balloonSelfTriangle}></View>
                        </View>
                        
                    </View>
                    <View style={styles.buttonContainer}>
                        <Text h4>スコア：{score}点</Text>
                        <View style={styles.buttons}>
                            {question.questionOptions.map((questionOption, i) => (
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
                    name="input_answer_name"
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
    balloonSelf: {
        borderRadius: 10,
        backgroundColor: '#fff',
        padding: 10,
        position: 'relative',
        height: '25%',
        width: 300,
        marginTop: 15,
    },
    balloonSelfTriangle: {
        borderBottomWidth: 12,
        borderBottomColor: '#fff',
        borderRightWidth: 12,
        borderRightColor: 'transparent',
        borderLeftWidth: 12,
        borderLeftColor: 'transparent',
        marginLeft: -10,
        position: 'absolute',
        top: -12,
        left: '50%',

    }
});