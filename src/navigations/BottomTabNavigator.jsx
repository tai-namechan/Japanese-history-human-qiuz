import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from '@react-navigation/native';
import SelectQuestions from "../screens/SelectEra";
import Ranking from "../screens/Ranking";
import Menu from "../screens/Menu";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Octicons } from '@expo/vector-icons'; 
import { brown, beige, black, white, gray } from "../constants/color";

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  const navigation = useNavigation();

  const icon_size = 28;

  return (
    <Tab.Navigator
    initialRouteName="SelectQuestions"
    screenOptions={{
        tabBarActiveTintColor: brown,
        tabBarInactiveTintColor: beige,
      }}
    >
      <Tab.Screen
        name="問題"
        component={SelectQuestions}
        options={(user) => ({
          headerStyle: {
            backgroundColor: brown,
          },
          headerTintColor: white,
          headerBackTitleVisible: false,
          headerTitleStyle: {
            color: white,
          },
          tabBarIcon: ({ focused }) => (
            <Octicons name="note" size={icon_size} color={focused ? brown : beige} />
          ),
        })}
      />
      <Tab.Screen
        name="ランキング"
        component={Ranking}
        options={() => ({
          headerStyle: {
            backgroundColor: brown,
          },
          headerTintColor: white,
          headerBackTitleVisible: false,
          headerTitleStyle: {
            color: white,
          },
          tabBarIcon: ({ focused }) => (
            <Ionicons name="people" size={icon_size} color={focused ? brown : beige} />
          ),
        })}
      />
      <Tab.Screen
        name="メニュー"
        component={Menu}
        options={() => ({
          headerStyle: {
            backgroundColor: brown,
          },
          headerTintColor: white,
          headerBackTitleVisible: false,
          headerTitleStyle: {
            color: white,
          },
          tabBarIcon: ({ focused }) => (
            <Ionicons name="menu" size={icon_size} color={focused ? brown : beige} />
          ),
        })}
      />
    </Tab.Navigator>
  );
};
