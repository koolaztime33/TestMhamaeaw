import React, { useState, useEffect, useRef } from "react";
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
} from "react-native";

import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";
import RBSheet from "react-native-raw-bottom-sheet";

const { width, height } = Dimensions.get("screen");
const ZoomMap = ({ navigation }) => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  const data = [
    {
      latitude: 13.799585,
      longitude: 100.377546,
    },

    {
      latitude: 13.799539,
      longitude: 100.377118,
    },
  ];

  function pagePopUp() {
    if (page == 1) {
      return (
        <View
          style={{
            width: width * 0.95,
            height: 100,
            flexDirection: "row",
            alignSelf: "center",
            justifyContent: "center",
            marginVertical: 10,
          }}
        >
          <View style={{ elevation: 15, marginRight: 20 }}>
            <Image
              style={{
                width: 90,
                height: 90,
                zIndex: 1,
                position: "absolute",
                marginTop: 8,
              }}
              source={require("../../../image/iconNB.png")}
            />
          </View>

          <View style={style.top}>
            <View
              style={{
                width: width * 0.6,
                height: 100,
                backgroundColor: "#fff",
                alignSelf: "flex-end",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  color: "#4A4B4D",
                  fontFamily: "Prompt-Regular",
                  marginVertical: 1,
                }}
              >
                รพ.สัตว์ทองหล่อ
              </Text>
              <Text
                style={{
                  fontSize: 8,
                  color: "#4A4B4D",
                  fontFamily: "Prompt-Regular",
                }}
              >
                Thonglor Pet Hospital
              </Text>
              <Text
                style={{
                  fontSize: 6,
                  color: "#B6B7B7",
                  fontFamily: "Prompt-Regular",
                  marginVertical: 10,
                }}
              >
                99/189, ถ. ติวานนท์ Pakkret, นนทบุรี 11120
              </Text>
              <Text
                style={{
                  fontSize: 6,
                  color: "#393939",
                  fontFamily: "Prompt-Regular",
                }}
              >
                เวลาทำการ : 24 ชั่วโมง
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    fontSize: 6,
                    color: "#393939",
                    fontFamily: "Prompt-Regular",
                  }}
                >
                  โทร.02-0799-977
                </Text>
                <TouchableOpacity
                  style={{
                    width: width * 0.15,
                    flexDirection: "row",
                    height: 30,
                    marginLeft: 90,
                    marginTop: -12,
                  }}
                >
                  <MaterialCommunityIcons
                    name="select-marker"
                    size={18}
                    color="#F8831C"
                    style={{ marginHorizontal: 6 }}
                  />
                  <Text
                    style={{
                      fontSize: 10,
                      color: "#F8831C",
                      fontFamily: "Prompt-Regular",
                    }}
                  >
                    เส้นทาง
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={style.online}>
            <Text
              style={{
                fontSize: 16,
                color: "#4A4B4D",
                fontFamily: "Prompt-Regular",
                textAlign: "center",
              }}
            >
              2.4 ก.ม
            </Text>
          </View>
        </View>
      );
    }

    if (page == 2) {
      return (
        <View
          style={{
            width: width * 0.95,
            height: 100,
            flexDirection: "row",
            alignSelf: "center",
            justifyContent: "center",
            marginVertical: 10,
          }}
        >
          <View style={{ elevation: 15, marginRight: 20 }}>
            <Image
              style={{
                width: 90,
                height: 90,
                zIndex: 1,
                position: "absolute",
                marginTop: 8,
              }}
              source={require("../../../image/iconNB1.png")}
            />
          </View>

          <View style={style.top}>
            <View
              style={{
                width: width * 0.6,
                height: 100,
                backgroundColor: "#fff",
                alignSelf: "flex-end",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  color: "#4A4B4D",
                  fontFamily: "Prompt-Regular",
                  marginVertical: 1,
                }}
              >
                โรงพยาบาลสัตว์บางกอกฮาร์ท
              </Text>
              <Text
                style={{
                  fontSize: 8,
                  color: "#4A4B4D",
                  fontFamily: "Prompt-Regular",
                }}
              >
                Bangkok Heart Animal Hospital
              </Text>
              <Text
                style={{
                  fontSize: 6,
                  color: "#B6B7B7",
                  fontFamily: "Prompt-Regular",
                  marginVertical: 10,
                }}
              >
                "88/12-13 โครงการหมู่บ้านกฤษณา ต.บางคูเวียง อ.บางกรวย
                เทศบาลนครนนทบุรี 11130"
              </Text>
              <Text
                style={{
                  fontSize: 6,
                  color: "#393939",
                  fontFamily: "Prompt-Regular",
                }}
              >
                เวลาทำการ : ให้บริการทุกวัน 09.00-21.00 น.
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    fontSize: 6,
                    color: "#393939",
                    fontFamily: "Prompt-Regular",
                  }}
                >
                  โทร.02-0799-977
                </Text>
                <TouchableOpacity
                  style={{
                    width: width * 0.15,
                    flexDirection: "row",
                    height: 30,
                    marginLeft: 90,
                    marginTop: -12,
                  }}
                >
                  <MaterialCommunityIcons
                    name="select-marker"
                    size={18}
                    color="#F8831C"
                    style={{ marginHorizontal: 6 }}
                  />
                  <Text
                    style={{
                      fontSize: 10,
                      color: "#F8831C",
                      fontFamily: "Prompt-Regular",
                    }}
                  >
                    เส้นทาง
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={style.online}>
            <Text
              style={{
                fontSize: 16,
                color: "#4A4B4D",
                fontFamily: "Prompt-Regular",
                textAlign: "center",
              }}
            >
              2.8 ก.ม
            </Text>
          </View>
        </View>
      );
    }
  }

  const RBSheets = useRef();
  const [page, setPage] = useState(0);
  const [heightSheet, setheightSheet] = useState(200);
  return (
    <View style={style.container}>
      <RBSheet
        ref={RBSheets}
        height={heightSheet}
        // openDuration={250}
        closeOnDragDown
        customStyles={{
          container: {
            alignItems: "center",
            borderRadius: 10,
          },
          draggableIcon: {
            width: width * 0.2,
          },
        }}
      >
        {pagePopUp()}
      </RBSheet>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={{
          position: "absolute",

          width: 30,
          height: 30,
          zIndex: 1,
          margin: 10,
        }}
      >
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>
      {location !== null && (
        <MapView
          region={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0014,
            longitudeDelta: 0.0014,
          }}
          style={{ width: width, height: height }}
        >
          <Marker
            title={"Ma"}
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
          >
            <Image
              style={{ width: 66, height: 66 }}
              source={require("../../../image/MapMak.png")}
            />
          </Marker>

          <Marker
            title={"รพ.สัตว์ทองหล่อ"}
            coordinate={{
              latitude: 13.799428,
              longitude: 100.378168,
            }}
          >
            <Image
              style={{ width: 80, height: 80 }}
              source={require("../../../image/MakerHotal.png")}
            />
          </Marker>

          <Marker
            title={"รพ.สัตว์ทองหล่อ"}
            onPress={() => {
              setPage(1);
              setheightSheet(200);
              setTimeout(() => {
                RBSheets.current.open();
              }, 300);
            }}
            coordinate={{
              latitude: 13.799188,
              longitude: 100.377186,
            }}
          >
            <Image
              style={{ width: 66, height: 66 }}
              source={require("../../../image/MakerHotal.png")}
            />
          </Marker>


          <Marker
            title={"โรงพยาบาลสัตว์บางกอกฮาร์ท"}
            onPress={() => {
              setPage(2);
              setheightSheet(200);
              setTimeout(() => {
                RBSheets.current.open();
              }, 300);
            }}
            coordinate={{
              latitude: 13.800077,
              longitude: 100.377347,
            }}
          >
            <Image
              style={{ width: 66, height: 66 }}
              source={require("../../../image/MakerHotal.png")}
            />
          </Marker>



        
        </MapView>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    width: width * 0.7,
    height: 100,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    elevation: 13,
    zIndex: -1,
    left: 30,
  },
  online: {
    width: width * 0.12,
    height: 100,
    backgroundColor: "#5EC73F",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 13,
    justifyContent: "center",
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
  },
});

export default ZoomMap;
