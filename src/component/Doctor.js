import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";

const { width, height } = Dimensions.get("screen");
const Doctor = ({ header, navigation, route }) => {
  return (
    <View
      style={{
        width: width,
        height: height * 0.09,
        flexDirection: "row",
        backgroundColor: "#F8831C",
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        justifyContent: "space-between",
      }}
    >
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={{
          width: width * 0.1,
          marginTop: 10,
          justifyContent: "center",
          marginLeft: 10,
          alignItems: "flex-end",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{ width: width * 0.1, alignItems: "flex-end" }}
        >
          <Image source={require("../image/goback.png")} />
        </TouchableOpacity>
      </TouchableOpacity>
      <View
        style={{
          width: width * 0.4,
          marginTop: 10,
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: "#FDFDFD",
            marginHorizontal: 4,
            fontFamily: "Prompt-Regular",
            textAlign: "center",
          }}
        >
          {header}
        </Text>
      </View>

      <View
        style={{
          height: 20,
          marginTop: 30,
          justifyContent: "center",
          alignItems: "center",
          marginLeft: 10,
        }}
      >
        <TouchableOpacity
          style={{ padding: 15 }}
          onPress={() => {
            navigation.openDrawer();
          }}
        >
          <Image source={require("../image/icon.png")} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Doctor;
