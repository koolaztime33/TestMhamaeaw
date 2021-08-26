import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { FontAwesome5, FontAwesome, AntDesign } from "@expo/vector-icons";

const { width, height } = Dimensions.get("screen");
export default function App({ navigation }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: width * 0.93,
          height: 250,
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
        <Image
          resizeMode={"stretch"}
          style={{
            width: width * 0.9,
            height: height * 0.2,
          }}
          source={require("../../image/MhamaeawIcon.png")}
        />
      </View>

      <Text
        style={{
          color: "#393939",
          fontSize: 28,
          fontFamily: "Prompt-Medium",
          textAlign: "center",
        }}
      >
        Welcome to HmaMaew
      </Text>
      <Text
        style={{
          color: "#393939",
          fontSize: 14,
          fontFamily: "Prompt-Regular",
          marginTop: 10,
          textAlign: "center",
        }}
      >
        Application for medical care of your pet
      </Text>

      <View
        style={{
          width: width * 0.9,
          height: 100,
          alignSelf: "center",
          marginTop: 30,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("LoginAll");
          }}
          style={{
            backgroundColor: "#F8831C",
            width: width * 0.8,
            height: 50,
            alignSelf: "center",
            justifyContent: "center",
            borderRadius: 6,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "#fff",
              fontSize: 20,
              fontFamily: "Prompt-Medium",
            }}
          >
            LOGIN
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          width: width * 0.9,
          height: 120,
          alignSelf: "center",
       
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Reginster");
          }}
          style={{
            backgroundColor: "#F8831C",
            width: width * 0.8,
            height: 50,
            alignSelf: "center",
            justifyContent: "center",
            borderRadius: 6,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "#fff",
              fontSize: 20,
              fontFamily: "Prompt-Medium",
            }}
          >
            REGISTER
          </Text>
        </TouchableOpacity>
      </View>

     
        <View
          style={{
            width: width,
            backgroundColor: "#F8831C",
            height: height * 0.09,
            borderTopLeftRadius: 9,
            borderTopRightRadius: 9,
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: width * 0.9,
              alignSelf: "center",
              flexDirection: "row",
            }}
          >
            <View
              style={{
                width: width * 0.47,
                flexDirection: "row",
              }}
            >
              <Text style={{ color: "#fff" }}>or connect with</Text>
            </View>
            <View style={{ marginHorizontal: 17 }}>
              <FontAwesome5 name="facebook-f" size={30} color="#fff" />
            </View>
            <View style={{ marginHorizontal: 17 }}>
              <FontAwesome5 name="google" size={30} color="#fff" />
            </View>
            <View style={{ marginHorizontal: 17 }}>
              <FontAwesome5 name="apple" size={30} color="#fff" />
            </View>
          </View>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent:'flex-end'
  },
});
