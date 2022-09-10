import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { BottomTabNavigator } from "./BottomTabNavigator";

import { auth } from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { brown, beige, black, white, gray } from "../constants/color";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSoundContext } from "../context/SoundContext";
import Loading from "../components/loading/Loading";

import Question from "../screens/Question";
import Answer from "../screens/Answer";
import Tutorial from "../screens/Tutorial";
import Members from "../screens/Members";
import Login from "../screens/auth/Login";
import SignUp from "../screens/auth/Signup";

const RootStack = createStackNavigator();

export const Navigation = (props) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  const { isSoundOn, setIsSoundOn } = useSoundContext();

  // firebaseユーザーのログイン・ログアウトを監視
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoading(false);
      if (user) {
        setUser(user);
      }
    });
    return () => unsubscribe();
  }, []);

  // 音声のOn/Offの切り替え
  const toggleSoundOn = () => setIsSoundOn((previousState) => !previousState);

  if (loading) {
    return (
      <Loading />
    );
  } else {
    return (
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen
            name="歴史の壁〜正解を衝け〜"
            component={BottomTabNavigator}
            options={{ headerShown: false }}
          />
          <RootStack.Screen
            name="歴史の壁"
            component={Question}
            options={() => ({
              headerStyle: {
                backgroundColor: brown,
              },
              headerTintColor: white,
              headerBackTitleVisible: false,
              headerTitleStyle: {
                color: white,
              },
              headerRight: () => (
                <TouchableOpacity
                  onPress={toggleSoundOn}
                  style={{ marginRight: 10 }}
                >
                  {isSoundOn ? (
                    <MaterialCommunityIcons
                      name="music-note"
                      size={30}
                      color={white}
                    />
                  ) : (
                    <MaterialCommunityIcons
                      name="music-note-off"
                      size={30}
                      color={white}
                    />
                  )}
                </TouchableOpacity>
              ),
            })}
          />
          <RootStack.Screen
            name="答え"
            component={Answer}
            options={() => ({
              headerStyle: {
                backgroundColor: brown,
              },
              headerTintColor: white,
              headerBackTitleVisible: false,
              headerTitleStyle: {
                color: white,
              },
            })}
          />
          <RootStack.Screen
            name="チュートリアル"
            component={Tutorial}
            options={{
              headerShown: false,
            }}
          />
          <RootStack.Screen
            name="開発者"
            component={Members}
            options={() => ({
              headerStyle: {
                backgroundColor: brown,
              },
              headerTintColor: white,
              headerBackTitleVisible: false,
              headerTitleStyle: {
                color: white,
              },
            })}
          />
          <RootStack.Screen
            name="ログイン"
            component={Login}
            options={() => ({
              headerStyle: {
                backgroundColor: brown,
              },
              headerTintColor: white,
              headerBackTitleVisible: false,
              headerTitleStyle: {
                color: white,
              },
            })}
          />
          <RootStack.Screen
            name="新規登録"
            component={SignUp}
            options={() => ({
              headerStyle: {
                backgroundColor: brown,
              },
              headerTintColor: white,
              headerBackTitleVisible: false,
              headerTitleStyle: {
                color: white,
              },
            })}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    );
  }
};
