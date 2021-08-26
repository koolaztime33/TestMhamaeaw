import React, { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Image,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Switch,
  RefreshControl,
} from "react-native";
import { AntDesign, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import Header from "../../component/Heder";
import Page from "../../PageDoctor/Component/Page";
import Page1 from "../../PageDoctor/Component/Page1";
import Page2 from "../../PageDoctor/Component/Page2";
import { apiservice } from "../../service/api";
import { useRecoilState, useResetRecoilState } from "recoil";
import { tokenState } from "../../reducer/reducer/Atom";
const { width, height } = Dimensions.get("screen");
const HomeDortor = ({ navigation }) => {
  const [page, setpage] = useState(0);
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabled1, setIsEnabled1] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const toggleSwitch1 = () => setIsEnabled1((previousState) => !previousState);
  const toggleSwitch2 = () => setIsEnabled2((previousState) => !previousState);

  const [ABOUT, setABOUT] = useState(false);
  const [SETTINGS, setSETTINGS] = useState(false);
  const [LIST, setLIST] = useState(false);

  function about() {
    if (ABOUT) {
      setABOUT(false);
    } else {
      setABOUT(true);
      setSETTINGS(false);
      setLIST(false);
    }
  }

  function set() {
    if (SETTINGS) {
      setSETTINGS(false);
    } else {
      setSETTINGS(true);
      setABOUT(false);
      setLIST(false);
    }
  }

  function list() {
    if (LIST) {
      setLIST(false);
    } else {
      setLIST(true);
      setSETTINGS(false);
      setABOUT(false);
    }
  }
  const [token, settoken] = useRecoilState(tokenState);
  async function Getvate() {
    const response = await apiservice({
      method: "Get",
      path: "api/vete/profile",
      token: token.token,
    });
    // console.log(response.data);
    setvete(response.data);
  }
  const [vete, setvete] = useState();
  console.log("vete>>>>", vete);
  useEffect(() => {
    Getvate();
  }, []);

  const [refreshing, setRefreshing] = useState(false);
  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <View style={style.container}>
      <SafeAreaView style={{ backgroundColor: "#2A2A2A" }} />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Header navigation={navigation} />
        <View
          style={{
            width: width,
            height: height * 0.3,
            flexDirection: "row",
            marginTop: 25,
          }}
        >
          <View
            style={{
              width: width * 0.25,
              height: 200,
            }}
          ></View>

          <View
            style={{
              width: width * 0.5,
              height: 200,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                width: 145,
                height: 145,
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: "#F8831C",
                  position: "absolute",
                  elevation: 5,
                  borderRadius: 30,
                  justifyContent: "center",
                  marginLeft: 125,
                }}
              >
                <MaterialIcons
                  style={{ elevation: 6, alignSelf: "center" }}
                  name="photo-camera"
                  size={24}
                  color="#fff"
                />
              </View>
              <Image source={require("../../image/ProfileDoc.png")} />
            </View>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Prompt-Regular",
                marginTop: 20,
              }}
            >
              {vete != null && vete.vete.name}
            </Text>
            <Text
              style={{
                fontSize: 10,
                fontFamily: "Prompt-Regular",
                color: "#898A8F",
              }}
            >
              {vete != null && vete.vete.educationalHistory[1]},
              {vete != null && vete.vete.scholarships[1]},
              {vete != null && vete.vete.workplaceHistory[1]}
            </Text>
          </View>
        </View>

        <View
          style={{
            width: width,
            height: 50,
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            onPress={() => setpage(0)}
            onPressIn={() => {
              about();
            }}
            style={{
              width: width * 0.33,
              justifyContent: "center",
              height: 50,
              marginTop: 10,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontFamily: "Prompt-Bold",
                fontSize: 12,
                color: ABOUT ? "#F8831C" : "#393939",
              }}
            >
              ABOUT
            </Text>
            <View
              style={{
                borderBottomWidth: 2,
                borderColor: ABOUT ? "#F8831C" : "#DBDBDB",
                marginTop: 20,
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setpage(1)}
            onPressIn={() => {
              set();
            }}
            style={{
              width: width * 0.33,
              marginTop: 10,
              justifyContent: "center",
              height: 50,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontFamily: "Prompt-Bold",
                fontSize: 12,
                color: SETTINGS ? "#F8831C" : "#393939",
              }}
            >
              SETTINGS
            </Text>
            <View
              style={{
                borderBottomWidth: 2,
                borderColor: SETTINGS ? "#F8831C" : "#DBDBDB",
                marginTop: 20,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setpage(2)}
            onPressIn={() => {
              list();
            }}
            style={{
              width: width * 0.33,
              justifyContent: "center",
              height: 50,
              marginTop: 10,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontFamily: "Prompt-Bold",
                fontSize: 12,
                color: LIST ? "#F8831C" : "#393939",
              }}
            >
              LIST
            </Text>
            <View
              style={{
                borderBottomWidth: 2,
                borderColor: LIST ? "#F8831C" : "#DBDBDB",
                marginTop: 20,
              }}
            />
          </TouchableOpacity>
        </View>

        {page == 0 && <Page navigation={navigation} vete={vete} />}
        {page == 1 && <Page1 />}
        {page == 2 && <Page2 navigation={navigation} />}

        {/* <View style={{ width: width * 0.9, alignSelf: "center", height: 50 }}>
      
        </View> */}
      </ScrollView>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6F6",
  },
  button: {
    width: width * 0.18,
    height: 60,
    backgroundColor: "#fff",
    marginHorizontal: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  text: {
    width: width * 0.18,
    height: 50,
    marginHorizontal: 30,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Prompt-Regular",
  },
  CCV: {
    width: width * 0.95,
    height: 40,
    marginTop: 5,
    flexDirection: "row",
    marginTop: 10,
  },
});

export default HomeDortor;
