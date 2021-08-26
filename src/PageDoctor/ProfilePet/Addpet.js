import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Doctor from "../../component/Doctor";
import { AntDesign } from "@expo/vector-icons";
const { width, height } = Dimensions.get("screen");
const Addpet = ({ navigation }) => {
  const profile = [
    {
      name: "Park Min-Young",
      Email: "hmamaew@mail.com",
      Phone: "0912345678",
    },
    {
      image: require("../../image/Jai.png"),
      name: "jai Dee",
      sex: "หญิง",
      color: "น้ำตาลผสมขาว",
      we: "8 KG",
      years: "2",
      breed:"สกอตติชโฟลด์"
    },
  ];
  const data = [

    {
      image: require("../../image/Jai.png"),
      name: "jai Dee",
      sex: "หญิง",
      color: "น้ำตาลผสมขาว",
      we: "8 KG",
      years: "2",
      breed:"สกอตติชโฟลด์"
    },
    {
      image: require("../../image/photo.png"),
      name: "Photo",
      sex: "ชาย",
      color: "น้ำตาล",
      we: "6 KG",
      years: "2",
      breed:"สกอตติชโฟลด์"
    },
    {
      image: require("../../image/tako.png"),
      name: "Tako",
      sex: "ชาย",
      color: "น้ำตาลผสมขาว",
      we: "10 KG",
      years: "2",
      breed:"สกอตติชโฟลด์"
    },
  ];

  return (
    <View style={style.container}>
      <ScrollView>
        <SafeAreaView style={{ backgroundColor: "#2A2A2A" }} />
        <Doctor navigation={navigation} header={"PROFILE"} />
        <View style={{ width: width * 0.95, alignSelf: "center" }}>
       

          <FlatList
            // horizontal
            data={data}
            renderItem={({ item, index }) => {
              return (
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("ProfilePet", { item });
                    }}
                    style={{
                      padding: 10,
                      flexDirection: "row",
                      marginVertical: 10,
                    }}
                  >
                    <Image
                      style={{
                        width: width * 0.15,
                        height: height * 0.08,
                        borderRadius: 30,
                      }}
                      source={item.image}
                    />
                    <View
                      style={{
                        justifyContent: "center",
                        width: width * 0.55,
                        marginLeft: 10,
                      }}
                    >
                      <Text
                        style={{ fontSize: 16, fontFamily: "Prompt-Regular" }}
                      >
                        {item.name}
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <View
                    style={{
                      borderBottomWidth: 0.6,
                      borderBottomColor: "#F8831C",
                    }}
                  />
                </View>
              );
            }}
            ListFooterComponent={
              <View>
                <TouchableOpacity onPress={()=>{
                  navigation.navigate("Addpet")
                }}
                  style={{
                    padding: 15,
                    flexDirection: "row",
                    marginVertical: 15,
                  }}
                >
                  <AntDesign name="pluscircle" size={40} color="#F8831C" />
                  <View
                    style={{
                      justifyContent: "center",
                      width: width * 0.55,
                      marginLeft: 25,
                      
                    }}
                  >
                    <Text
                      style={{ fontSize: 16, fontFamily: "Prompt-Regular" }}
                    >
                      ADD PET
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            }
          />
        </View>
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

export default Addpet;


