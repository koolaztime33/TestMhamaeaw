import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Modal,
  Image,
  SafeAreaView,
} from "react-native";
import {
  MaterialCommunityIcons,
  Ionicons,
  Entypo,
  FontAwesome5,
} from "@expo/vector-icons";

const { width, height } = Dimensions.get("screen");
const Heder = ({ navigation }) => {
  return (
    <View
      style={{
        width: width,
        height: height * 0.09,
        flexDirection: "row",
        backgroundColor: "#F8831C",
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        flexDirection: "row",
      }}
    >
      <View
        style={{
          width: width * 0.85,
          justifyContent: "center",
          alignItems: "center",
          marginLeft: 10,
          flexDirection: "row",
        }}
      >
        <Image source={require("../image/header.png")} />
        <Text
          style={{
            fontSize: 20,
            color: "#FDFDFD",
            marginHorizontal: 4,
            fontWeight: "bold",
          }}
        >
          HmaMaew
        </Text>
      </View>

      <View
        style={{
          height: 20,
          marginTop: 22,
          justifyContent: "center",
          alignItems: "center",
          marginLeft: 10,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            console.log(navigation);
            navigation.openDrawer();
          }}
        >
          <Image source={require("../image/icon.png")} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Heder;
