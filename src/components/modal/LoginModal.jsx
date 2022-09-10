import React from "react";
import { View } from "react-native";
import { StyleSheet, Text } from "react-native";
import ButtonBrownBorderSmall from "../button/ButtonBrownBorderSmall";
import { useNavigation } from "@react-navigation/native";
import { useAuthContext } from "../../context/AuthContext";
import { brown, beige, black, white, gray } from '../../constants/color';

const LoginModal = () => {
  const navigation = useNavigation();

  const { user } = useAuthContext();
  const { loginUserData } = useAuthContext();
  console.log(loginUserData);

  const navigateLogin = () => {
    navigation.navigate("ログイン");
  };

  const navigateRanking = () => {
    navigation.navigate("ランキング");
  };

  return (
    <View style={styles.container}>
      {user ? (
        <>
          <View>
            <Text style={styles.text_bold}>こんにちは、{loginUserData.username}さん！</Text>
          </View>
          <View>
            <Text>
              いつもご利用ありがとうございます！{"\n"}
              獲得点数を集めてモチベーションに繋げましょう。
            </Text>
          </View>
          <ButtonBrownBorderSmall text="ランキングを見る" onPress={navigateRanking} />
        </>
      ) : (
        <>
          <View>
            <Text style={styles.text_bold}>ログインがされていません！</Text>
          </View>
          <View>
            <Text>
              ログインをすると、ランキングに参加できます！{"\n"}
              獲得点数を集めてモチベーションに繋げましょう。
            </Text>
          </View>
          <ButtonBrownBorderSmall text="ログインする" onPress={navigateLogin} />
        </>
      )}
    </View>
  );
};

export default LoginModal;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    width: "100%",
    height: 200,
    backgroundColor: white,
    justifyContent: "space-around",
    alignItems: "center",
  },
  text_bold: {
    fontWeight: "bold",
  },
});
