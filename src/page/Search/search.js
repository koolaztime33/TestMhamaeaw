import { Header } from "@react-navigation/stack";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import {
  Octicons,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Doctor from "../../component/Doctor";
import Profilelist from "../../component/Profilelist";

const { width, height } = Dimensions.get("screen");
const search = ({ navigation }) => {
  const data = [
    {
      RE: "4.2",
      reviews: "150 Reviews",
      Nmae: "Dr. Alina James",
      SU: "B.Sc, MBBS, DDVL, MD- Dermitologist",
      Years: "5 Years",
      imageURL: require("../../image/Dortor1.jpeg"),
      status: "yes",
      fa: "fa",
      status1: "onile",
    },
    {
      RE: "4.2",
      reviews: "150 Reviews",
      Nmae: "Dr. Alina James",
      SU: "B.Sc, MBBS, DDVL, MD- Dermitologist",
      Years: "5 Years",
      imageURL: require("../../image/Dortor2.jpeg"),
      status: "on",
      fa: "nofa",
      status1: "busy",
    },
    {
      RE: "4.2",
      reviews: "150 Reviews",
      Nmae: "Dr. Alina James",
      SU: "B.Sc, MBBS, DDVL, MD- Dermitologist",
      Years: "5 Years",
      imageURL: require("../../image/Dortor1.jpeg"),
      status: "on",
      fa: "fa",
      status1: "ONonile",
    },
    {
      RE: "4.2",
      reviews: "150 Reviews",
      Nmae: "Dr. Alina James",
      SU: "B.Sc, MBBS, DDVL, MD- Dermitologist",
      Years: "5 Years",
      imageURL: require("../../image/Dortor2.jpeg"),
      status: "on",
      fa: "nofa",
      status1: "busy",
    },
  ];
  return (
    <View style={style.container}>
      <SafeAreaView style={{ backgroundColor: "#2A2A2A" }} />
      <ScrollView>
        <Doctor navigation={navigation} header={"DOCTOR"} />

        <View
          style={{
            width: width * 0.95,
            alignSelf: "center",
          }}
        >
          <View style={{ marginTop: 10, flexDirection: "row" }}>
            <TextInput
              style={{
                width: width * 0.85,
                height: 33,
                borderRadius: 5,
                backgroundColor: "#fff",
                alignSelf: "center",
                padding: 8,
              }}
            >
              <Text
                style={{
                  fontSize: 11,
                  fontFamily: "Prompt-Regular",
                  color: "#ABABAB",
                }}
              >
                Search...
              </Text>
            </TextInput>

            <TouchableOpacity
              style={{
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                style={{ width: 33, height: 33 }}
                source={require("../../image/Search.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 10 }}></View>
          <FlatList
            // horizontal
            data={data}
            renderItem={({ item, index }) => {
              return <Profilelist navigation={navigation} item={item} />;
            }}
          />
        </View>

        <View style={{ marginTop: 20 }}></View>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6F6",
  },
});
export default search;
