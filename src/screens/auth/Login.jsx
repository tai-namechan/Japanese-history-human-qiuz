import React, { useState } from "react";
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
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import Loading from "../../components/loading/Loading";

export default function Login(props) {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState();

  // firebaseログイン
  const handleLogin = async () => {
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate("問題");
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const navigateSignUp = () => {
    navigation.navigate("新規登録");
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
                  ログイン情報を入力してください
                </Text>
              </View>
              <View style={styles.input_container}>
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
                  text={"ログイン"}
                  onPress={handleLogin}
                  disabled={!email || !password}
                />
                <TouchableOpacity
                  style={styles.signup_button}
                  onPress={navigateSignUp}
                >
                  <Text style={styles.underline}>新規登録する</Text>
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
    height: "40%",
  },
  title_text: {
    fontSize: 22,
  },
  input_container: {
    justifyContent: "space-around",
    alignItems: "center",
    height: "20%",
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
