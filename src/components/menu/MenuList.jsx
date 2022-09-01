import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
  View,
  TouchableWithoutFeedback
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const { width } = Dimensions.get("window");

export default function MenuList(props) {
  return (
    <TouchableOpacity style={styles.menu_list_wrapper} onPress={props.onPress}>
      <View style={styles.menu_list_left_wrapper}>
        <Icon name={props.icon} color="#76130D" size={30} style={styles.icon} />
        <Text style={styles.menu_list_text}>{props.text}</Text>
      </View>

      <Icon
        name="chevron-right"
        color="#76130D"
        size={30}
        style={styles.icon}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  menu_list_wrapper: {
    backgroundColor: "#fff",
    paddingVertical: 24,
    paddingHorizontal: 36,
    width: width,
    borderBottomColor: "#76130D",
    borderBottomWidth: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  menu_list_left_wrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  menu_list_text: {
    fontSize: 20,
    paddingLeft: 10,
  },
});
