import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import Doctor from "../../component/Doctor";

const { width, height } = Dimensions.get("screen");
const HealthNoteBook = ({ navigation }) => {
  return (
    <View style={style.container}>
      <ScrollView>
        <SafeAreaView style={{ backgroundColor: "#2A2A2A" }} />
        <Doctor navigation={navigation} header="สมุดบันทึกสุขภาพ" />

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("PageMeasles");
          }}
          style={style.Viewstyle}
        >
          <View
            style={{
              width: 73,
              height: 72,
              backgroundColor: "#F24DAB",
              borderRadius: 6,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image source={require("../../image/inject.png")} />
          </View>
          <View
            style={{
              width: width * 0.6,
              height: 72,
              marginHorizontal: 10,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: "black",
                fontFamily: "Prompt-Regular",
              }}
            >
              วัคซีนรวมป้องกันโรคหัด-หวัดแมว +/- โรคติดเชื้อคลามัยเดีย
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("PageLeukemia");
          }}
          style={style.Viewstyle}
        >
          <View
            style={{
              width: 73,
              height: 72,
              backgroundColor: "#1D4594",
              borderRadius: 6,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image source={require("../../image/inject.png")} />
          </View>
          <View
            style={{
              width: width * 0.6,
              height: 72,
              marginHorizontal: 10,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: "black",
                fontFamily: "Prompt-Regular",
                marginTop: 10,
              }}
            >
              วัคซีนป้องกันโรคลิวคีเมีย
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("PageLeuAndMea");
          }}
          style={style.Viewstyle}
        >
          <View
            style={{
              width: 73,
              height: 72,
              backgroundColor: "#1D4594",
              borderRadius: 6,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <View
              style={{
                width: 37,
                height: 72,
                backgroundColor: "#F24DAB",
                borderTopLeftRadius: 6,
                borderBottomLeftRadius: 6,
              }}
            ></View>
            <Image
              style={{ position: "absolute" }}
              source={require("../../image/inject.png")}
            />
            <View
              style={{
                width: 37,
                height: 72,
              }}
            ></View>
          </View>
          <View
            style={{
              width: width * 0.7,
              height: 72,
              marginHorizontal: 10,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: "black",
                fontFamily: "Prompt-Regular",
                marginTop: 10,
              }}
            >
              วัคซีนรวมป้องกันโรคหัด-หวัดแมว
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: "black",
                fontFamily: "Prompt-Regular",
              }}
            >
              โรคติดเชื้อคลามัยเดียและโรคลิวคีเมีย
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Pageperitonitis");
          }}
          style={style.Viewstyle}
        >
          <View
            style={{
              width: 73,
              height: 72,
              backgroundColor: "#1D9459",
              borderRadius: 6,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image source={require("../../image/inject.png")} />
          </View>
          <View
            style={{
              width: width * 0.6,
              height: 72,
              marginHorizontal: 10,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: "black",
                fontFamily: "Prompt-Regular",
                marginTop: 10,
              }}
            >
              วัคซีนป้องกันโรคเยื่อบุช่องท้อง อักเสบติดต่อ
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("PageImmunity");
          }}
          style={style.Viewstyle}
        >
          <View
            style={{
              width: 73,
              height: 72,
              backgroundColor: "#1D9094",
              borderRadius: 6,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image source={require("../../image/inject.png")} />
          </View>
          <View
            style={{
              width: width * 0.6,
              height: 72,
              marginHorizontal: 10,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: "black",
                fontFamily: "Prompt-Regular",
                marginTop: 10,
              }}
            >
              วัคซีนป้องกันโรคภูมิคุ้มกันบกพร่อง ในแมว
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("PageRabies");
          }}
          style={style.Viewstyle}
        >
          <View
            style={{
              width: 73,
              height: 72,
              backgroundColor: "#5D1D94",
              borderRadius: 6,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image source={require("../../image/inject.png")} />
          </View>
          <View
            style={{
              width: width * 0.6,
              height: 72,
              marginHorizontal: 10,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: "black",
                fontFamily: "Prompt-Regular",
                marginTop: 10,
              }}
            >
              วัคซีนป้องกันโรคพิษสุนัขบ้า
            </Text>
          </View>
        </TouchableOpacity>

        <FlatList
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("OtherTypes");
                }}
                style={style.Viewstyle}
              >
                <View
                  style={{
                    width: 73,
                    height: 72,
                    backgroundColor: "#F24D4D",
                    borderRadius: 6,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image source={require("../../image/inject.png")} />
                </View>
                <View
                  style={{
                    width: width * 0.6,
                    height: 72,
                    marginHorizontal: 10,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      color: "black",
                      fontFamily: "Prompt-Regular",
                      marginTop: 10,
                    }}
                  >
                    เพิ่มวัคซีนชนิดอื่น
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
          ListFooterComponent={
            <View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("OtherTypes");
                }}
                style={style.Viewstyle}
              >
                <View
                  style={{
                    width: 73,
                    height: 72,
                    backgroundColor: "#F24D4D",
                    borderRadius: 6,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image source={require("../../image/inject.png")} />
                </View>
                <View
                  style={{
                    width: width * 0.48,
                    height: 72,
                    marginHorizontal: 10,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      color: "black",
                      fontFamily: "Prompt-Regular",
                      marginTop: 10,
                    }}
                  >
                    เพิ่มวัคซีนชนิดอื่น
                  </Text>
                </View>

                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("OtherTypes");
                  }}
                  style={{
                    width: 100,
                    height: 90,
                    marginVertical: 15,
                    alignSelf: "center",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <AntDesign name="pluscircle" size={45} color="#F8831C" />
                </TouchableOpacity>
              </TouchableOpacity>
            </View>
          }
        />
      </ScrollView>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6F6",
  },
  Viewstyle: {
    width: width * 0.9,
    height: 72,
    backgroundColor: "#fff",
    alignSelf: "center",
    marginVertical: 10,
    borderRadius: 6,
    flexDirection: "row",
  },
});
export default HealthNoteBook;
