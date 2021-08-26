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
} from "react-native";
import Doctor from "../../component/Doctor";
import { AntDesign } from "@expo/vector-icons";
import { apiservice } from "../../service/api";
import { tokenState } from "../../reducer/reducer/Atom";
import { useRecoilState } from "recoil";
import { useIsFocused } from "@react-navigation/native";
const { width, height } = Dimensions.get("screen");

const profilelist = ({ navigation }) => {
  const [token, settoken] = useRecoilState(tokenState);
  const [User, setuser] = useState("");

  const focus = useIsFocused();

  async function Getuser() {
    const response = await apiservice({
      method: "Get",
      path: "api/user/profile",
      token: token.token,
    });
    setuser(response.data);
  }

  // console.log(User.image);

  const [dataPat, setPat] = useState();
  async function GetPat() {
    const response = await apiservice({
      method: "Get",
      path: "api/pet/list",
      token: token.token,
    });
    setPat(response.data.pet.rows);
  }
  // console.log(dataPat);
  useEffect(() => {
    Getuser();
    GetPat();
  }, [token, focus]);

  const profileOP = {
    name: "Park Min-Young",
    Email: "hmamaew@mail.com",
    Phone: "0912345678",
    dataPat: [
      {
        image: require("../../image/Jai.png"),
        name: "jai Dee",
        sex: "หญิง",
        color: "น้ำตาลผสมขาว",
        we: "8 KG",
        years: "2",
        breed: "สกอตติชโฟลด์",
      },
      {
        image: require("../../image/photo.png"),
        name: "Photo",
        sex: "ชาย",
        color: "น้ำตาล",
        we: "6 KG",
        years: "2",
        breed: "สกอตติชโฟลด์",
      },
      {
        image: require("../../image/tako.png"),
        name: "Tako",
        sex: "ชาย",
        color: "น้ำตาลผสมขาว",
        we: "10 KG",
        years: "2",
        breed: "สกอตติชโฟลด์",
      },
    ],
  };
  const dataAll = {
    name: "Park Min-Young",
    Email: "hmamaew@mail.com",
    Phone: "0912345678",
    dataPat: [
      {
        image: require("../../image/Jai.png"),
        name: "jai Dee",
        sex: "หญิง",
        color: "น้ำตาลผสมขาว",
        we: "8 KG",
        years: "2",
        breed: "สกอตติชโฟลด์",
      },
      {
        image: require("../../image/photo.png"),
        name: "Photo",
        sex: "ชาย",
        color: "น้ำตาล",
        we: "6 KG",
        years: "2",
        breed: "สกอตติชโฟลด์",
      },
      {
        image: require("../../image/tako.png"),
        name: "Tako",
        sex: "ชาย",
        color: "น้ำตาลผสมขาว",
        we: "10 KG",
        years: "2",
        breed: "สกอตติชโฟลด์",
      },
    ],
  };

  return (
    <View style={style.container}>
      <SafeAreaView style={{ backgroundColor: "#F8831C" }} />
      <Doctor navigation={navigation} header={"PROFILE"} />
      <ScrollView>
        <View style={{ width: width * 0.95, alignSelf: "center" }}>
          <View
            style={{ padding: 10, flexDirection: "row", marginVertical: 10 }}
          >
            <Image
              style={{
                width: width * 0.15,
                height: height * 0.08,
                borderRadius: 30,
              }}
              source={{
                uri: "http://54.169.196.73:5000/api/image/getpic/" + User.image,
              }}
            />
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Profile");
              }}
              style={{
                justifyContent: "center",
                width: width * 0.55,
                marginLeft: 10,
              }}
            >
              <Text style={{ fontSize: 16, fontFamily: "Prompt-Regular" }}>
                {User.name}
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              padding: 8,
              width: width,
              height: 36,
              backgroundColor: "#F8831C",
              marginLeft: -10,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Prompt-Regular",
                color: "#fff",
              }}
            >
              Pets Profile
            </Text>
          </View>

          <FlatList
            // horizontal
            data={dataPat}
            renderItem={({ item, index }) => {
              // console.log("item>>>>>", item.image);
              return (
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("ProfilePet", { item });
                    }}
                    style={{
                      padding: 10,
                      flexDirection: "row",
                      marginVertical: 10,
                    }}
                  >
                    {dataPat != null && (
                      <Image
                        style={{
                          width: width * 0.15,
                          height: height * 0.08,
                          borderRadius: 30,
                        }}
                        source={{
                          uri:
                            "http://54.169.196.73:5000/api/image/getpic/" +
                            item.image,
                        }}
                      />
                    )}

                    <View
                      style={{
                        justifyContent: "center",
                        width: width * 0.55,
                        marginLeft: 10,
                      }}
                    >
                      <Text
                        style={{ fontSize: 16, fontFamily: "Prompt-Regular" }}
                      >
                        {item.name}
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <View
                    style={{
                      borderBottomWidth: 0.6,
                      borderBottomColor: "#F8831C",
                    }}
                  />
                </View>
              );
            }}
            ListFooterComponent={
              <View>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("AddPet");
                  }}
                  style={{
                    padding: 15,
                    flexDirection: "row",
                    marginVertical: 15,
                  }}
                >
                  <AntDesign name="pluscircle" size={40} color="#F8831C" />
                  <View
                    style={{
                      justifyContent: "center",
                      width: width * 0.55,
                      marginLeft: 25,
                    }}
                  >
                    <Text
                      style={{ fontSize: 16, fontFamily: "Prompt-Regular" }}
                    >
                      ADD PET
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            }
          />
        </View>
      </ScrollView>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#F6F6F6",
  },
});

export default profilelist;
