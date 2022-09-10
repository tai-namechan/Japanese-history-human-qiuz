import React  from "react"
import { StyleSheet, TextInput, Text, View } from "react-native"
import { brown, beige, black, white } from '../../constants/color';

const InputText = (props) => {
  return (
    <View style={styles.input_container}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        style={[styles.input]}
        onChangeText={props.onChangeText}
        value={props.value}
        // onBlur={onBlur}
        placeholder={props.placeholder}
        // maxLength={maxLength}
        // secureTextEntry={secureTextEntry}
        // onFocus={onFocus}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
    
  )
}

export default InputText

const styles = StyleSheet.create({
  input_container: {
    width: "100%",
  },
  label: {
    paddingBottom: 4,
  },
  input: {
    padding: 10,
    width: "100%",
    height: 48,
    backgroundColor: white,
  }
  })