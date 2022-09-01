import React from 'react';
import { StyleSheet, TouchableOpacity, Text, Dimensions } from "react-native"

const { width } = Dimensions.get("window")

export default function ButtonQuestion(props) {
  return (
    <TouchableOpacity 
        style={[styles.button_wrapper, props.style]} 
        onPress={props.onPress}
        disabled={props.disabled}
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
    width: "100%",
    borderRadius: 5,
  },
  button_text: {
    color: "#ffffff",
    fontSize: 22,
    textAlign: "center",
  },
})