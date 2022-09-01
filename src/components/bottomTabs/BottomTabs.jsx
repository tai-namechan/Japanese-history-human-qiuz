import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
  View,
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get("window");

export default function BottomTabs(props) {
  return (
    <View style={styles.footer_wrapper}>
      <TouchableOpacity
				style={styles.footer_button}
			>
				<Icon
          name='pencil'
          color='#76130D'
          size={28}
          style={styles.icon}
        />
        <Text style={styles.button_text}>　問題　</Text>
      </TouchableOpacity>
			<TouchableOpacity
				style={styles.footer_button}
			>
				<Icon
          name='star'
          color='#76130D'
          size={28}
          style={styles.icon}
        />
        <Text style={styles.button_text}>ランキング</Text>
      </TouchableOpacity>
			<TouchableOpacity
				style={styles.footer_button}
			>
				<Icon
          name='dots-horizontal'
          color='#76130D'
          size={30}
          style={styles.icon}
        />
        <Text style={styles.button_text}>メニュー</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer_wrapper: {
		flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    paddingVertical: 5,
    width: width,
  },
	footer_button: {
		justifyContent: "center",
		alignItems: "center"
	},
  button_text: {
    color: "#76130D",
    fontSize: 14,
    fontWeight: "700",
  },
});
