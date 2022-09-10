import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { brown, beige, black, white } from '../../constants/color';

const Loading = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color={brown} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default Loading;