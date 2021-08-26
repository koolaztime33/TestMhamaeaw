import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  Entypo,
  Ionicons,
  SimpleLineIcons,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useRecoilState } from "recoil";
import { tokenState } from "../reducer/reducer/Atom";

const { width, height } = Dimensions.get("screen");

const menu = ({ navigation }) => {
  // const [isLogout, setisLogout] = useRecoilState(Authen)

  // function Logout() {
  //     setisLogout(false)
  //
  const [token, settoken] = useRecoilState(tokenState);

  const [Home, setHome] = useState(false);
  const [Doctor, setDoctor] = useState(false);
  const [NEARBY, setNEARBY] = useState(false);
  const [PET, setPET] = useState(false);
  const [FEED, setFEED] = useState(false);
  const [MARKETPLACE, setMARKETPLACE] = useState(false);
  const [history, sethistory] = useState(false);
  const [login, setlogin] = useState(false);
  const [NOTIFICATION, setNOTIFICATION] = useState(false);

  function HomeUser() {
    if (Home) {
      setHome(false);
    } else {
      setHome(true);
      setDoctor(false);
      setNEARBY(false);
      setPET(false);
      setFEED(false);
      setMARKETPLACE(false);
      sethistory(false);
      setlogin(false);
      setNOTIFICATION(false);
    }
  }

  function DoctorUser() {
    if (Doctor) {
      setDoctor(false);
    } else {
      setDoctor(true);
      setHome(false);
      setNEARBY(false);
      setPET(false);
      setFEED(false);
      setMARKETPLACE(false);
      sethistory(false);
      setlogin(false);
      setNOTIFICATION(false);
    }
  }

  function NEARBYUser() {
    if (NEARBY) {
      setNEARBY(false);
    } else {
      setNEARBY(true);
      setDoctor(false);
      setHome(false);
      setPET(false);
      setFEED(false);
      setMARKETPLACE(false);
      sethistory(false);
      setlogin(false);
      setNOTIFICATION(false);
    }
  }

  function PETUser() {
    if (PET) {
      setPET(false);
    } else {
      setPET(true);
      setNEARBY(false);
      setDoctor(false);
      setHome(false);

      setFEED(false);
      setMARKETPLACE(false);
      sethistory(false);
      setlogin(false);
      setNOTIFICATION(false);
    }
  }

  function FEEDUser() {
    if (FEED) {
      setFEED(false);
    } else {
      setFEED(true);
      setPET(false);
      setNEARBY(false);
      setDoctor(false);
      setHome(false);

      setMARKETPLACE(false);
      sethistory(false);
      setlogin(false);
      setNOTIFICATION(false);
    }
  }

  function MARKETPLACEUser() {
    if (MARKETPLACE) {
      setMARKETPLACE(false);
    } else {
      setMARKETPLACE(true);
      setFEED(false);
      setPET(false);
      setNEARBY(false);
      setDoctor(false);
      setHome(false);

      sethistory(false);
      setlogin(false);
      setNOTIFICATION(false);
    }
  }

  function historyUser() {
    if (history) {
      sethistory(false);
    } else {
      sethistory(true);
      setMARKETPLACE(false);
      setFEED(false);
      setPET(false);
      setNEARBY(false);
      setDoctor(false);
      setHome(false);

      setlogin(false);
      setNOTIFICATION(false);
    }
  }

  function loginUser() {
    if (login) {
      sethistory(false);
    } else {
      setlogin(true);
      sethistory(false);
      setMARKETPLACE(false);
      setFEED(false);
      setPET(false);
      setNEARBY(false);
      setDoctor(false);
      setHome(false);
      setNOTIFICATION(false);
    }
  }

  function NOTIFICATIONUser() {
    if (NOTIFICATION) {
      setNOTIFICATION(false);
    } else {
      setNOTIFICATION(true);
      setlogin(false);
      sethistory(false);
      setMARKETPLACE(false);
      setFEED(false);
      setPET(false);
      setNEARBY(false);
      setDoctor(false);
      setHome(false);
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Profilelist");
        }}
        style={{
          width: width * 0.9,
          height: height * 0.13,
          backgroundColor: "#F8831C",
          flexDirection: "row",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity: 0.37,
          shadowRadius: 7.49,
          elevation: 12,
        }}
      >
        <View
          style={{
            justifyContent: "center",
            marginLeft: 10,
            width: width * 0.15,
          }}
        >
          <Image
            style={{
              width: width * 0.12,
              height: height * 0.07,
              borderRadius: 30,
            }}
            source={require("../image/Profile.png")}
          />
        </View>
        <View
          style={{
            justifyContent: "center",
            width: width * 0.55,
            marginLeft: 10,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <FontAwesome name="user" size={24} color="#fff" />
            <Text
              style={{
                fontSize: 20,
                color: "#fff",
                fontFamily: "Prompt-Regular",
                marginLeft: 15,
              }}
            >
              Park Min-Young
            </Text>
          </View>
        </View>

        <View
          style={{
            justifyContent: "center",
            width: width * 0.1,
          }}
        >
          <Entypo name="chevron-thin-left" size={40} color="#fff" />
        </View>
      </TouchableOpacity>

      <View
        style={{
          width: width * 0.9,
          height: height * 0.15,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            HomeUser();
            navigation.navigate("Home");
          }}
          style={{
            width: width * 0.9,
            height: height * 0.07,
            justifyContent: "center",
            marginVertical: 4,
          }}
        >
          <View style={{ flexDirection: "row", marginLeft: 10 }}>
            <Ionicons
              name="md-home"
              size={24}
              color={!Home ? "#717171" : "#F8831C"}
              style={{ marginHorizontal: 6 }}
            />
            <Text
              style={{
                color: !Home ? "#717171" : "#F8831C",
                fontSize: 14,
                marginLeft: 10,
              }}
            >
              HOME
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            DoctorUser();
            navigation.navigate("Search");
          }}
          style={{
            width: width * 0.9,
            height: height * 0.055,
            justifyContent: "center",
            marginVertical: 4,
          }}
        >
          <View style={{ flexDirection: "row", marginLeft: 10 }}>
            <MaterialCommunityIcons
              name="select-marker"
              size={24}
              color={!Doctor ? "#717171" : "#F8831C"}
              style={{ marginHorizontal: 6 }}
            />
            <Text
              style={{
                color: !Doctor ? "#717171" : "#F8831C",
                fontSize: 14,
                marginLeft: 10,
              }}
            >
              DOCTOR
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          borderColor: "#DBDBDB",
          width: width * 0.9,
        }}
      />
      <TouchableOpacity
        onPress={() => {
          NEARBYUser();
          navigation.navigate("Nearby");
        }}
        style={{
          width: width * 0.9,
          height: height * 0.06,
          justifyContent: "center",
          marginVertical: 5,
        }}
      >
        <View style={{ flexDirection: "row", marginLeft: 10 }}>
          <MaterialCommunityIcons
            name="select-marker"
            size={24}
            color={!NEARBY ? "#717171" : "#F8831C"}
            style={{ marginHorizontal: 6 }}
          />
          <Text
            style={{
              color: !NEARBY ? "#717171" : "#F8831C",
              fontSize: 14,
              marginLeft: 10,
            }}
          >
            NEARBY
          </Text>
        </View>
      </TouchableOpacity>

      <View
        style={{
          borderBottomWidth: 1,
          width: width * 0.9,
          borderColor: "#DBDBDB",
        }}
      />
      <TouchableOpacity
        onPress={() => {
          PETUser();
          navigation.navigate("Profilelist");
        }}
        style={{
          width: width * 0.9,
          height: height * 0.07,
          justifyContent: "center",
          marginVertical: 4,
        }}
      >
        <View style={{ flexDirection: "row", marginLeft: 10 }}>
          <Entypo
            name="briefcase"
            size={24}
            color={!PET ? "#717171" : "#F8831C"}
            style={{ marginHorizontal: 6 }}
          />
          <Text
            style={{
              color: !PET ? "#717171" : "#F8831C",
              fontSize: 14,
              marginLeft: 10,
            }}
          >
            YOUR PET
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          FEEDUser();
          navigation.navigate("Feed");
        }}
        style={{
          width: width * 0.9,
          height: height * 0.07,
          justifyContent: "center",
          marginVertical: 4,
        }}
      >
        <View style={{ flexDirection: "row", marginLeft: 10 }}>
          <Entypo
            name="news"
            size={24}
            color={!FEED ? "#717171" : "#F8831C"}
            style={{ marginHorizontal: 6 }}
          />
          <Text
            style={{
              color: !FEED ? "#717171" : "#F8831C",
              fontSize: 14,
              marginLeft: 10,
            }}
          >
            FEED
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          MARKETPLACEUser();
        }}
        style={{
          width: width * 0.9,
          height: height * 0.07,
          justifyContent: "center",
          marginVertical: 4,
        }}
      >
        <View style={{ flexDirection: "row", marginLeft: 10 }}>
          <Entypo
            name="shopping-cart"
            size={24}
            color={!MARKETPLACE ? "#717171" : "#F8831C"}
            style={{ marginHorizontal: 6 }}
          />
          <Text
            style={{
              color: !MARKETPLACE ? "#717171" : "#F8831C",
              fontSize: 14,
              marginLeft: 10,
            }}
          >
            MARKETPLACE
          </Text>
        </View>
      </TouchableOpacity>
      <View
        style={{
          borderBottomWidth: 1,
          width: width * 0.9,
          borderColor: "#DBDBDB",
        }}
      />
      <View
        style={{
          width: width * 0.9,
          height: height * 0.07,
          justifyContent: "center",
          marginVertical: 4,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            historyUser();
          }}
          style={{ flexDirection: "row", marginLeft: 10 }}
        >
          <FontAwesome
            name="history"
            size={24}
            color={!history ? "#717171" : "#F8831C"}
            style={{ marginHorizontal: 6 }}
          />

          <Text
            style={{
              color: !history ? "#717171" : "#F8831C",
              fontSize: 14,
              marginLeft: 10,
            }}
          >
            HISTORY
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Notifications");
          NOTIFICATIONUser();
        }}
        style={{
          width: width * 0.9,
          height: height * 0.07,
          justifyContent: "center",
          marginVertical: 4,
        }}
      >
        <View style={{ flexDirection: "row", marginLeft: 10 }}>
          <Ionicons
            name="notifications"
            size={24}
            color={!NOTIFICATION ? "#717171" : "#F8831C"}
            style={{ marginHorizontal: 4 }}
          />

          <Text
            style={{
              color: !NOTIFICATION ? "#717171" : "#F8831C",
              fontSize: 14,
              marginLeft: 10,
            }}
          >
            NOTIFICATION
          </Text>
          <View style={{ width: width * 0.48, height: 20 }}>
            <View
              style={{
                alignSelf: "flex-end",
                width: 30,
                height: 14,
                backgroundColor: "red",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 6,
                marginTop: 3,
              }}
            >
              <View>
                <Text
                  style={{
                    fontSize: 12,
                    textAlign: "justify",
                    color: "#fff",
                  }}
                >
                  18
                </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <View
        style={{
          borderBottomWidth: 1,
          borderColor: "#DBDBDB",
          width: width * 0.9,
        }}
      />

      <TouchableOpacity
        onPress={() => {
          loginUser();
          settoken("");
        }}
        style={{
          width: width * 0.9,
          height: height * 0.07,
          justifyContent: "center",
          marginVertical: 4,
        }}
      >
        <View style={{ flexDirection: "row", marginLeft: 10 }}>
          <SimpleLineIcons
            name="logout"
            size={24}
            color={!login ? "#717171" : "#F8831C"}
            style={{ marginHorizontal: 6 }}
          />
          <Text
            style={{
              color: !login ? "#717171" : "#F8831C",
              fontSize: 14,
              marginLeft: 10,
            }}
          >
            LOGOUT
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: ,
    width: width,
    height: height,
  },
});

export default menu;
