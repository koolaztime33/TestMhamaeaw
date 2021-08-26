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

//icon
import { AntDesign, FontAwesome } from "@expo/vector-icons";

//Header
import Header from "../../component/Heder";

const { width, height } = Dimensions.get("screen");
const DottorList = ({ navigation, route }) => {
  
  const data = route.params.item;
  //   console.log("data>>>>", data);
  return (
    <View style={style.container}>
      <SafeAreaView style={{ backgroundColor: "#2A2A2A" }} />
      <Header navigation={navigation} />
      <TouchableOpacity
        onPress={() => [navigation.navigate("NoteDottor",{data})]}
        style={{
          width: width * 1,
          height: 70,
          alignSelf: "center",
          flexDirection: "row",
          marginTop: 10,
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
            source={data.source}
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
            {data.name}
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: width * 0.92,
          alignSelf: "center",
          flexDirection: "row",
        }}
      >
        <View style={{width:width*0.78}}>
          <Text
            style={{
              fontSize: 14,
              color: "#515F65",
              fontFamily: "Prompt-Regular",
            }}
          >
            บันทึกการขอรับคำปรึกษา
          </Text>
        </View>
        <Text
          style={{
            fontSize: 14,
            color: "#515F65",
            fontFamily: "Prompt-Regular",
          }}
        >
          5:30 am
        </Text>
      </TouchableOpacity>


    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6F6",
  },
});
export default DottorList;
