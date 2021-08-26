import React, { useState, useEffect, useRef } from "react";
import { Text, Image, TouchableOpacity, View, Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

const Profilelist = ({ navigation, item, RBSheets, data }) => {
  const [checkdata, setcheckdata] = useState(false);

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          setcheckdata((val) => !val);
          setTimeout(() => {
            RBSheets.current.close();
          }, 300);
          navigation.navigate("ProfilePet", { item });
        }}
        style={{
          padding: 10,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={{
            width: width * 0.18,
            height: height * 0.1,
            borderRadius: 30,
          }}
          source={item.image}
        />
        <View
          style={{
            justifyContent: "center",
            width: width * 0.5,
            marginLeft: 10,
          }}
        >
          <Text style={{ fontSize: 16, fontFamily: "Prompt-Regular" }}>
            {item.name}
          </Text>
        </View>

        <View
          style={{
            width: 49,
            height: 49,
            borderRadius: 50,
            backgroundColor: data.id == item.id ? "#5EC73F" : "#fff",
          }}
        ></View>
      </TouchableOpacity>
      <View
        style={{
          borderBottomWidth: 0.6,
          borderBottomColor: "#F8831C",
        }}
      />
    </View>
  );
};

export default Profilelist;
