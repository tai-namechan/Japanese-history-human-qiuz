import React from 'react';
import { StyleSheet, TouchableOpacity, Text, Dimensions } from "react-native"
import { brown, beige, black, white } from '../../constants/color';

const { width } = Dimensions.get("window")

export default function ButtonBrownBorderSmall(props) {
  return (
    <TouchableOpacity 
        style={styles.button_wrapper} 
        onPress={props.onPress}
    >
        <Text style={styles.button_text}>{props.text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button_wrapper: {
    backgroundColor: white,
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: "50%",
    borderRadius: 5,
    borderColor: brown,
    borderWidth: 1.5,
  },
  button_text: {
    color: brown,
    fontSize: 18,
    textAlign: "center"
  },
})