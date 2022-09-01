import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { BottomTabNavigator } from "./BottomTabNavigator";
import Question from "../screens/Question";
import Answer from "../screens/Answer";
import Tutorial from "../screens/Tutorial"
import Members from "../screens/Members";

const RootStack = createStackNavigator();

export const Navigation = (props) => {
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
              backgroundColor: "#76130D",
            },
            headerTintColor: "#fff",
            headerBackTitleVisible: false,
            headerTitleStyle: {
              color: "#FFFFFF",
            },
          })}
        />
        <RootStack.Screen
          name="答え"
          component={Answer}
          options={() => ({
            headerStyle: {
              backgroundColor: "#76130D",
            },
            headerTintColor: "#fff",
            headerBackTitleVisible: false,
            headerTitleStyle: {
              color: "#FFFFFF",
            },
          })}
        />
        <RootStack.Screen
          name="チュートリアル"
          component={Tutorial}
          options={{
            headerShown: false
          }}
        />
        <RootStack.Screen
          name="開発者"
          component={Members}
          options={() => ({
            headerStyle: {
              backgroundColor: "#76130D",
            },
            headerTintColor: "#fff",
            headerBackTitleVisible: false,
            headerTitleStyle: {
              color: "#FFFFFF",
            },
          })}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
