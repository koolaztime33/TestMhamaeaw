import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";

const Popular = ({ item, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Postpopar", { item });
      }}
      style={{
        width: 160,
        height: 190,
        alignItems: "center",
        backgroundColor: "#F6F6F6",
        justifyContent: "center",
        marginVertical: 15,
      }}
    >
      <View
        style={{
          width: 140,
          height: 144,
          marginHorizontal: 2,
          borderRadius: 6,
        }}
      >
        <Image
          resizeMode={"stretch"}
          style={{ width: 140, height: 144, borderRadius: 6 }}
          source={item.friends}
        />
      </View>
      <View
        style={{
          width: 35,
          height: 35,
          borderRadius: 30,
          marginTop: -20,
        }}
      >
        <Image
          resizeMode={"stretch"}
          style={{ width: 35, height: 35, borderRadius: 30 }}
          source={item.img}
        />
      </View>
      <Text
        style={{
          fontSize: 13,
          color: "#393939",
          fontFamily: "Prompt-Regular",
          
        }}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};

export default Popular;
