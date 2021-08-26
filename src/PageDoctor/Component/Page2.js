import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Dimensions,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";

const { width, height } = Dimensions.get("screen");
const Page2 = ({navigation}) => {
  const data = [
    {
      source: require("../../image/user1.png"),
      name: "Alexandra Mclean",
    },
    {
      source: require("../../image/user2.png"),
      name: "Natalie Stuart",
    },
  ];
  return (
    <View>
      <View
        style={{
          width: width,
          height:height*0.5,
          backgroundColor: "#fff",
      marginTop:5
        }}
      >
        <FlatList
          data={data}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => [navigation.navigate("DottorList", { item })]}
                style={{
                  width: width * 1,
                  height: 70,
                  alignSelf: "center",
                  flexDirection: "row",
                 marginTop:15
                }}
              >
                <View
                  style={{
                    width: width * 0.2,
                    height: 70,
                  }}
                >
                  <Image
                    style={{
                      width: width * 0.2,
                      height: 70,
                    }}
                    source={item.source}
                  />
                </View>

                <View
                  style={{
                    width: width * 0.45,
                    height: 70,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Prompt-Regular",
                      color: "#242134",
                      fontSize: 17,
                    }}
                  >
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Page2;
