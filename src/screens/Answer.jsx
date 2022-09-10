import React, { useState, useEffect } from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  ScrollView,
  Modal,
  Animated
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import ButtonBrownBorderSmall from "../components/button/ButtonBrownBorderSmall";
import ButtonBrown from "../components/button/ButtonBrown";
import {
  brown,
  beige,
  black,
  white,
  gray,
  shadow_color,
} from "../constants/color";
import { useAuthContext } from "../context/AuthContext";
import firebase from "firebase/compat";

const { width, height } = Dimensions.get("window");

export default function Answer(props) {
  const navigation = useNavigation();
  const { isCorrect, score, image, name, period, explanation } =
    props.route.params;

  const { user } = useAuthContext();
  const { loginUserData } = useAuthContext();
  const { setUpdating } = useAuthContext();

  const [correctness, setCorrectness] = useState();
  const [gottenScore, setGottenScore] = useState();
  const [modalVisible, setModalVisible] = useState(true);

  useEffect(() => {
    isCorrectness();
  }, []);

  const isCorrectness = () => {
    const updated_score = loginUserData.score + score;
    const updated_times = loginUserData.times + 1;
    // TODO:平均スコア
    const updated_average = loginUserData.average;
    const updated_monthly_score = loginUserData.monthly_score + 11;

    // 正解なら1
    if (isCorrect == 1) {
      setCorrectness(true);
      setGottenScore(score);
      // console.log("正解",gottenScore)
      updateScore(updated_score, updated_times, updated_average, updated_monthly_score);
    }
    // 不正解なら2
    else if (isCorrect == 2) {
      setCorrectness(false);
      setGottenScore(0);
      // console.log("不正解",gottenScore)
      updateTimes(updated_times);
    }
  };

  const updateScore = (updated_score, updated_times, updated_average, updated_monthly_score) => {
    // 正解かつログインユーザーの場合、firestoreのscore、average、timesを更新
    if (user) {
      // firebaseのデータ更新（スコアの更新）
      firebase
        .firestore()
        .collection("nicknameuser")
        .doc(user.uid)
        .update({
          score: updated_score,
          times: updated_times,
          average: updated_average,
          monthly_score: updated_monthly_score,
        })
        .then(() => {
          // AuthContext.jsのuseEffectを更新するトリガー
          setUpdating(true);
          // console.log('Add Firestore Success');
        })
        .catch((error) => {
          // console.log(error);
        });
    }
  };

  const updateTimes = (updated_times) => {
    // 不正解かつログインユーザーの場合、firestoreのtimesを更新
    if (user) {
      // firebaseのデータ更新（スコアの更新）
      firebase
        .firestore()
        .collection("nicknameuser")
        .doc(user.uid)
        .update({
          times: updated_times,
        })
        .then(() => {
          // AuthContext.jsのuseEffectを更新するトリガー
          setUpdating(true);
        })
        .catch((error) => {
          // console.log(error);
        });
    }
  };

  // 画像フェードインアウト
  const opacity = useState(new Animated.Value(0))[0]

  // 遷移したら自動的に黒幕が姿あらわす
  Animated.timing(opacity, {
    toValue: 1,
    duration: 3000,
    useNativeDriver: true
  }).start()

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
                <Image
                  //黒幕
                  source={require("../../assets/img/people/kuromaku.jpg")}
                  style={styles.modal_image}
                />
                {image == null ? (
                  <Animated.Image
                    source={require("../../assets/img/logo/rekishinokabe_logo.jpg")}
                    style={[styles.modal_image, {opacity, position: "absolute"}]}
                  />
                ) : (
                  <Animated.Image
                    source={{
                      uri: image,
                    }}
                    style={[styles.modal_image, {opacity, position: "absolute"}]}
                  />
                )}
                <View style={styles.balloon_self}>
                  <Animated.Text style={[styles.balloon_text, {opacity}]}>
                    わしの名前は
                    <Text style={[styles.text_bold, { fontSize: 20 }]}>
                      {name}
                    </Text>
                    じゃ
                  </Animated.Text>
                  <View style={styles.balloon_self_triangle}></View>
                </View>
              </View>
              <View style={styles.modal_detail_container}>
                <ScrollView showsVerticalScrollIndicator={true}>
                  <Animated.Text style={[styles.modal_detail_text, {opacity}]}>{explanation}</Animated.Text>
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
                {loginUserData.score}
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
    backgroundColor: white,
    height: "40%",
    flexDirection: "column",
    paddingHorizontal: 24,
    paddingVertical: 18,
    shadowColor: shadow_color,
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
    backgroundColor: white,
    marginTop: "2%",
    paddingVertical: 12,
    paddingHorizontal: 14,
    shadowColor: shadow_color,
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
    shadowColor: shadow_color,
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
    backgroundColor: white,
  },
  explanation_text: {
    fontSize: 16,
    // color: white,
  },
  balloon_self: {
    borderRadius: 10,
    backgroundColor: white,
    paddingVertical: 10,
    paddingHorizontal: 14,
    position: "relative",
    maxHeight: "100%",
    width: "100%",
    marginTop: 15,
  },
  balloon_self_triangle: {
    borderBottomWidth: 12,
    borderBottomColor: white,
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
    shadowColor: shadow_color,
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
    backgroundColor: white,
  },
  modal_detail_container: {
    backgroundColor: brown,
    height: "30%",
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 14,
    marginTop: 10,
  },
  modal_detail_text: {
    fontSize: 15,
    color: white,
    lineHeight: 20,
  },
  modal_button_wrapper: {
    width: "100%",
    alignItems: "center",
  },
});
