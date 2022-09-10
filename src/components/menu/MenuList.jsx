import React from "react";
import { StyleSheet, TouchableOpacity, Text, Dimensions, View, TouchableWithoutFeedback, Switch } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { brown, beige, black, white, gray } from '../../constants/color';
import { useSoundContext } from "../../context/SoundContext";

const { width } = Dimensions.get("window");

export default function MenuList(props) {
  const { isSoundOn, setIsSoundOn } = useSoundContext();

  const icon_size = 30;

  // 音声のOn/Offの切り替え
  const toggleSoundOn = () => setIsSoundOn(previousState => !previousState);

  return (
    <TouchableOpacity style={styles.menu_list_wrapper} onPress={props.onPress} disabled={props.disabled}>
      <View style={styles.menu_list_left_wrapper}>
        <MaterialCommunityIcons
          name={props.icon}
          color={brown}
          size={icon_size}
          style={styles.icon}
        />
        <Text style={styles.menu_list_text}>{props.text}</Text>
      </View>
      <View>
        {props.type == "chevron-right" ? (
          <MaterialCommunityIcons
            name="chevron-right"
            size={icon_size}
            color={brown}
          />
        ) : props.type == "switch" ? (
          <Switch
            trackColor={{ false: gray, true: brown }}
            thumbColor={isSoundOn ? white : white}
            ios_backgroundColor={gray}
            onValueChange={toggleSoundOn}
            value={isSoundOn}
          />
        ) : (
          <></>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  menu_list_wrapper: {
    backgroundColor: white,
    paddingVertical: 24,
    paddingHorizontal: 36,
    width: width,
    borderBottomColor: brown,
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
    paddingLeft: 20,
  },
});
