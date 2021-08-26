import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,

} from "react-native";

const { width, height } = Dimensions.get("screen");
const Page1 = () => {
    return (
        <View
        style={{
          width: width,
          height: height*0.45,
          backgroundColor: "#fff",
          marginTop: 5,
        }}
      >
        <View
          style={{
            width: width * 0.85,
            height: 70,
            alignSelf: "center",
            justifyContent: "center",
            marginTop:15
          }}
        >
          <Text
            style={{
              fontFamily: "Prompt-Regular",
              color: "#707070",
              fontSize: 13,
            }}
          >
            User name
          </Text>
          <Text
            style={{
              fontFamily: "Prompt-Regular",
              color: "#515F65",
              fontSize: 15,
            }}
          >
            Alina
          </Text>
        </View>

        <View
          style={{
            width: width * 0.85,
            height: 70,
            alignSelf: "center",
            justifyContent: "center",
            flexDirection: "row",
            marginLeft: 15,
          }}
        >
          <View style={{ width: width * 0.6, justifyContent: "center" }}>
            <Text
              style={{
                fontFamily: "Prompt-Regular",
                color: "#707070",
                fontSize: 13,
              }}
            >
              Password
            </Text>
            <Text
              style={{
                fontFamily: "Prompt-Regular",
                color: "#242134",
                fontSize: 15,
              }}
            >
              alina_petcare
            </Text>
          </View>
          <View style={{ width: width * 0.3, justifyContent: "center" }}>
            <Text
              style={{
                textAlign: "center",
                fontFamily: "Prompt-Regular",
                color: "#FF7346",
                fontSize: 15,
              }}
            >
              Edit
            </Text>
          </View>
        </View>

        <View
          style={{
            width: width * 0.85,
            height: 70,
            alignSelf: "center",
            justifyContent: "center",
            flexDirection: "row",
            marginLeft: 15,
          }}
        >
          <View style={{ width: width * 0.6, justifyContent: "center" }}>
            <Text
              style={{
                fontFamily: "Prompt-Regular",
                color: "#707070",
                fontSize: 13,
              }}
            >
              Name
            </Text>
            <Text
              style={{
                fontFamily: "Prompt-Regular",
                color: "#242134",
                fontSize: 15,
              }}
            >
              Dr. Alina James
            </Text>
          </View>
          <View style={{ width: width * 0.3, justifyContent: "center" }}>
            <Text
              style={{
                textAlign: "center",
                fontFamily: "Prompt-Regular",
                color: "#FF7346",
                fontSize: 15,
              }}
            >
              Edit
            </Text>
          </View>
        </View>

        <View
          style={{
            width: width * 0.85,
            height: 70,
            alignSelf: "center",
            justifyContent: "center",
            flexDirection: "row",
            marginLeft: 20,
          }}
        >
          <View style={{ width: width * 0.72, justifyContent: "center" }}>
            <Text
              style={{
                fontFamily: "Prompt-Regular",
                color: "#707070",
                fontSize: 13,
              }}
            >
              Job
            </Text>
            <Text
              style={{
                fontFamily: "Prompt-Regular",
                color: "#242134",
                fontSize: 15,
              }}
            >
              B.Sc, MBBS, DDVL, MD- Dermitologist
            </Text>
          </View>
          <View style={{ width: width * 0.2, justifyContent: "center" }}>
            <Text
              style={{
                fontFamily: "Prompt-Regular",
                color: "#FF7346",
                fontSize: 15,
              }}
            >
              Edit
            </Text>
          </View>
        </View>
      </View>
    )
}

export default Page1
