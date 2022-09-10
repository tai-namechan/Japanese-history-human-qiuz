import React, { useState } from "react";
import { View, ImageBackground, StyleSheet, Alert } from "react-native";
import MenuList from "../components/menu/MenuList";
import { auth } from "../firebase/firebase";
import { signOut } from "firebase/auth";
import { useAuthContext } from "../context/AuthContext";
import Loading from "../components/loading/Loading";

export default function Menu(props) {
  const { user } = useAuthContext();

  const menu_list_left_side_type = {
    0: "chevron-right",
    1: "switch",
    2: "none",
  };

  const [loading, setLoading] = useState();

  // ログアウト処理
  const handleLogout = async () => {
    try {
      setLoading(true);
      await signOut(auth);
      props.navigation.navigate("問題");
      setLoading(false);
      console.log("logout");
    } catch (error) {
      console.log(error.message);
    }
  };

  // ログアウトのアラートを表示
  const showLogoutAlert = () =>
    Alert.alert(
      "ログアウトしますか？",
      "ログアウトすると、獲得点数が記録されません。",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => handleLogout() },
      ]
    );

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
            <MenuList
              text={"使い方"}
              icon={"gesture-double-tap"}
              type={menu_list_left_side_type[0]}
              onPress={() => props.navigation.navigate("チュートリアル")}
              disabled={false}
            />
            <MenuList
              text={"音声の設定"}
              icon={"music-note-off"}
              type={menu_list_left_side_type[1]}
              disabled={true}
            />
            <MenuList
              text={"開発者"}
              icon={"robot"}
              type={menu_list_left_side_type[0]}
              onPress={() => props.navigation.navigate("開発者")}
              disabled={false}
            />
            {user && (
              <MenuList
                text={"ログアウト"}
                icon={"logout"}
                type={menu_list_left_side_type[2]}
                onPress={showLogoutAlert}
                disabled={false}
              />
            )}
          </ImageBackground>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  //   container: {
  //   },
});
