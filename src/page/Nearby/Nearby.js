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
  TextInput,
} from "react-native";
import DoctorLike from "../../component/Doctor";
import {
  Octicons,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";

const { width, height } = Dimensions.get("screen");
const Nearby = ({ navigation }) => {
  const data = [
    {
      img: require("../../image/iconNB.png"),
      Name: "รพ.สัตว์ทองหล่อ",
      address: "Thonglor Pet Hospital",
      address1: "99/189, ถ. ติวานนท์ Pakkret, นนทบุรี 11120",
      time: "เวลาทำการ : 24 ชั่วโมง",
      Phone: "โทร.02-0799-977",
      nm: "2.4",
      close: "#5EC73F",
    },
    {
      img: require("../../image/iconNB1.png"),
      Name: "โรงพยาบาลสัตว์บางกอกฮาร์ท",
      address: "Bangkok Heart Animal Hospital",
      address1:
        "88/12-13 โครงการหมู่บ้านกฤษณา  ต.บางคูเวียง อ.บางกรวย เทศบาลนครนนทบุรี 11130",
      time: "เวลาทำการ : ให้บริการทุกวัน 09.00-21.00 น.",
      Phone: "โทร.02-0799-977",
      nm: "2.8",
      close: "#DBDBDB",
    },
    {
      img: require("../../image/iconNB1.png"),
      Name: "รพ.สัตว์ทองหล่อ",
      address: "Thonglor Pet Hospital",
      address1: "99/189, ถ. ติวานนท์ Pakkret, นนทบุรี 11120",
      time: "เวลาทำการ : 24 ชั่วโมง",
      Phone: "โทร.02-0799-977",
      nm: "2.4",
      close: "#5EC73F",
    },
  ];

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

  console.log(location);
  return (
    <View style={style.container}>
      <ScrollView>
        <DoctorLike navigation={navigation} header={"NEARBY"} />
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
              }}
              multiline={true}
              placeholder="Search..."
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

        <View
          style={{
            width: width,
            height: 200,
            alignItems: "flex-end",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ZoomMap");
            }}
            style={{
              width: 150,
              height: 50,
              position: "absolute",
              marginTop: 120,
              justifyContent: "center",
              zIndex: 1,
              flexDirection: "row",
            }}
          >
            <Text
              style={{
                fontSize: 13,
                color: "#F8831C",
                fontFamily: "Prompt-Regular",
              }}
            >
              Full map
            </Text>
            <AntDesign
              name="right"
              size={22}
              color="black"
              style={{ marginLeft: 10 }}
            />
          </TouchableOpacity>

          {/* <Image
            resizeMode={"stretch"}
            style={{ width: width, height: 200, zIndex: -99 }}
            source={require("../../image/mapNearby.png")}
          /> */}
          {location !== null && (
            <MapView
              region={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.0014,
                longitudeDelta: 0.0014,
              }}
              style={{ width: width, height: 200 }}
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
                  source={require("../../image/MapMak.png")}
                />
              </Marker>
            </MapView>
          )}
        </View>

        {/* <View>
          <Image
            resizeMode={"stretch"}
            style={{ width: width, height: 100 }}
            source={require("../../image/mb.png")}
          />
        </View> */}

        <FlatList
          data={data}
          renderItem={({ item }) => {
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
                    source={item.img}
                  />
                </View>

                <View style={style.top}>
                  <View
                    style={{
                      width: width * 0.55,
                      height: 100,
                      backgroundColor: "#fff",
                      alignSelf: "flex-end",
                      justifyContent: "center",
                      // backgroundColor:'red'
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
                      {item.Name}
                    </Text>
                    <Text
                      style={{
                        fontSize: 8,
                        color: "#4A4B4D",
                        fontFamily: "Prompt-Regular",
                      }}
                    >
                      {item.address}
                    </Text>
                    <Text
                      style={{
                        fontSize: 6,
                        color: "#B6B7B7",
                        fontFamily: "Prompt-Regular",
                        marginVertical: 10,
                      }}
                    >
                      {item.address1}
                    </Text>
                    <Text
                      style={{
                        fontSize: 6,
                        color: "#393939",
                        fontFamily: "Prompt-Regular",
                      }}
                    >
                      {item.time}
                    </Text>
                    <View style={{ flexDirection: "row" }}>
                      <Text
                        style={{
                          fontSize: 6,
                          color: "#393939",
                          fontFamily: "Prompt-Regular",
                        }}
                      >
                        {item.Phone}
                      </Text>
                      <TouchableOpacity
                        style={{
                          width: width * 0.15,
                          flexDirection: "row",
                          height: 30,
                          marginLeft: 60,
                          marginTop: -12,
                     
                        }}
                      >
                        <MaterialCommunityIcons
                          name="select-marker"
                          size={18}
                          color="#F8831C"
                          style={{ marginHorizontal: 3 }}
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
                <View
                  style={{
                    width: width * 0.12,
                    height: 100,
                    backgroundColor: item.close,
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
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#4A4B4D",
                      fontFamily: "Prompt-Regular",
                      textAlign: "center",
                    }}
                  >
                    {item.nm} ก.ม
                  </Text>
                </View>
              </View>
            );
          }}
        />
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "flex-end",
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
});

export default Nearby;
