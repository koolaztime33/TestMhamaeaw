import React, { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";

import { AntDesign, Octicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("screen");
const Tab = ({ navigation, route }) => {
  const Tab = route.params.data;
  //   console.log(Tab);

  const Countries = Tab.map((e) => {
    return { ...e, select: false };
  });
  // console.log(Countries);

  const [state, setstate] = useState(false);
  const [keyindex, setkeyindex] = useState(Math.floor(Math.random() * 100 + 1));
  const [informationCountry, setInformationCountry] = useState([]);

  return (
    <View style={style.container}>
      <ScrollView>
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
              placeholder="ค้นหาชื่อเพื่อน / รายชื่อคนอื่นๆ"
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
          data={Tab}
          key={keyindex}
          renderItem={({ item }) => {
            return (
              <View>
                <View
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

                    <View
                      style={{
                        width: width * 0.72,
                        height: 80,
                        justifyContent: "center",
                      }}
                    >
                      {item.select ? (
                        <TouchableOpacity
                          onPress={() => {
                            setstate((Val) => !Val);
                            let selecount = Tab;
                            const i = selecount.findIndex((e) => {
                              return e.id === item.id;
                            });
                            if (i > -1) {
                              selecount[i].select = !selecount[i].select;
                            }
                            setInformationCountry(selecount);
                            setkeyindex(Math.floor(Math.random() * 100 + 1));
                            console.log("item.select>>>>>", item.select);
                          }}
                          style={{
                            width: 72,
                            height: 29,
                          }}
                        >
                          <Image
                            resizeMode="stretch"
                            style={{
                              width: 28,
                              height: 28,
                              alignSelf: "flex-end",
                            }}
                            source={require("../../../image/Tabfriends.png")}
                          />
                        </TouchableOpacity>
                      ) : (
                        <View>
                          <TouchableOpacity
                            onPress={() => {
                              setstate((Val) => !Val);
                              let selecount = Tab;
                              const i = selecount.findIndex((e) => {
                                return e.id === item.id;
                              });
                              if (i > -1) {
                                selecount[i].select = !selecount[i].select;
                              }
                              const Check = selecount.every(
                                (e) => e.select === true
                              );
                              //   Check ? setCheckBoxAll(true) : setCheckBoxAll(false);
                              setInformationCountry(selecount);
                              setkeyindex(Math.floor(Math.random() * 100 + 1));
                            }}
                            style={{
                              width: 72,
                              height: 29,
                              borderWidth: 3,
                              borderColor: "#F8831C",
                              borderRadius: 20,
                            }}
                          >
                            <Text
                              style={{
                                fontSize: 14,
                                color: "#F8831C",
                                fontFamily: "Prompt-Regular",
                                fontWeight: "bold",
                                textAlign: "center",
                              }}
                            >
                              Tag
                            </Text>
                          </TouchableOpacity>
                        </View>
                      )}
                    </View>
                  </View>
                </View>

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
      </ScrollView>

      <View
        style={{
          width: width,
          height: 60,
          backgroundColor: "#ffff",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{
            width: 97,
            height: 30,
            alignSelf: "center",
            backgroundColor: "#F8831C",
            borderRadius: 6,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: "#FFFF",
              fontFamily: "Prompt-Medium",
              textAlign: "center",
            }}
          >
            ok
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6F6",
  },
});

export default Tab;
