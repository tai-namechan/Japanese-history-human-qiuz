import React, { useState, useEffect, useRef } from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  ScrollView,
  Modal,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import ButtonBrownBorderSmall from "../components/button/ButtonBrownBorderSmall";
import ButtonBrown from "../components/button/ButtonBrown";

const { width, height } = Dimensions.get("window");

export default function Answer(props) {
  const navigation = useNavigation();
  const { isCorrect, score, image, name, period, explanation } =
    props.route.params;
  // console.log("答え画面：", image);

  const [correctness, setCorrectness] = useState();
  const [gottenScore, setGottenScore] = useState();
  const [modalVisible, setModalVisible] = useState(true);

  // console.log(correctness)
  // console.log(correctness,gottenScore)

  useEffect(() => {
    isCorrectness();
  }, []);

  const isCorrectness = () => {
    // 正解なら1
    if (isCorrect == 1) {
      setCorrectness(true);
      setGottenScore(score);
      // console.log("正解",gottenScore)
    }
    // 不正解なら2
    else if (isCorrect == 2) {
      setCorrectness(false);
      setGottenScore(0);
      // console.log("不正解",gottenScore)
    }
  };

  return (
    <ImageBackground
      source={require("../../assets/img/backgrounds/BaseBackground.png")}
      resizeMode="cover"
      style={{ height: "100%" }}
    >
      <View style={styles.container}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.modal_correctness_container}>
                {correctness ? (
                  <Image
                    source={require("../../assets/img/text/correctness_text.png")}
                    style={{ height: "100%", width: 120 }}
                  />
                ) : (
                  <Image
                    source={require("../../assets/img/text/incorrectness_text.png")}
                    style={{ height: "100%", width: 150 }}
                  />
                )}
              </View>
              <View style={styles.modal_image_container}>
                {image == null ? (
                  <Image
                    source={require("../../assets/img/logo/rekishinokabe_logo.jpg")}
                    style={styles.modal_image}
                  />
                ) : (
                  <Image
                    source={{
                      uri: image,
                    }}
                    style={styles.modal_image}
                  />
                )}
                <View style={styles.balloon_self}>
                  <Text style={styles.balloon_text}>
                    わしの名前は
                    <Text style={[styles.text_bold, { fontSize: 20 }]}>
                      {name}
                    </Text>
                    じゃ
                  </Text>
                  <View style={styles.balloon_self_triangle}></View>
                </View>
              </View>
              <View style={styles.modal_detail_container}>
                <ScrollView showsVerticalScrollIndicator={true}>
                  <Text style={styles.modal_detail_text}>{explanation}</Text>
                </ScrollView>
              </View>
              <View style={styles.modal_button_wrapper}>
                <ButtonBrownBorderSmall
                  text={"閉じる"}
                  onPress={() => setModalVisible(false)}
                />
              </View>
            </View>
          </View>
        </Modal>
        <View style={styles.correctness_container}>
          {correctness ? (
            <Image
              source={require("../../assets/img/text/correctness_text.png")}
              style={{ height: "100%", width: 120 }}
            />
          ) : (
            <Image
              source={require("../../assets/img/text/incorrectness_text.png")}
              style={{ height: "100%", width: 150 }}
            />
          )}
        </View>

        <View style={styles.explanation_container}>
          <View style={styles.explanation_top_wrapper}>
            <View style={styles.explanation_top_left_wrapper}>
              {image == null ? (
                <Image
                  source={require("../../assets/img/logo/rekishinokabe_logo.jpg")}
                  style={styles.image}
                />
              ) : (
                <Image
                  source={{
                    uri: image,
                  }}
                  style={styles.image}
                />
              )}
            </View>
            <View style={styles.explanation_top_right_wrapper}>
              <Text style={[styles.text_bold, { fontSize: 20, marginLeft: 8 }]}>
                {name}
              </Text>
              <View style={styles.explanation_underline}></View>
              <Text style={[styles.text_bold, { fontSize: 16, marginLeft: 8 }]}>
                {period}
              </Text>
              <View style={styles.explanation_underline}></View>
              <Text style={{ fontSize: 16, marginLeft: 8 }}>
                江戸時代の測量家
              </Text>
              <View style={styles.explanation_underline}></View>
            </View>
          </View>
          <View style={styles.explanation_sticker}></View>
          <View style={styles.explanation_bottom_wrapper}>
            <ScrollView showsVerticalScrollIndicator={true}>
              <Text style={styles.explanation_text}>{explanation}</Text>
            </ScrollView>
          </View>
        </View>
        <View style={styles.score_container}>
          <View style={styles.score_wrapper}>
            <Text style={styles.score_text}>獲得スコア　　</Text>
            <Text style={styles.score_text_big}>
              <Text style={[styles.text_bold, { color: "red" }]}>
                {gottenScore}
              </Text>
              点❗️
            </Text>
          </View>
          <View style={styles.score_wrapper}>
            <Text style={styles.score_text}>総獲得スコア　</Text>
            <Text style={styles.score_text_big}>
              <Text style={[styles.text_bold, { color: "red" }]}>
                {gottenScore}
              </Text>
              点❗️
            </Text>
          </View>
        </View>
        <View style={styles.button_container}>
          <ButtonBrown
            text="ランキング"
            onPress={() => navigation.navigate("ランキング")}
          />
          <ButtonBrown
            text="ホーム"
            onPress={() => navigation.navigate("問題")}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  text_bold: {
    fontWeight: "bold",
  },
  container: {
    paddingHorizontal: 24,
    height: "100%",
  },
  correctness_container: {
    // backgroundColor: "pink",
    height: "12%",
    alignItems: "center",
  },
  score_container: {
    // backgroundColor: "red",
    height: "23%",
    justifyContent: "center",
  },
  score_wrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  score_text: {
    fontSize: 20,
  },
  score_text_big: {
    fontSize: 32,
  },
  explanation_container: {
    backgroundColor: "#fff",
    height: "40%",
    flexDirection: "column",
    paddingHorizontal: 24,
    paddingVertical: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 1,
  },
  explanation_top_wrapper: {
    flexDirection: "row",
    width: "100%",
    height: "49%",
    // backgroundColor: "pink",
  },
  explanation_top_left_wrapper: {
    // backgroundColor: "purple",
    width: "50%",
    height: "100%",
  },
  explanation_top_right_wrapper: {
    width: "50%",
    height: "100%",
    // backgroundColor: "yellow",
    paddingVertical: 6,
  },
  explanation_underline: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#777",
    marginVertical: 4,
  },
  explanation_bottom_wrapper: {
    height: "49%",
    backgroundColor: "#fff",
    marginTop: "2%",
    paddingVertical: 12,
    paddingHorizontal: 14,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 1,
  },
  explanation_sticker: {
    height: 12,
    width: 50,
    backgroundColor: "green",
    position: "absolute",
    top: "56%",
    left: "48%",
    zIndex: 100,
    transform: [{ rotate: "-10deg" }],
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 1,
  },
  image: {
    height: "100%",
    width: 130,
    backgroundColor: "#fff",
  },
  explanation_text: {
    fontSize: 16,
    // color: "#fff",
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
  balloon_text: {
    fontSize: 18,
    textAlign: "center",
  },
  button_container: {
    // backgroundColor: "green",
    height: "25%",
    paddingVertical: "7%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  centeredView: {
    justifyContent: "center",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    height: "70%",
    justifyContent: "space-between",
    marginHorizontal: 36,
    backgroundColor: "lightgray",
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
  modal_correctness_container: {
    // backgroundColor: "pink",
    height: 90,
    alignItems: "center",
  },
  modal_image_container: {
    // backgroundColor: "skyblue",
    // height: "35%",
    alignItems: "center",
    width: "100%",
  },
  modal_image: {
    height: 180,
    width: 180,
    backgroundColor: "#fff",
  },
  modal_detail_container: {
    backgroundColor: "#76130D",
    height: "30%",
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 14,
    marginTop: 10,
  },
  modal_detail_text: {
    fontSize: 15,
    color: "#fff",
    lineHeight: 20,
  },
  modal_button_wrapper: {
    width: "100%",
    alignItems: "center",
  },
});
