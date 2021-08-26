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
  Platform,
} from "react-native";
import { useRecoilState } from "recoil";
import { tokenState } from "../../reducer/reducer/Atom";

import Header from "../../component/Heder";
import Profilelist from "../../component/Profilelist";
import { apiservice } from "../../service/api";

const { width, height } = Dimensions.get("screen");
const Home = ({ navigation }) => {
  const [token, settoken] = useRecoilState(tokenState);
  async function GetDoctor() {
    const response = await apiservice({
      method: "Get",
      path: "api/vete/listvet",
    });
    setstate(response.data);
    console.log(state);
  }
  // console.log(token);
  const [state, setstate] = useState();

  useEffect(() => {
    GetDoctor();
  }, []);
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
      fa: "no",
      status1: "busy",
    },
  ];

  return (
    <View style={style.container}>
      <SafeAreaView style={{ backgroundColor: "#F8831C" }} />
      <View
        style={{
          marginTop: Platform.OS === "ios" ? 0 : 25,
        }}
      ></View>

      <ScrollView>
        <Header navigation={navigation} />

        <View
          style={{
            width: width,
            height: height * 0.2,
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Nearby");
              }}
              style={style.button}
            >
              <Image
                resizeMode={"stretch"}
                style={{ width: 45, height: 35 }}
                source={require("../../image/Nearby1.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Feed");
              }}
              style={style.button}
            >
              <Image
                resizeMode={"stretch"}
                style={{ width: 40, height: 35 }}
                source={require("../../image/Feed2.png")}
              />
            </TouchableOpacity>
            <View style={style.button}>
              <Image
                resizeMode={"stretch"}
                style={{ width: 45, height: 50 }}
                source={require("../../image/Shop1.png")}
              />
            </View>
          </View>
          <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <View style={style.text}>
              <Text style={{ fontFamily: "Prompt-Regular" }}>Nearby</Text>
            </View>
            <View style={style.text}>
              <Text style={{ fontFamily: "Prompt-Regular" }}>Feed</Text>
            </View>
            <View style={style.text}>
              <Text style={{ fontFamily: "Prompt-Regular" }}>Shop</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            width: width,
            height: height * 0.24,
            justifyContent: "center",
          }}
        >
          <Image
            resizeMode={"stretch"}
            style={{
              width: width * 0.95,
              height: height * 0.23,
              alignSelf: "center",
            }}
            source={require("../../image/PETS.jpg")}
          />
        </View>
        <View
          style={{
            width: width * 0.95,
            height: height * 0.6,
            alignSelf: "center",
            marginTop: 5,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View style={{ width: width * 0.8 }}>
              <Text
                style={{
                  fontSize: 14,
                  color: "#515F65",
                  alignItems: "flex-end",
                  fontFamily: "Prompt-Regular",
                  marginTop: 5,
                }}
              >
                คุณหมอทีออนไลน์ 30 ท่าน
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Search");
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  color: "#F8831C",
                  fontFamily: "Prompt-Regular",
                  marginTop: 5,
                }}
              >
                ดูทั้งหมด
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: 20 }}></View>
          <FlatList
            // horizontal
            data={state}
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
  button: {
    width: width * 0.18,
    height: 60,
    backgroundColor: "#fff",
    marginHorizontal: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  text: {
    width: width * 0.18,
    height: 50,
    marginHorizontal: 30,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Prompt-Regular",
  },
});

export default Home;
