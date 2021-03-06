import React, { useState, useEffect, useCallback } from "react";
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
  TextInput,
  RefreshControl,
  Modal,
} from "react-native";

import {
  FontAwesome,
  AntDesign,
  Octicons,
  Ionicons,
  Entypo,
  MaterialIcons,
} from "@expo/vector-icons";

const { width, height } = Dimensions.get("screen");
const FriendsList = ({ navigation }) => {
  const [state, setstate] = useState(false);
  const data = [
    {
      img: require("../../../image/FriendsList1.png"),
      name: "Alex",
    },
    {
      img: require("../../../image/FriendsList2.png"),
      name: "Sandra",
    },
    {
      img: require("../../../image/FriendsList3.png"),
      name: "Lisa",
    },
    {
      img: require("../../../image/FriendsList4.png"),
      name: "Mike",
    },
    {
      img: require("../../../image/FriendsList5.png"),
      name: "Jennifer",
    },
    {
      img: require("../../../image/FriendsList6.png"),
      name: "Jennifer",
    },
  ];
  return (
    <View style={style.container}>
      <View
        style={{
          width: width,
          height: height * 0.09,
          flexDirection: "row",
          backgroundColor: "#F8831C",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            width: width * 0.1,
            marginTop: 10,
            justifyContent: "center",
            marginLeft: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <AntDesign name="left" size={27} color="#fff" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: width * 0.75,
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
            FRIENDS
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
            onPress={() => {
              navigation.openDrawer();
            }}
          >
            <Image source={require("../../../image/icon.png")} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ flexDirection: "row", margin: 10 }}>
        <View
          style={{
            width: width * 0.83,
            borderRadius: 5,
            backgroundColor: "#fff",
            height: 35,
            marginLeft: 10,
          }}
        >
          <TextInput
            style={{
              fontSize: 14,
              padding: 3,
              left: 10,
              width: width * 0.85,
              fontFamily: "Prompt-Regular",
            }}
            multiline={true}
            placeholder="????????????????????????????????????????????? / ??????????????????????????????????????????"
          />
        </View>

        <View
          style={{
            width: 35,
            height: 35,
            backgroundColor: "#E3DFE170",
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Octicons name="search" size={24} color="#fff" />
        </View>
      </View>

      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("friends", { item });
                }}
                style={{
                  width: width,
                  height: 100,
                  backgroundColor: "#fff",
                  justifyContent: "center",
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
                      width: width * 0.55,
                      height: 80,
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        color: "#3B3B3B",
                        fontFamily: "Prompt-Regular",
                        fontWeight: "bold",
                      }}
                    >
                      {item.name}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>

              <View
                style={{
                  width: width,
                  borderWidth: 0.5,
                  borderColor: "#F8831C",
                }}
              ></View>
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

export default FriendsList;
