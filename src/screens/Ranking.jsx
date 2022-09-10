import React, { useEffect, useState } from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  Dimensions,
  ScrollView,
  Animated,
} from "react-native";
import firebase from "firebase/compat";
import { useAuthContext } from "../context/AuthContext";
import LoginModal from "../components/modal/LoginModal";
import {
  brown,
  beige,
  black,
  white,
  gray,
  shadow_color,
} from "../constants/color";
import Loading from "../components/loading/Loading";

const { width, height } = Dimensions.get("window");

export default function Ranking(props) {
  const [totalScoreRanking, setTotalScoreRanking] = useState([]);
  const [averageScoreRanking, setAverageScoreRanking] = useState([]);

  const [loading, setLoading] = useState(true);

  const { user } = useAuthContext();
  const { loginUserData } = useAuthContext();

  useEffect(() => {
    getRankingData();
  }, []);

  const getRankingData = async () => {
    // firestoreから総合スコア上位5つを降順で取得
    await firebase
      .firestore()
      .collection("nicknameuser")
      .orderBy("score", "desc")
      .limit(5)
      .get()
      .then((querySnapshot) => {
        const totalScoreData = querySnapshot.docs.map((doc) => doc.data());
        setTotalScoreRanking(totalScoreData);
      });

    // firestoreから平均スコア上位5つを降順で取得
    await firebase
      .firestore()
      .collection("nicknameuser")
      .orderBy("monthly_score", "desc")
      .limit(5)
      .get()
      .then((querySnapshot) => {
        const averageScoreData = querySnapshot.docs.map((doc) => doc.data());
        setAverageScoreRanking(averageScoreData);
      });

    // 総合スコアと平均スコアを取得したらloadingをfalseとする
    setLoading(false);
  };

  // 今月を取得
  function getThisMonth() {
    var now = new Date();
    const month = now.getMonth() + 1;
    return month;
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <View>
          <ImageBackground
            source={require("../../assets/img/backgrounds/BaseBackground.png")}
            resizeMode="cover"
            style={{ height: "100%" }}
          >
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.container}>
                {!user && <LoginModal />}
                <RankingTemplete
                  ranking_name={"総獲得点"}
                  first_score={totalScoreRanking[0].score}
                  second_score={totalScoreRanking[1].score}
                  third_score={totalScoreRanking[2].score}
                  fourth_score={totalScoreRanking[3].score}
                  fifth_score={totalScoreRanking[4].score}
                  login_user_score={loginUserData.score}
                  first_username={totalScoreRanking[0].username}
                  second_username={totalScoreRanking[1].username}
                  third_username={totalScoreRanking[2].username}
                  fourth_username={totalScoreRanking[3].username}
                  fifth_username={totalScoreRanking[4].username}
                  login_user_username={loginUserData.username}
                />
                <RankingTemplete
                  ranking_name={getThisMonth() + "月"}
                  first_score={averageScoreRanking[0].monthly_score}
                  second_score={averageScoreRanking[1].monthly_score}
                  third_score={averageScoreRanking[2].monthly_score}
                  fourth_score={averageScoreRanking[3].monthly_score}
                  fifth_score={averageScoreRanking[4].monthly_score}
                  login_user_score={loginUserData.monthly_score}
                  first_username={averageScoreRanking[0].username}
                  second_username={averageScoreRanking[1].username}
                  third_username={averageScoreRanking[2].username}
                  fourth_username={averageScoreRanking[3].username}
                  fifth_username={averageScoreRanking[4].username}
                  login_user_username={loginUserData.username}
                />
              </View>
            </ScrollView>
          </ImageBackground>
        </View>
      )}
    </>
  );
}

function RankingTemplete(props) {
  const { user } = useAuthContext();

  // ranking_textのアニメーション（フェードイン）
  const firstOpacity = useState(new Animated.Value(0))[0];

  const secondOpacity = useState(new Animated.Value(0))[0];

  const thirdOpacity = useState(new Animated.Value(0))[0];

  const fourthOpacity = useState(new Animated.Value(0))[0];

  const fifthOpacity = useState(new Animated.Value(0))[0];

  const sixthOpacity = useState(new Animated.Value(0))[0];

  const opacity = useState(new Animated.Value(0))[0];

  Animated.timing(opacity, {
    toValue: 1,
    duration: 500,
    useNativeDriver: true,
  }).start();

  Animated.timing(firstOpacity, {
    toValue: 1,
    duration: 750,
    useNativeDriver: true,
  }).start();

  Animated.timing(secondOpacity, {
    toValue: 1,
    duration: 1200,
    useNativeDriver: true,
  }).start();

  Animated.timing(thirdOpacity, {
    toValue: 1,
    duration: 1700,
    useNativeDriver: true,
  }).start();

  Animated.timing(fourthOpacity, {
    toValue: 1,
    duration: 2000,
    useNativeDriver: true,
  }).start();

  Animated.timing(fifthOpacity, {
    toValue: 1,
    duration: 2500,
    useNativeDriver: true,
  }).start();

  Animated.timing(sixthOpacity, {
    toValue: 1,
    duration: 3000,
    useNativeDriver: true,
  }).start();

  return (
    <View style={styles.ranking_container}>
      <Text style={styles.ranking_title}>{props.ranking_name}ランキング</Text>
      <View style={styles.ranking_wrapper}>
        <View style={styles.ranking_left_wrapper}>
          <Animated.Text
            style={[styles.ranking_text, { opacity: firstOpacity }]}
          >
            🥇１位
          </Animated.Text>
        </View>
        <View style={styles.ranking_middle_wrapper}>
          <Animated.Text
            style={[styles.ranking_text, { opacity: firstOpacity }]}
          >
            {props.first_score}点
          </Animated.Text>
        </View>
        <View style={styles.ranking_right_wrapper}>
          <Animated.Text
            style={[styles.ranking_text, { opacity: firstOpacity }]}
          >
            {props.first_username}
          </Animated.Text>
        </View>
      </View>
      <View style={styles.ranking_wrapper}>
        <View style={styles.ranking_left_wrapper}>
          <Animated.Text
            style={[styles.ranking_text, { opacity: secondOpacity }]}
          >
            🥈２位
          </Animated.Text>
        </View>
        <View style={styles.ranking_middle_wrapper}>
          <Animated.Text
            style={[styles.ranking_text, { opacity: secondOpacity }]}
          >
            {props.second_score}点
          </Animated.Text>
        </View>
        <View style={styles.ranking_right_wrapper}>
          <Animated.Text
            style={[styles.ranking_text, { opacity: secondOpacity }]}
          >
            {props.second_username}
          </Animated.Text>
        </View>
      </View>
      <View style={styles.ranking_wrapper}>
        <View style={styles.ranking_left_wrapper}>
          <Animated.Text
            style={[styles.ranking_text, { opacity: thirdOpacity }]}
          >
            🥉３位
          </Animated.Text>
        </View>
        <View style={styles.ranking_middle_wrapper}>
          <Animated.Text
            style={[styles.ranking_text, { opacity: thirdOpacity }]}
          >
            {props.third_score}点
          </Animated.Text>
        </View>
        <View style={styles.ranking_right_wrapper}>
          <Animated.Text
            style={[styles.ranking_text, { opacity: thirdOpacity }]}
          >
            {props.third_username}
          </Animated.Text>
        </View>
      </View>
      <View style={styles.ranking_wrapper}>
        <View style={styles.ranking_left_wrapper}>
          <Animated.Text
            style={[styles.ranking_text, { opacity: fourthOpacity }]}
          >
            💮４位
          </Animated.Text>
        </View>
        <View style={styles.ranking_middle_wrapper}>
          <Animated.Text
            style={[styles.ranking_text, { opacity: fourthOpacity }]}
          >
            {props.fourth_score}点
          </Animated.Text>
        </View>
        <View style={styles.ranking_right_wrapper}>
          <Animated.Text
            style={[styles.ranking_text, { opacity: fourthOpacity }]}
          >
            {props.fourth_username}
          </Animated.Text>
        </View>
      </View>
      <View style={styles.ranking_wrapper}>
        <View style={styles.ranking_left_wrapper}>
          <Animated.Text
            style={[styles.ranking_text, { opacity: fifthOpacity }]}
          >
            💮５位
          </Animated.Text>
        </View>
        <View style={styles.ranking_middle_wrapper}>
          <Animated.Text
            style={[styles.ranking_text, { opacity: fifthOpacity }]}
          >
            {props.fifth_score}点
          </Animated.Text>
        </View>
        <View style={styles.ranking_right_wrapper}>
          <Animated.Text
            style={[styles.ranking_text, { opacity: fifthOpacity }]}
          >
            {props.fifth_username}
          </Animated.Text>
        </View>
      </View>
      {user && (
        <View style={styles.ranking_wrapper}>
          <View style={styles.ranking_left_wrapper}>
            <Animated.Text
              style={[styles.ranking_text, { opacity: sixthOpacity }]}
            >
              君は...
            </Animated.Text>
          </View>
          <View style={styles.ranking_middle_wrapper}>
            <Animated.Text
              style={[styles.ranking_text, { opacity: sixthOpacity }]}
            >
              {props.login_user_score}点
            </Animated.Text>
          </View>
          <View style={styles.ranking_right_wrapper}>
            <Animated.Text
              style={[styles.ranking_text, { opacity: sixthOpacity }]}
            >
              {props.login_user_username}
            </Animated.Text>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: width * 0.1,
    height: height,
    paddingTop: height * 0.03,
  },
  ranking_container: {
    backgroundColor: white,
    height: 300,
    paddingHorizontal: 30,
    paddingVertical: 20,
    marginTop: height * 0.03,
    justifyContent: "space-around",
  },
  ranking_title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "700",
  },
  ranking_wrapper: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    paddingBottom: 3,
    borderBottomColor: brown,
    borderBottomWidth: 1.5,
  },
  ranking_left_wrapper: {
    width: "25%",
    alignItems: "center",
  },
  ranking_middle_wrapper: {
    width: "25%",
    alignItems: "center",
  },
  ranking_right_wrapper: {
    width: "50%",
    paddingHorizontal: "8%",
  },
  ranking_text: {
    fontSize: 15,
  },
});
