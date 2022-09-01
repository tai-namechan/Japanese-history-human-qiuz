import React from 'react';
import { StyleSheet, TouchableOpacity, Text, Dimensions } from "react-native"

const { width } = Dimensions.get("window")

export default function ButtonBrownSmall(props) {
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
    width: "50%",
    borderRadius: 5,
  },
  button_text: {
    color: "#ffffff",
    fontSize: 18,
    textAlign: "center"
  },
})