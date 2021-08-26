import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const { width, height } = Dimensions.get("screen");

const Profilelist = ({ item, navigation }) => {
  const [favorite, setFavorite] = useState(false);
  // console.log("item>>>>>>", item);

  return (
    <View>
      <View style={{ flexDirection: "row", marginTop: 45 }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Doctor", { item });
          }}
          style={{
            width: width * 0.9,
            height: height * 0.185,
            backgroundColor: "#fff",
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                width: width * 0.22,
                height: height * 0.09,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  width: 80,
                  height: 50,
                  marginTop: -30,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {item.fa == "fa" ? (
                  //  && favorite  ?
                  <TouchableOpacity
                    onPress={() => {
                      setFavorite((val) => !val);
                    }}
                    style={{
                      backgroundColor: "#DBDBDB",
                      width: 20,
                      height: 22,
                      position: "absolute",
                      borderRadius: 30,
                      alignSelf: "flex-end",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {favorite ? (
                      <Image
                        style={{ width: 13, height: 12 }}
                        source={require("../image/FaNo.png")}
                      />
                    ) : (
                      <Image
                        style={{ width: 20, height: 20 }}
                        source={require("../image/fav.png")}
                      />
                    )}
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    onPress={() => {
                      setFavorite((val) => !val);
                    }}
                    style={{
                      backgroundColor: "#DBDBDB",
                      width: 20,
                      height: 22,
                      position: "absolute",
                      borderRadius: 30,
                      alignSelf: "flex-end",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {favorite ? (
                      <Image
                        style={{ width: 20, height: 20 }}
                        source={require("../image/fav.png")}
                      />
                    ) : (
                      <Image
                        style={{ width: 13, height: 12 }}
                        source={require("../image/FaNo.png")}
                      />
                    )}
                  </TouchableOpacity>
                )}

                <Image
                  style={{
                    zIndex: -99,
                    width: 58,
                    height: 58,
                    borderRadius: 30,
                  }}
                  source={{
                    uri:
                      "https://97e6cf2b25e9.ngrok.io/api/image/getpic/" +
                      item.image,
                  }}
                />
              </View>

              <View>
                <Text
                  style={{
                    fontSize: 9,
                    color: "#898A8F",
                    textAlign: "center",
                    fontFamily: "Prompt-Regular",
                    padding: 4,
                  }}
                >
                  <Image
                    style={{ width: 14, height: 13 }}
                    source={require("../image/star.png")}
                  />
                  4.2
                </Text>
                <Text
                  style={{
                    fontSize: 9,
                    color: "#F67118",
                    fontFamily: "Prompt-Regular",
                    padding: 1,
                  }}
                >
                  150 Reviews
                </Text>
              </View>
            </View>
            <View
              style={{
                width: width * 0.5,
                height: 40,
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  color: "#393939",
                  fontFamily: "Prompt-Regular",
                }}
              >
                {/* Dr. Alina James */}
                {item.name}
              </Text>
              <Text
                style={{
                  fontSize: 9,
                  color: "#898A8F",
                  fontFamily: "Prompt-Regular",
                }}
              >
                {item.educationalHistory[1]},{item.scholarships[1]},
                {item.workplaceHistory[1]},
                {/* B.Sc,MBBS,DDVL,MD-Demitologist */}
              </Text>
            </View>

            <View
              style={{
                width: width * 0.18,
                height: 65,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                style={{ width: 23, height: 23 }}
                source={require("../image/years1.png")}
              />
              <Text style={{ fontSize: 12, fontFamily: "Prompt-Regular" }}>
                {item.workExperience}
                Years
              </Text>
              <Text
                style={{
                  fontSize: 8,
                  fontFamily: "Prompt-Regular",
                  color: "#BBB9B9",
                }}
              >
                Experiences
              </Text>
            </View>
          </View>

          <View
            style={{
              borderBottomWidth: 1,
              borderColor: "#DBDBDB",
              marginTop: 5,
            }}
          />
          <View style={{ flexDirection: "row" }}>
            {item.status1 == "ONonile" ? (
              <View style={style.CCV}>
                <Image
                  style={{ width: 35, height: 35 }}
                  source={require("../image/Nochat.png")}
                />

                <Text
                  style={{
                    padding: 10,
                    fontFamily: "Prompt-SemiBold",
                    fontSize: 10,
                  }}
                >
                  ฿300
                </Text>
              </View>
            ) : (
              <View style={style.CCV}>
                <Image
                  style={{ width: 35, height: 35 }}
                  source={require("../image/chat2.png")}
                />

                <Text
                  style={{
                    padding: 10,
                    fontFamily: "Prompt-SemiBold",
                    fontSize: 10,
                  }}
                >
                  ฿300
                </Text>
              </View>
            )}

            {item.status == "yes" ? (
              <View style={style.CCV}>
                <Image
                  style={{ width: 35, height: 35 }}
                  source={require("../image/Call2.png")}
                />

                <Text
                  style={{
                    padding: 10,
                    fontFamily: "Prompt-SemiBold",
                    fontSize: 10,
                  }}
                >
                  ฿500
                </Text>
              </View>
            ) : (
              <View style={style.CCV}>
                <Image
                  style={{ width: 35, height: 35 }}
                  source={require("../image/NoCall2.png")}
                />

                <Text
                  style={{
                    padding: 10,
                    fontFamily: "Prompt-SemiBold",
                    fontSize: 10,
                  }}
                >
                  ฿500
                </Text>
              </View>
            )}

            {item.status == "yes" ? (
              <View style={style.CCV}>
                <View
                  style={{
                    backgroundColor: "#5D1D94",
                    width: 35,
                    height: 35,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 30,
                  }}
                >
                  <Image
                    style={{
                      width: 35,
                      height: 35,
                    }}
                    source={require("../image/VID2.png")}
                  />
                </View>
                <Text
                  style={{
                    padding: 10,
                    fontFamily: "Prompt-SemiBold",
                    fontSize: 10,
                  }}
                >
                  ฿900
                </Text>
              </View>
            ) : (
              <View style={style.CCV}>
                <View
                  style={{
                    backgroundColor: "#DBDBDB",
                    width: 35,
                    height: 35,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 30,
                  }}
                >
                  <Image
                    style={{ width: 35, height: 35 }}
                    source={require("../image/NoVID2.png")}
                  />
                </View>
                <Text
                  style={{
                    padding: 10,
                    fontFamily: "Prompt-SemiBold",
                    fontSize: 10,
                  }}
                >
                  ฿900
                </Text>
              </View>
            )}
          </View>
        </TouchableOpacity>

        {item.status1 == "busy" && <View style={style.busy}></View>}
        {item.status1 == "ONonile" && <View style={style.ONonile}></View>}
        {item.status1 == "onile" && <View style={style.onile}></View>}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  busy: {
    width: width * 0.05,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: "red",
  },
  ONonile: {
    width: width * 0.05,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: "#DBDBDB",
  },
  onile: {
    width: width * 0.05,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: "#5EC73F",
  },
  CCV: {
    width: width * 0.29,
    height: height * 0.08,
    padding: 6,
    flexDirection: "row",
    marginHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Profilelist;
