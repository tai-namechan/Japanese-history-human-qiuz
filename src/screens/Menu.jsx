import React from 'react';
import { View, ImageBackground, StyleSheet, SafeAreaView, Linking, Platform, Alert, Image, Text, TouchableOpacity } from 'react-native';
import MenuList from '../components/menu/MenuList';

export default function Menu(props) {
  return (
    <View>
      <ImageBackground
        source={require('../../assets/img/backgrounds/BaseBackground.png')}
        resizeMode="cover"
        style={{ height: "100%"}}
      >
        <MenuList 
            text={"使い方"}
            icon={"gesture-double-tap"}
            onPress={() => props.navigation.navigate("チュートリアル")}
        />
        <MenuList 
            text={"音声の設定"}
            icon={"music-note"}
            // onPress={() => props.navigation.navigate("歴史の壁")}
        />
        <MenuList 
            text={"開発者"}
            icon={"google-street-view"}
            onPress={() => props.navigation.navigate("開発者")}
        />
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
//   button_container: {

//   },
})
