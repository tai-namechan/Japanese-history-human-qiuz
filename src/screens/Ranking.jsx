import React from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");

export default function Ranking(props) {
  return (
    <View>
      <ImageBackground
        source={require("../../assets/img/backgrounds/BaseBackground.png")}
        resizeMode="cover"
        style={{ height: "100%" }}
      >
        <View style={styles.container}>
          <RankingTemplete
            ranking_name={"総獲得"}
            first_score={"10"}
            second_score={"9"}
            third_score={"8"}
            fourth_score={"7"}
            fifth_score={"6"}
            login_user_score={"5"}
            first_username={"ああ"}
            second_username={"いい"}
            third_username={"うう"}
            fourth_username={"ええ"}
            fifth_username={"おお"}
            login_user_username={"かか"}
          />
          <RankingTemplete
            ranking_name={"月次"}
            first_score={"10"}
            second_score={"9"}
            third_score={"8"}
            fourth_score={"7"}
            fifth_score={"6"}
            login_user_score={"5"}
            first_username={"ああ"}
            second_username={"いい"}
            third_username={"うう"}
            fourth_username={"ええ"}
            fifth_username={"おお"}
            login_user_username={"かか"}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

function RankingTemplete(props) {
  return (
    <View style={styles.ranking_container}>
      <Text style={styles.ranking_title}>{props.ranking_name}ランキング</Text>
      <View style={styles.ranking_wrapper}>
        <View style={styles.ranking_left_wrapper}>
          <Text style={styles.ranking_text}>🥇１位</Text>
        </View>
        <View style={styles.ranking_middle_wrapper}>
          <Text style={styles.ranking_text}>{props.first_score}点</Text>
        </View>
        <View style={styles.ranking_right_wrapper}>
          <Text style={styles.ranking_text}>{props.first_username}</Text>
        </View>
      </View>
      <View style={styles.ranking_wrapper}>
        <View style={styles.ranking_left_wrapper}>
          <Text style={styles.ranking_text}>🥈２位</Text>
        </View>
        <View style={styles.ranking_middle_wrapper}>
          <Text style={styles.ranking_text}>{props.second_score}点</Text>
        </View>
        <View style={styles.ranking_right_wrapper}>
          <Text style={styles.ranking_text}>{props.second_username}</Text>
        </View>
      </View>
      <View style={styles.ranking_wrapper}>
        <View style={styles.ranking_left_wrapper}>
          <Text style={styles.ranking_text}>🥉３位</Text>
        </View>
        <View style={styles.ranking_middle_wrapper}>
          <Text style={styles.ranking_text}>{props.third_score}点</Text>
        </View>
        <View style={styles.ranking_right_wrapper}>
          <Text style={styles.ranking_text}>{props.third_username}</Text>
        </View>
      </View>
      <View style={styles.ranking_wrapper}>
        <View style={styles.ranking_left_wrapper}>
          <Text style={styles.ranking_text}>💮４位</Text>
        </View>
        <View style={styles.ranking_middle_wrapper}>
          <Text style={styles.ranking_text}>{props.fourth_score}点</Text>
        </View>
        <View style={styles.ranking_right_wrapper}>
          <Text style={styles.ranking_text}>{props.fourth_username}</Text>
        </View>
      </View>
      <View style={styles.ranking_wrapper}>
        <View style={styles.ranking_left_wrapper}>
          <Text style={styles.ranking_text}>💮５位</Text>
        </View>
        <View style={styles.ranking_middle_wrapper}>
          <Text style={styles.ranking_text}>{props.fifth_score}点</Text>
        </View>
        <View style={styles.ranking_right_wrapper}>
          <Text style={styles.ranking_text}>{props.fifth_username}</Text>
        </View>
      </View>
      <View style={styles.ranking_wrapper}>
        <View style={styles.ranking_left_wrapper}>
          <Text style={styles.ranking_text}>君は...</Text>
        </View>
        <View style={styles.ranking_middle_wrapper}>
          <Text style={styles.ranking_text}>{props.login_user_score}点</Text>
        </View>
        <View style={styles.ranking_right_wrapper}>
          <Text style={styles.ranking_text}>{props.login_user_username}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: width * 0.1,
    height: "100%",
    paddingTop: height * 0.03,
  },
  ranking_container: {
    backgroundColor: "#fff",
    height: "46%",
    paddingHorizontal: 30,
    paddingVertical: 20,
    marginBottom: height * 0.03,
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
    borderBottomColor: "#76130D",
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
  }
});
