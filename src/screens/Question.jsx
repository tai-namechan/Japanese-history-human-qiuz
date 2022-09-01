import React, { useState, useEffect, useRef } from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  Linking,
  Platform,
  Alert,
  Image,
  Text,
  ScrollView,
  Modal,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import {
  useNavigation,
} from '@react-navigation/native';
import ButtonQuestion from "../components/questionComponents/ButtonQuestion";
import ButtonBrownSmall from "../components/button/ButtonBrownSmall";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import * as Speech from 'expo-speech';

export default function Question(props) {
  const navigation = useNavigation();
  const { questionId } = props.route.params;

  const defaultQuestionText = "（読み込み中じゃ）";
  const defaultQuestion = {
    questionOptions: [
      { questionText: defaultQuestionText },
      { questionText: defaultQuestionText },
      { questionText: defaultQuestionText },
      { questionText: defaultQuestionText },
    ],
  };

  const [question, setQuestion] = useState(defaultQuestion);
  const [countQuestionZero, setCountQuestionZero] = useState(1);
  const [countQuestionOne, setCountQuestionOne] = useState(1);
  const [countQuestionTwo, setCountQuestionTwo] = useState(1);
  const [countQuestionThree, setCountQuestionThree] = useState(1);
  const [disabled, isDisabled] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
  });
  const [answerText, setAnswerText] = useState("私は誰だと思う？");
  const [score, setScore] = useState(16);
  const [modalVisible, setModalVisible] = useState(false);
  const [gottenScore, setGottenScore] = useState();

  useEffect(() => {
    fetchQuestions();
  }, []);

  // react-hook-form
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  // API繋ぎこみ
  const fetchQuestions = async () => {
    try {
      await axios
        .get(
          `http://rekishino-kabe-api.herokuapp.com/api/question/${questionId}`
        )
        .then((res) => {
          console.log(res.data);
          setQuestion(res.data);
        });
    } catch (error) {
      console.error(error);
      Alert.alert(
        "ネットワークに問題が発生したぞ！\n アプリを再起動すると良いぞ！\n 【J・C・R・リックライダー】"
      );
    }
  };

  // 質問ボタンを押した後の処理
  const handleQuestionOptionClick = (questionOption, i) => {
    const currentAnswerText = questionOption.answerText; // 質問文に対応する回答文
    // const currentReadText = questionOption.readText; // テキスト読み上げ文

    setAnswerText(currentAnswerText); // 吹き出しにanswerTextを表示する
    onChangeScore(); // ボタンが押下されたらスコアが1点ずつ減っていく処理
    setSpeech(currentAnswerText); // answerTextの読み上げ

    switch (i) {
      case 0:
        setNextQuestionZero(i);
        break;
      case 1:
        setNextQuestionOne(i);
        break;
      case 2:
        setNextQuestionTwo(i);
        break;
      case 3:
        setNextQuestionThree(i);
        break;
    }
  };

  const setNextQuestionZero = (i) => {
    // ボタン0列目
    setCountQuestionZero(countQuestionZero + 1);
    setNextQuestionText(countQuestionZero, i);
  };

  const setNextQuestionOne = (i) => {
    // ボタン1列目
    setCountQuestionOne(countQuestionOne + 1);
    setNextQuestionText(countQuestionOne, i);
  };

  const setNextQuestionTwo = (i) => {
    // ボタン2列目
    setCountQuestionTwo(countQuestionTwo + 1);
    setNextQuestionText(countQuestionTwo, i);
  };

  const setNextQuestionThree = (i) => {
    // ボタン3列目
    setCountQuestionThree(countQuestionThree + 1);
    setNextQuestionText(countQuestionThree, i);
  };

  // 押下されたボタンが次の質問文に変わる処理
  const setNextQuestionText = (countQuestion, i) => {
    // i列の"countQuestion番目の質問

    if (countQuestion == 1) {
      // 1番目の質問文が押下された後、2番目の質問文をセットする
      question.questionOptions[i] = question.questionOptionsSecond[i];
    } else if (countQuestion == 2) {
      // 2番目の質問文が押下された後、3番目の質問文をセットする
      if (question.questionOptionsThird[i].questionText == "") {
        // question.questionOptionsThird[i]が空の場合、空の配列を代入、isDisabledをtrueにする
        question.questionOptions[i] = [];
        isDisabled({ ...disabled, [i]: true });
      } else {
        question.questionOptions[i] = question.questionOptionsThird[i];
      }
    } else if (countQuestion == 3) {
      // 3番目の質問文が押下された後、3番目の質問文をセットする
      if (question.questionOptionsFourth[i].questionText == "") {
        // question.questionOptionFourth[i]が空の場合、空の配列を代入、isDisabledをtrueにする
        question.questionOptions[i] = [];
        isDisabled({ ...disabled, [i]: true });
      } else {
        question.questionOptions[i] = question.questionOptionsFourth[i];
      }
    } else if (countQuestion == 4) {
      // 4番目（最後）の問題文が謳歌された後、空の配列を代入、isDisabledをtrueにする
      question.questionOptions[i] = [];
      isDisabled({ ...disabled, [i]: true });
    }
  };

  // ボタンが押下されたらスコアが1点ずつ減っていく処理
  const onChangeScore = () => {
    if (score > 0) {
      setScore(score - 1);
    }
  };

  const submitAnswer = (value) => { 
    const inputtedAnswer = value.inputted_answer;
    const correctAnswer = question.name; 
    // console.log(inputtedAnswer, correctAnswer)

    const isCorrect =isCorrectAnswer(inputtedAnswer, correctAnswer)

    setModalVisible(!modalVisible)
    navigation.navigate("答え", {
      isCorrect : isCorrect,
      score: score,
      image: question.image_path,
      name: question.name,
      period: question.period,
      explanation: question.explanation,
    })
  } 

  const isCorrectAnswer = (inputtedAnswer, correctAnswer) => { 
    if (inputtedAnswer == correctAnswer) {
      // 正解
      return 1
    } else {
      // 不正解
      return 2
    }
  } 

  // 音声読み上げ
  const setSpeech = (text) => {
    Speech.speak(text, {
      language: "ja",
      pitch: -1, // 低い声
      // "pitch": 1, // 高い声
    });
  };

  return (
    <ImageBackground
      source={require("../../assets/img/backgrounds/BaseBackground.png")}
      resizeMode="cover"
      style={{ height: "100%" }}
    >
      <View style={styles.container}>
        <View style={styles.image_container}>
          <Image
            source={require("../../assets/img/people/kuromaku.jpg")}
            style={styles.image}
          />
        </View>
        <View style={styles.response_container}>
          <View style={styles.balloon_self}>
            <ScrollView showsVerticalScrollIndicator={true}>
              <Text style={styles.response_text}>{answerText}</Text>
            </ScrollView>
            <View style={styles.balloon_self_triangle}></View>
          </View>
        </View>
        <View style={styles.score_container}>
          <Text>スコア：{score}点</Text>
          {/* <View style={styles.scoer_image_wrapper}>
              <Text>★</Text>
            </View>
            <View style={styles.scoer_image_wrapper}>
              <Text>★</Text>
            </View>
            <View style={styles.scoer_image_wrapper}>
              <Text>★</Text>
            </View>
            <View style={styles.scoer_image_wrapper}>
              <Text>★</Text>
            </View>
            <View style={styles.scoer_image_wrapper}>
              <Text>★</Text>
            </View> */}
        </View>
        <View style={styles.question_buttons_container}>
          {question.questionOptions.map((questionOption, i) => (
            <ButtonQuestion
              key={i}
              text={questionOption.questionText}
              onPress={() => handleQuestionOptionClick(questionOption, i)}
              disabled={disabled[i]}
              style={{ opacity: disabled[i] ? 0.4 : 1 }}
            />
          ))}
        </View>
        <View style={styles.answer_button_container}>
          <ButtonBrownSmall
            text={"わかった！"}
            onPress={() => setModalVisible(true)}
          />
        </View>
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <KeyboardAvoidingView style={{ height: "100%" }} behavior="height">
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.modal_title_wrapper}>
                <Text style={styles.modal_title}>わしが誰だか分かったか？</Text>
              </View>
              <View style={styles.modal_textinput_wrapper}>
                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      style={styles.modal_textinput}
                      placeholder="ここに入力するのじゃ！"
                      placeholderTextColor="#4A4444"
                      onChangeText={(value) => onChange(value)}
                      onBlur={onBlur}
                      value={value}
                    />
                  )}
                  name="inputted_answer"
                  defaultValue=""
                />
              </View>
              <View style={styles.modal_button_wrapper}>
                <TouchableOpacity
                  style={[styles.modal_button, styles.button_left]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text
                    style={[
                      styles.modal_button_text,
                      styles.modal_button_text_left,
                    ]}
                  >
                    閉じる
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.modal_button,
                    styles.button_right,
                    { opacity: isValid ? 1 : 0.5 },
                  ]}
                  onPress={handleSubmit(submitAnswer)}
                  disabled={!isValid}
                >
                  <Text
                    style={[
                      styles.modal_button_text,
                      styles.modal_button_text_right,
                    ]}
                  >
                    提出する
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  image_container: {
    // backgroundColor: "red",
    height: "20%",
    width: "100%",
    alignItems: "center",
  },
  image: {
    height: "100%",
    width: 160,
  },
  response_container: {
    // backgroundColor: "pink",
    height: "20%",
  },
  response_text: {
    fontSize: 16,
  },
  score_container: {
    // backgroundColor: "orange",
    height: "8%",
    flexDirection: "row",
  },
  scoer_image_wrapper: {},
  question_buttons_container: {
    // backgroundColor: "yellow",
    height: "44%",
    justifyContent: "space-around",
  },
  answer_button_container: {
    // backgroundColor: "green",
    height: "8%",
    justifyContent: "center",
    alignItems: "center",
  },
  balloon_self: {
    borderRadius: 10,
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 14,
    position: "relative",
    maxHeight: "100%",
    width: "100%",
    marginTop: 15,
  },
  balloon_self_triangle: {
    borderBottomWidth: 12,
    borderBottomColor: "#fff",
    borderRightWidth: 12,
    borderRightColor: "transparent",
    borderLeftWidth: 12,
    borderLeftColor: "transparent",
    position: "absolute",
    top: -12,
    left: "50%",
  },
  centeredView: {
    justifyContent: "center",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    height: 200,
    justifyContent: "space-between",
    marginHorizontal: 36,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 24,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modal_button_wrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  modal_title: {
    fontSize: 18,
  },
  modal_textinput_wrapper: {
    width: "100%",
  },
  modal_textinput: {
    width: "100%",
    padding: 10,
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    fontSize: 18,
  },
  modal_button: {
    width: "47%",
    backgroundColor: "#76130D",
    paddingVertical: 5,
    borderRadius: 4,
    borderColor: "#76130D",
    borderWidth: 1.5,
  },
  modal_button_text: {
    textAlign: "center",
    fontSize: 16,
  },
  button_left: {
    backgroundColor: "#fff",
  },
  button_right: {
    backgroundColor: "#76130D",
  },
  modal_button_text_left: {
    color: "#76130D",
  },
  modal_button_text_right: {
    color: "#fff",
  },
});
