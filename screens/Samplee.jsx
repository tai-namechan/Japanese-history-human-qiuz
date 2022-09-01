import React, { useState, useEffect } from "react";
import {
  View,
  ImageBackground,
  Animated,
  StyleSheet,
  TextInput,
  Dimensions,
  ScrollView,
  SafeAreaView
} from "react-native";
import {
  Button,
  Text,
  Image,
  Overlay,
  ThemeProvider,
  Header,
} from "react-native-elements";
import * as Speech from "expo-speech";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";

const { width, height } = Dimensions.get("window");



export default function Samplee(props) {
  return (
      <SafeAreaView>
          <Text>さmぺl</Text>
      </SafeAreaView>
  )
}


