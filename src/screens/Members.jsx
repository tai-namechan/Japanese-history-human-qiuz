import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Members(props) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.members_container}>
        <Text style={styles.members_text}>
           「歴史の壁」は、ハッカソンで集まったメンバー5人で、企画・設計・開発・運用をしています。
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    // backgroundColor: "#fff"
  },
  members_container: {
    // backgroundColor: "#fff",
    paddingHorizontal: "10%",
    paddingVertical: "10%"
  },
  members_text: {
    lineHeight: 24,
    fontSize: 16,
  }
})
