import React from 'react';
import { StyleSheet, TouchableOpacity, Text, Dimensions } from "react-native"

const { width } = Dimensions.get("window")

export default function ButtonBrown(props) {
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
    backgroundColor: "#76130D",
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: width / 2,
    borderRadius: 5,
  },
  button_text: {
    color: "#ffffff",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center"
  },
})