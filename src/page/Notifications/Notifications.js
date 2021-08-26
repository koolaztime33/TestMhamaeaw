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
import DoctorLike from "../../component/Doctor";

const { width, height } = Dimensions.get("screen");

const Notifications = ({ navigation }) => {
  const data = [
    {
      img: require("../../image/no1.png"),
      toppic: "ขอคำปรึกษา",
      tita: "คุณได้มีคำร้องขอคำปรึกษา",
      time: "5:30 PM",
    },
    {
      img: require("../../image/no2.png"),
      toppic: "Dr. Alina James",
      tita: "คุณหมอที่คุณชื่นชอบ กลับมาออนไลน์แล้ว",
      time: "4:42 PM",
    },
    {
      img: require("../../image/no3.png"),
      toppic: "Leo Reilly",
      tita: "Comment on your post.",
      time: "Yesterday",
    },
    {
      img: require("../../image/no4.png"),
      toppic: "Coco Gordon",
      tita: "Like on your post.",
      time: "14/12/20",
    },
    {
      img: require("../../image/no5.png"),
      toppic: "Hank Lozano",
      tita: "Comment on your post.",
      time: "14/12/20",
    },
    {
      img: require("../../image/no6.png"),
      toppic: "Rocky Ellison",
      tita: "Comment on your post.",
      time: "13/12/18",
    },
    {
      img: require("../../image/no8.png"),
      toppic: "Dexter Byrd",
      tita: "Comment on your post.",
      time: "12/12/18",
    },
  ];
  return (
    <View style={style.container}>
      <DoctorLike navigation={navigation} header={"Notifications"} />
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                width: width,
                height: 80,
                backgroundColor: "#fff",
                marginTop: 10,
              }}
            >
              <View
                style={{
                  width: width * 0.95,
                  height: 80,

                  alignSelf: "center",
                  flexDirection: "row",
                }}
              >
                <View
                  style={{
                    width: width * 0.2,
                    height: 80,

                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    resizeMode={"stretch"}
                    style={{ width: 60, height: 60, borderRadius: 30 }}
                    source={item.img}
                  />
                </View>
                <View
                  style={{
                    width: width * 0.6,
                    height: 80,

                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#3B3B3B",
                      fontFamily: "Prompt-Regular",
                    }}
                  >
                   {item.toppic}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: "#3B3B3B",
                      fontFamily: "Prompt-Regular",
                    }}
                  >
                   {item.tita}
                  </Text>
                </View>
                <View
                  style={{
                    width: width * 0.17,
                    height: 80,
                    justifyContent: "center",
                    marginTop: -12,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 11,
                      color: "#3B3B3B",
                      fontFamily: "Prompt-Regular",
                      textAlign:'center'
                    }}
                  >
                    {item.time}
                  </Text>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6F6",
  },
});

export default Notifications;
