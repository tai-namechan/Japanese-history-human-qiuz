import React, { useState, useEffect, useRef } from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import InputText from "../../components/input/InputText";
import ButtonBrown from "../../components/button/ButtonBrown";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import firebase from "firebase/compat";
import Loading from "../../components/loading/Loading";

export default function SignUp(props) {
  const navigation = useNavigation();

  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState();

  const score = 0;
  const times = 0;
  const average = 0;
  const monthly_score = 0;

  const navigateSignUp = () => {
    navigation.navigate("ログイン");
  };

  const handleRegister = async () => {
    try {
      setLoading(true);
      await createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {
          // firestoreにユーザー情報を登録
          firebase
            .firestore()
            .collection("nicknameuser")
            .doc(user.user.uid)
            .set({
              username: username,
              score: 0,
              times: 0,
              average: 0,
              monthly_score: 0
            })
            .then(() => {
              console.log("Add Firestore Success");
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .then(() => {
          navigation.navigate("問題");
          setLoading(false);
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <View>
          <ImageBackground
            source={require("../../../assets/img/backgrounds/BaseBackground.png")}
            resizeMode="cover"
            style={{ height: "100%", paddingHorizontal: 24 }}
          >
            <KeyboardAvoidingView style={{ flex: 1 }} behavior="position">
              <View style={styles.title_container}>
                <Text style={styles.title_text}>
                  登録情報を入力してください
                </Text>
              </View>
              <View style={styles.input_container}>
                <InputText
                  label={"ニックネーム"}
                  placeholder={"ぱむとり"}
                  onChangeText={setUserName}
                  value={username}
                />
                <InputText
                  label={"メールアドレス"}
                  placeholder={"aaa@aaa.com"}
                  onChangeText={setEmail}
                  value={email}
                />
                <InputText
                  label={"パスワード"}
                  placeholder={"aaa123"}
                  onChangeText={setPassword}
                  value={password}
                />
              </View>
              <View style={styles.button_container}>
                <ButtonBrown
                  text={"登録"}
                  onPress={handleRegister}
                  disabled={!email || !password}
                />
                <TouchableOpacity
                  style={styles.signup_button}
                  onPress={navigateSignUp}
                >
                  <Text style={styles.underline}>登録済みの方はこちら</Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </ImageBackground>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  title_container: {
    justifyContent: "space-around",
    alignItems: "center",
    height: "30%",
  },
  title_text: {
    fontSize: 22,
  },
  input_container: {
    justifyContent: "space-around",
    alignItems: "center",
    height: "30%",
    width: "100%",
  },
  button_container: {
    justifyContent: "center",
    alignItems: "center",
    height: "40%",
  },
  signup_button: {
    marginTop: 24,
  },
  underline: { textDecorationLine: "underline" },
});
