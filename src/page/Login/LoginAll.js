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
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useRecoilState } from "recoil";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { Authen, tokenState } from "../../reducer/reducer/Atom";
import { checkUser, checkAdmin } from "../../reducer/reducer/reducer";
import { apiservice } from "../../service/api";

const { width, height } = Dimensions.get("screen");
export default function App({ navigation }) {
  // const dispatch = useDispatch();
  // const auth = useSelector((state) => state.auth);

  // console.log(auth.user);

  // const onLogin = () => {
  //   dispatch(login({ password: "password", email: "DATA1", remember: true }));
  // };
  // const [CheckUser, setCheckUser] = useRecoilState(checkUser);
  // const [CheckAdmin, setcheckAdmin] = useRecoilState(checkAdmin);
  const [token, settoken] = useRecoilState(tokenState);

  const [username, setusername] = useState(null);
  const [password, setpassword] = useState(null);

  // const [Check, setCheck] = useRecoilState(CheckLogin);
  // const [CheckV, setCheckVETE] = useRecoilState(CheckVETE);
  const [errorU, seterror] = useState(false);

  const [Auth, setAuth] = useRecoilState(Authen);
  const [hidePass1, setHidePass1] = useState(true);
  async function Login() {
    try {
      const response = await apiservice({
        method: "Post",
        path: "api/user/login",
        body: { username: username, password: password },
      });
      console.log(response);
      seterror(response.data.errorCode);

      setAuth({
        auth: true,
      });
      if (response.data.role == "USER") {
        settoken(response.data);
      } else if (response.data.role == "VETE") {
        // setCheckVETE("VETE")
        settoken(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          width: width * 0.93,
          height: 220,
          justifyContent: "center",
          alignSelf: "center",
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
          height: 300,
          //   backgroundColor: "red",
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
            borderColor: errorU ? "red" : "#ffff",
            borderWidth: 1,
          }}
        >
          <TextInput
            onChangeText={(text) => {
              setusername(text);
            }}
            style={{
              width: width * 0.7,
              height: 38,
              marginLeft: 15,
            }}
          />
        </View>
        <Text
          style={{
            fontFamily: "Prompt-Medium",
            color: "#393939",
            fontSize: 18,
            marginTop: 30,
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
            flexDirection: "row",
            borderColor: errorU ? "red" : "#ffff",
            borderWidth: 1,
          }}
        >
          <TextInput
            secureTextEntry={hidePass1 ? true : false}
            onChangeText={(text) => {
              setpassword(text);
            }}
            style={{
              width: width * 0.7,
              height: 38,
              marginLeft: 15,
            }}
          />

          {password ? (
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
        {errorU && (
          <Text
            style={{
              fontFamily: "Prompt-Medium",
              color: "red",
              fontSize: 14,
              marginTop: 10,
            }}
          >
            Invalid Username or Password
          </Text>
        )}

        <Text
          style={{
            fontFamily: "Prompt-Regular",
            color: "#393939",
            fontSize: 18,
            marginTop: 20,
            textAlign: "right",
          }}
        >
          ลืม password?
        </Text>
      </View>

      <View
        style={{
          width: width * 0.9,
          height: 70,

          alignSelf: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            Login();
            // navigation.navigate("Home");
            // setCheckUser("User")

            // setcheckAdmin("Admin")
            // navigation.navigate("HomeDortor");
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6F6",
    justifyContent: "center",
  },
});
