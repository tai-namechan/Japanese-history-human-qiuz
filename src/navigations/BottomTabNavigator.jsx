import React from "react";
import {
  createBottomTabNavigator,
  NavigationContainer,
} from "@react-navigation/bottom-tabs";
import BottomTabs from "../components/bottomTabs/BottomTabs";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SelectQuestions from "../screens/SelectEra";
import Ranking from "../screens/Ranking";
import Menu from "../screens/Menu";

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
    initialRouteName="SelectQuestions"
    screenOptions={{
        tabBarActiveTintColor: "#76130D",
        tabBarInactiveTintColor: "#D4AB72",
      }}
    >
      <Tab.Screen
        name="問題"
        component={SelectQuestions}
        options={() => ({
          headerStyle: {
            backgroundColor: "#76130D",
          },
          headerTintColor: "#fff",
          headerBackTitleVisible: false,
          headerTitleStyle: {
            color: "#FFFFFF",
          },
          tabBarIcon: ({ focused }) => (
            <Icon
                name='pencil'
                color={focused ? "#76130D" : "#D4AB72"}
                size={focused ? 32 : 26}
            />
          ),
        })}
      />
      <Tab.Screen
        name="ランキング"
        component={Ranking}
        options={() => ({
          headerStyle: {
            backgroundColor: "#76130D",
          },
          headerTintColor: "#fff",
          headerBackTitleVisible: false,
          headerTitleStyle: {
            color: "#FFFFFF",
          },
          tabBarIcon: ({ focused }) => (
            <Icon
                name='star'
                color={focused ? "#76130D" : "#D4AB72"}
                size={focused ? 32 : 26}
            />
          ),
        })}
      />
      <Tab.Screen
        name="メニュー"
        component={Menu}
        options={() => ({
          headerStyle: {
            backgroundColor: "#76130D",
          },
          headerTintColor: "#fff",
          headerBackTitleVisible: false,
          headerTitleStyle: {
            color: "#FFFFFF",
          },
          tabBarIcon: ({ focused }) => (
            <Icon
                name='dots-horizontal'
                color={focused ? "#76130D" : "#D4AB72"}
                size={focused ? 36 : 30}
            />
          ),
        })}
      />
    </Tab.Navigator>
  );
};
