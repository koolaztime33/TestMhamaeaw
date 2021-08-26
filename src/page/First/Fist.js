import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Image,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";

const { width, height } = Dimensions.get("screen");

const Fist = ({ navigation }) => {
  return (
    <View style={style.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <Image
          resizeMode={"stretch"}
          style={{ width: 204, height: 181, alignSelf: "center" }}
          source={require("../../image/logo_top1.png")}
        />
        <Image
          resizeMode={'contain'}
          style={{
            width: 250,
            height: 193,
            alignSelf: "center",
            marginTop: 60,
          }}
          source={require("../../image/logo_bot2.png")}
        />
      </TouchableOpacity>
      <View style={{width:width*0.9,alignSelf:'center'}}>
      <Text
        style={{
          fontFamily: "Prompt-SemiBold",
          color: "#393939",
          fontSize: 22,
          marginTop: 70,
          textAlign: "right",
        }}
      >
        หมาแมว
      </Text>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6F6",
    justifyContent: "center",
  },
});

export default Fist;
