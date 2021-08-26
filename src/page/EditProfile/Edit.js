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
  TextInput,
} from "react-native";
import { useRecoilState } from "recoil";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

import Doctor from "../../component/Doctor";
import { tokenState } from "../../reducer/reducer/Atom";
import { apiservice } from "../../service/api";

const { width, height } = Dimensions.get("screen");
const Edit = ({ navigation, route }) => {
  const prilfeED = route.params.user;
  console.log(prilfeED);

  const [token, settoken] = useRecoilState(tokenState);

  const [state, setstate] = useState(false);

  const [body, setbody] = useState({
    oldpassword: "",
    password: "",
    Repassword: "",
  });
  async function ChangePassword() {
    try {
      const response = await apiservice({
        method: "Put",
        path: "api/user/change",
        body: body,
        token: token.token,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
console.log(body);
  const [hidePass, setHidePass] = useState(true);
  const [hidePass1, setHidePass1] = useState(true);
  const [hidePass2, setHidePass2] = useState(true);
  return (
    <View style={style.container}>
      <ScrollView>
        <Doctor navigation={navigation} header={"PROFILE"} />

        <View
          style={{
            width: width * 0.8,
            alignSelf: "center",
            //   backgroundColor: "red",
            marginTop: 20,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              ChangePassword()
              navigation.navigate("Profile");
            }}
            style={{
              width: 97,
              height: 28,
              backgroundColor: "#FFB574",
              alignSelf: "flex-end",
              justifyContent: "center",
              borderRadius: 6,
            }}
          >
            <Text
              style={{
                fontSize: 12,
                color: "#444444",
                fontFamily: "Prompt-Regular",
                textAlign: "center",
              }}
            >
              SAVE
            </Text>
          </TouchableOpacity>

          <Text
            style={{
              fontFamily: "Prompt-Medium",
              color: "#393939",
              fontSize: 18,
              marginVertical: 10,
            }}
          >
            Name
          </Text>
          <View style={style.Viewtext}>
            <TextInput
              style={style.textinput}
              defaultValue={prilfeED.name}
              placeholderTextColor="#DBDBDB"
              placeholder="Name"
            />
          </View>

          <Text
            style={{
              fontFamily: "Prompt-Medium",
              color: "#393939",
              fontSize: 18,
              marginVertical: 10,
            }}
          >
            Email
          </Text>
          <View style={style.Viewtext}>
            <Text
              style={{
                width: width * 0.7,
                height: 38,
                marginLeft: 15,
                fontFamily: "Prompt-Regular",
                fontSize: 18,
                color: "#DBDBDB",
                marginTop: 5,
              }}
            >
              {prilfeED.email}
            </Text>
          </View>

          <Text
            style={{
              fontFamily: "Prompt-Medium",
              color: "#393939",
              fontSize: 18,
              marginVertical: 10,
            }}
          >
            Phone
          </Text>
          <View style={style.Viewtext}>
            <TextInput
              style={style.textinput}
              defaultValue={prilfeED.telNo}
              placeholderTextColor="#DBDBDB"
              placeholder="Phone"
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              setstate((val) => !val);
            }}
          >
            <Text
              style={{
                fontFamily: "Prompt-Medium",
                color: "#393939",
                fontSize: 18,
                marginVertical: 10,
                textAlign: "right",
              }}
            >
              change password
            </Text>
          </TouchableOpacity>

          {state && (
            <View>
              <Text
                style={{
                  fontFamily: "Prompt-Medium",
                  color: "#393939",
                  fontSize: 18,
                  marginVertical: 10,
                }}
              >
                Old password
              </Text>
              <View
                style={{
                  width: width * 0.8,
                  height: 38,
                  backgroundColor: "#fff",
                  marginTop: 10,
                  borderRadius: 10,
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <TextInput
                    onChangeText={(text) =>
                      setbody({ ...body, oldpassword: text })
                    }
                    secureTextEntry={hidePass ? true : false}
                    style={style.textinput}
                    placeholderTextColor="#DBDBDB"
                    placeholder="******"
                  />
                  {body.oldpassword.length ? (
                    <AntDesign
                      name={hidePass ? "eyeo" : "eye"}
                      size={24}
                      color="#DBDBDB"
                      onPress={() => setHidePass(!hidePass)}
                      style={{ marginTop: 10 }}
                    />
                  ) : (
                    <View></View>
                  )}
                </View>
              </View>
              <Text
                style={{
                  fontFamily: "Prompt-Medium",
                  color: "#393939",
                  fontSize: 18,
                  marginVertical: 10,
                }}
              >
                New password
              </Text>
              <View
                style={{
                  width: width * 0.8,
                  height: 38,
                  backgroundColor: "#fff",
                  marginTop: 10,
                  borderRadius: 10,
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <TextInput
                    onChangeText={(text) =>
                      setbody({ ...body, password: text })
                    }
                    secureTextEntry={hidePass1 ? true : false}
                    style={style.textinput}
                    placeholderTextColor="#DBDBDB"
                    placeholder="******"
                  />
                  {body.password.length ? (
                    <AntDesign
                      name={hidePass1 ? "eyeo" : "eye"}
                      size={24}
                      color="#DBDBDB"
                      onPress={() => setHidePass1(!hidePass1)}
                      style={{ marginTop: 10 }}
                    />
                  ) : (
                    <View></View>
                  )}
                </View>
              </View>

              <Text
                style={{
                  fontFamily: "Prompt-Medium",
                  color: "#393939",
                  fontSize: 18,
                  marginVertical: 10,
                }}
              >
                New password again
              </Text>
              <View
                style={{
                  width: width * 0.8,
                  height: 38,
                  backgroundColor: "#fff",
                  marginTop: 10,
                  borderRadius: 10,
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <TextInput
                    onChangeText={(text) =>
                      setbody({ ...body, Repassword: text })
                    }
                    secureTextEntry={hidePass2 ? true : false}
                    style={style.textinput}
                    placeholderTextColor="#DBDBDB"
                    placeholder="******"
                  />
                  {body.Repassword.length ? (
                    <AntDesign
                      name={hidePass2 ? "eyeo" : "eye"}
                      size={24}
                      color="#DBDBDB"
                      onPress={() => setHidePass2(!hidePass2)}
                      style={{ marginTop: 10 }}
                    />
                  ) : (
                    <View></View>
                  )}
                </View>
              </View>


              {body.password == body.Repassword ? null : (
                <Text
                  style={{
                    fontFamily: "Prompt-Medium",
                    color: "red",
                    fontSize: 14,
                    marginTop: 10,
                  }}
                >
                  รหัสผ่านไม่ตรงกัน
                </Text>
              )}
            </View>
          )}
        </View>

        <View style={{ marginBottom: 20 }}></View>
      </ScrollView>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6F6",
  },
  textinput: {
    width: width * 0.7,
    height: 38,
    marginLeft: 15,
    fontFamily: "Prompt-Regular",
    fontSize: 18,
  },
  Viewtext: {
    width: width * 0.8,
    height: 38,
    backgroundColor: "#fff",
    marginTop: 10,
    borderRadius: 6,
  },
  textinput: {
    width: width * 0.7,
    height: 38,
    marginLeft: 15,
    fontFamily: "Prompt-Regular",
    fontSize: 18,
  },
});

export default Edit;
