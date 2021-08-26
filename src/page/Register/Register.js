import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Linking,
  Modal,
} from "react-native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { apiservice } from "../../service/api";

const { width, height } = Dimensions.get("screen");

const Register = ({ navigation }) => {
  const [hidePass, setHidePass] = useState(true);
  const [hidePass1, setHidePass1] = useState(true);
  const [checkbox, setcheckbox] = useState(false);
  const [state, setState] = useState({
    username: "",
    password: "",
    email: "",
    telNo: "",
    name: "",
    Repassword: "",
    term: true,
  });

  const emailValid =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  function errors({ value, type }) {
    if (type == "email") {
      return emailValid.test(value);
    }
  }

  async function Vete() {
    try {
      const response = await apiservice({
        method: "Post",
        path: "api/vete/register",
        body: state,
      });
      console.log(response.data);
      if (response.status == 200) {
        Linking.openURL(response.data);
      }

    } catch (error) {
      console.log(error);
    }
  }

  async function register() {
    try {
      const response = await apiservice({
        method: "Post",
        path: "api/user/register",
        body: state,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  const [reference, setreference] = useState("");
  const [otp, setotp] = useState("");

  async function EmailOtp() {
    try {
      const response = await apiservice({
        method: "Post",
        path: "api/user/newemail",
        body: { email: state.email },
      });
      setreference(response.data);
      console.log("response", response.data);
      // console.log("reference>>>",reference);
    } catch (error) {
      console.log(error);
    }
  }
  async function verifyemail() {
    try {
      const response = await apiservice({
        method: "Post",
        path: "api/user/verifyemail",
        body: {
          email: state.email,
          reference: reference.reference,
          otp: otp,
        },
      });
      console.log("response>>>>>", response);
      console.log(reference);
      console.log(otp);
      console.log(state.email);
    } catch (error) {
      console.log(error);
    }
  }
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "#000000aa",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 320,
              height: 190,
              backgroundColor: "#fff",
              borderRadius: 50,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "Prompt-Medium",
                color: "#393939",
                fontSize: 18,
                marginTop: 10,
              }}
            >
              Send Email
            </Text>
            <View
              style={{
                width: width * 0.6,
                height: 38,
                backgroundColor: "#F6F6F6",
                marginTop: 10,
                borderRadius: 10,
              }}
            >
              <TextInput
                style={{
                  width: width * 0.3,
                  height: 38,
                  marginLeft: 15,
                  fontFamily: "Prompt-Regular",
                  fontSize: 18,
                }}
                onChangeText={(text) => setotp(text)}
                placeholderTextColor="#DBDBDB"
                placeholder="*******"
              />
            </View>

            <TouchableOpacity
              onPress={() => {
                verifyemail();
                setTimeout(() => {
                  register();
                  navigation.navigate("LoginAll");
                }, 1000);

                setModalVisible(!modalVisible);
              }}
              style={{
                width: 100,
                height: 50,
                backgroundColor: "#F8831C",
                justifyContent: "center",
                marginTop: 10,
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontFamily: "Prompt-Medium",
                  color: "#393939",
                  fontSize: 18,
                }}
              >
                ยืนยัน
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      
      <ScrollView>
        <View
          style={{
            width: width * 0.93,
            height: 220,
            justifyContent: "center",
            alignSelf: "center",

            marginTop: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignSelf: "center",
            }}
          >
            <Image
              resizeMode={"stretch"}
              style={{
                width: width * 0.85,
                height: height * 0.2,
              }}
              source={require("../../image/HeaderHome.png")}
            />
          </View>
        </View>

        <View
          style={{
            width: width * 0.8,
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "Prompt-Medium",
              color: "#393939",
              fontSize: 18,
            }}
          >
            Username
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
            <TextInput
              style={styles.textinput}
              onChangeText={(text) => setState({ ...state, username: text })}
              placeholderTextColor="#DBDBDB"
              placeholder="User name"
            />
          </View>
          {state.username.length > 0 && state.username.length < 6 && (
            <Text
              style={{
                fontFamily: "Prompt-Medium",
                color: "red",
                fontSize: 14,
                marginTop: 10,
              }}
            >
              username ไม่น้อยกว่า 6 ตัว
            </Text>
          )}
          <Text
            style={{
              fontFamily: "Prompt-Medium",
              color: "#393939",
              fontSize: 18,
              marginTop: 15,
            }}
          >
            Password
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
                onChangeText={(text) => setState({ ...state, password: text })}
                secureTextEntry={hidePass ? true : false}
                style={styles.textinput}
                placeholderTextColor="#DBDBDB"
                placeholder="Password"
              />
              {state.password.length ? (
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
          {state.password.length > 0 && state.password.length < 6 && (
            <Text
              style={{
                fontFamily: "Prompt-Medium",
                color: "red",
                fontSize: 14,
                marginTop: 10,
              }}
            >
              password ไม่น้อยกว่า 6 ตัว
            </Text>
          )}

          <Text
            style={{
              fontFamily: "Prompt-Medium",
              color: "#393939",
              fontSize: 18,
              marginTop: 15,
            }}
          >
            Password Again
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
                  setState({ ...state, Repassword: text })
                }
                secureTextEntry={hidePass1 ? true : false}
                style={styles.textinput}
                placeholderTextColor="#DBDBDB"
                placeholder="Password"
              />
              {state.password.length ? (
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

          {state.password == state.Repassword ? null : (
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

          <Text
            style={{
              fontFamily: "Prompt-Medium",
              color: "#393939",
              fontSize: 18,
              marginTop: 10,
            }}
          >
            Email
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
            <TextInput
              style={styles.textinput}
              onChangeText={(text) => setState({ ...state, email: text })}
              placeholderTextColor="#DBDBDB"
              placeholder="Email"
            />
          </View>
          {state.email != "" && !errors({ value: state.email, type: "email" }) && (
            <Text
              style={{
                fontFamily: "Prompt-Medium",
                color: "red",
                fontSize: 14,
                marginTop: 10,
              }}
            >
              รูปแบบของอีเมลไม่ถูกต้อง
            </Text>
          )}

          <Text
            style={{
              fontFamily: "Prompt-Medium",
              color: "#393939",
              fontSize: 18,
              marginTop: 15,
            }}
          >
            Phone
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
            <TextInput
              maxLength={10}
              style={styles.textinput}
              onChangeText={(text) => setState({ ...state, telNo: text })}
              placeholderTextColor="#DBDBDB"
              placeholder="Phone"
            />
          </View>
          {state.telNo.length > 0 && state.telNo.length < 10 && (
            <Text
              style={{
                fontFamily: "Prompt-Medium",
                color: "red",
                fontSize: 14,
                marginTop: 10,
              }}
            >
              กรุณากรอกหมายเลขเบอร์โทรศัพท์ให้ครบ 10 หลัก
            </Text>
          )}

          <Text
            style={{
              fontFamily: "Prompt-Medium",
              color: "#393939",
              fontSize: 18,
              marginTop: 15,
            }}
          >
            Name
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
            <TextInput
              style={styles.textinput}
              onChangeText={(text) => setState({ ...state, name: text })}
              placeholderTextColor="#DBDBDB"
              placeholder="ชื่อผู้ใช้งาน"
            />
          </View>
        </View>

        <View
          style={{
            width: width * 0.8,
            height: 60,
            alignSelf: "center",
            marginTop: 20,
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setcheckbox((val) => !val);
            }}
          >
            {checkbox ? (
              <MaterialCommunityIcons
                name="checkbox-blank"
                size={36}
                color="#F8831C"
              />
            ) : (
              <MaterialCommunityIcons
                name="checkbox-blank-outline"
                size={36}
                color="black"
              />
            )}
          </TouchableOpacity>
          <View style={{ width: width * 0.7, height: 50 }}>
            <Text
              style={{
                fontFamily: "Prompt-Medium",
                fontSize: 18,
                color: "#000",
              }}
            >
              ลงทะเบียนเป็นคุณหมอ
            </Text>
            <Text
              style={{
                fontSize: 11,
                fontFamily: "Prompt-Medium",
                color: "#000",
              }}
            >
              หากต้องการเป็นแค่ผู้ใช้งาน ไม่ต้องเลือกช่องนี้
            </Text>
          </View>
        </View>
        <View
          style={{
            width: width * 0.9,
            height: 70,
            marginTop: 20,
            alignSelf: "center",
          }}
        >
          {checkbox ? (
            <TouchableOpacity
              onPress={() => {
                // setModalVisible(!modalVisible);
                // EmailOtp();
                // Vete()
                Vete()
              }}
              style={{
                backgroundColor: "#F8831C",
                width: width * 0.8,
                height: 50,
                alignSelf: "center",
                justifyContent: "center",
                borderRadius: 6,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "#fff",
                  fontSize: 20,
                  fontFamily: "Prompt-Medium",
                }}
              >
                ยืนยัน
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                setModalVisible(!modalVisible);
                EmailOtp();
                // Linking.openURL("https://www.google.co.th/?hl=th")
              }}
              style={{
                backgroundColor: "#F8831C",
                width: width * 0.8,
                height: 50,
                alignSelf: "center",
                justifyContent: "center",
                borderRadius: 6,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "#fff",
                  fontSize: 20,
                  fontFamily: "Prompt-Medium",
                }}
              >
                ยืนยัน
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6F6",
    // alignItems: "center",
  },
  textinput: {
    width: width * 0.7,
    height: 38,
    marginLeft: 15,
    fontFamily: "Prompt-Regular",
    fontSize: 18,
  },
});
export default Register;
