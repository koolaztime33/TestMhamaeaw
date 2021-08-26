import React from "react";
import { Text, View, Image, TouchableOpacity,Dimensions } from "react-native";


const { width, height } = Dimensions.get("screen");
const Friends = ({ item,navigation }) => {
  return (
    <View>
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("friends", { item });
        // navigation.navigate("FriendsList");
      }}
      style={{ width: 100, height: 110, }}
    >
      <View
        style={{
          width: 65,
          height: 65,
          // backgroundColor: "#F8831C",
          borderRadius: 35,
          marginVertical: 10,
          justifyContent: "center",
          alignItems: "center",
          alignSelf:'center'
        }}
      >
        <Image style={{ width: 60, height: 60,   borderRadius: 35, }} source={item.img} />
      </View>

      <Text
        style={{
          fontSize: 13,
          color: "#787C81",
          fontFamily: "Prompt-Regular",
          textAlign:'center'
        }}
      >
        {item.friends}
      </Text>


    </TouchableOpacity>
    </View>
  );
};

export default Friends;
