import React, { useState, useEffect, useRef, } from 'react';
import { View, ImageBackground, StyleSheet, SafeAreaView, Linking, Platform, Alert, Image, Text } from 'react-native';
import {
  NavigationContainer,
  NavigatorScreenParams,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import ButtonBrown from '../components/button/ButtonBrown';

export default function SelectEra(props) {
  const navigation = useNavigation();

  const questionId = [14]

  const newQuestionId = () => { 
    navigation.navigate("歴史の壁", {
      questionId: questionId
    })
  } 
  return (
    <View>
      <ImageBackground
        source={require('../../assets/img/backgrounds/BaseBackground.png')}
        resizeMode="cover"
        style={{ height: "100%", }}
      >
        <View style={styles.button_container}>
          <ButtonBrown
            text={"ランダム"}
            onPress={newQuestionId}
          />  
          {/* <ButtonBrown
            text={"江戸"}
            onPress={props.navigation.navigate("答え")}
          /> */}
        </View>     
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  button_container: {
    justifyContent: "space-around",
    alignItems: "center",
    height: "100%",

  },
})
