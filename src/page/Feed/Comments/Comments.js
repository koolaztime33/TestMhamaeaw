import React, { useState, useEffect, useCallback } from "react";
import { Text, View, Image, Dimensions, TouchableOpacity } from "react-native";

const { width, height } = Dimensions.get("screen");
const Comments = ({ item ,navigation}) => {
  const [state, setstate] = useState(false);
  return (
    <View style={{ backgroundColor: "#fff" }}>
      <View
        style={{
          alignSelf: "center",
          width: width * 0.95,
          height: 60,
          backgroundColor: "#fff",
          flexDirection: "row",
          marginVertical: 8,
        }}
      >
        <TouchableOpacity 
          onPress={() => {
            navigation.navigate("friends", { item });
          }}
          style={{
            width: 65,
            height: 65,
            // backgroundColor: "#F8831C",
            borderRadius: 30,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{
              width: 60,
              height: 60,
              borderRadius: 30,
            }}
            source={item.img}
          />
        </TouchableOpacity>
        <View
          style={{
            width: width * 0.47,
            height: 60,
            justifyContent: "center",
            marginLeft: 10,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fontSize: 12,
                color: "#484D54",
                fontFamily: "Prompt-Regular",
                fontWeight: "bold",
              }}
            >
              {item.name}
            </Text>
            <Text
              style={{
                fontSize: 10,
                color: "#787C81",
                fontFamily: "Prompt-Regular",
                marginLeft: 10,
              }}
            >
              14m ago
            </Text>
          </View>
          <Text
            style={{
              fontSize: 11,
              color: "#484D54",
              fontFamily: "Prompt-Regular",
            }}
          >
            {item.com}
          </Text>
        </View>

        <View
          style={{
            width: width * 0.25,
            height: 60,
            marginTop:13
        
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                color: "#787C81",
                fontSize: 11,
                fontFamily: "Prompt-Regular",
                marginHorizontal: 20,
              }}
            >
              Reply
            </Text>

            <TouchableOpacity
              onPress={() => {
                setstate((val) => !val);
              }}
            >
              <Text
                style={{
                  color:state ? "#F8831C" :"#787C81",
                  fontSize: 11,
                  fontFamily: "Prompt-Regular",
                }}
              >
                Like
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
    
  );
};

export default Comments;
