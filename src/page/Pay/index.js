import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Platform,
  Modal,
  TouchableOpacity,
} from "react-native";
import { Constants } from "expo";
import WebView from "react-native-webview";
// import { apiservice } from "../../apiservice/api";
// import { useRecoilState } from "recoil";
// import { tokenstate } from "../../reducer/reducer";
const { width, height } = Dimensions.get("screen");

export default class App extends Component {
  onNavigationStateChange = async (navState) => {
    if (
      navState.url.indexOf(
        "http://54.169.196.73:5000/api/balance/createresult"
      ) === 0
    ) {
      // const [token, setToken] = useRecoilState(tokenstate);
      // const regex = /#access_token=(.+)/;
      // let accessToken = navState.url.match(regex)[1];
      // console.log(accessToken);
      // this.props.navigation.navigate("Login");
      // console.log(navState.url.split("success")[1].replace("/", ""));
      //   let params = navState.url.split("success")[1].replace("/", "");
      //   let key = params.split("?");
      //   let access = key[0];
      //   let picture = key[1].split("&")[0].replace("picture=", "");
      //   let name = key[1].split("&")[1].replace("name=", "");
      //   const response = await apiservice({
      //     method: "post",
      //     path: "/authen/createLine",
      //     body: {
      //       telephoneNo: null,
      //       image_Profile: picture,
      //       fullname: name,
      //       email: null,
      //       password: access,
      //       gender: null,
      //       birthday: null,
      //       username: access,
      //       Type: "LINE",
      //     },
      //   });
      //   if (response.status == 200) {
      //     setTimeout(() => {
      //       this.props.navigation.navigate("Index", {
      //         screen: "Home",
      //         params: { token: response.data },
      //       });
      //       // this.props.navigation.navigate("Home", { token: response.data });
      //     }, 300);
      //   }

      this.setState({ modalVisible: true });
      //   this.props.navigation.goBack();
    }
  };
  state = {
    modalVisible: false,
  };
  render() {
    const url = this.props.route.params.PaymentUrl;
    const test = this.props.route.params.data;
    console.log("test", test);
    // console.log("url.....", url);  "video" "call"
    // "https://bluedragonlottery.com/dealers/%E0%B8%A1%E0%B8%B1%E0%B8%87%E0%B8%81%E0%B8%A3%E0%B8%9F%E0%B9%89%E0%B8%B2_%E0%B8%A5%E0%B9%87%E0%B8%AD%E0%B8%95%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B8%B5%E0%B9%88_%E0%B8%AD%E0%B8%AD%E0%B8%99%E0%B9%84%E0%B8%A5%E0%B8%99%E0%B9%8C_888-xs5bccqbdd";

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            this.setState({ modalVisible: true });
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
                จ่ายเงินสำเร็จ
              </Text>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("Home");

                  if (test.item == "chat") {
                    console.log("test.item", test.item);
                    this.props.navigation.navigate("Home");
                  } else if (test.item == "call") {
                    console.log("test.item", test.item);
                    this.props.navigation.navigate("RTCView", {
                      appId: "6f149b4cb1b84f2ba4805accb2946326",
                      token:
                        "0066f149b4cb1b84f2ba4805accb2946326IAD7eTqxPx0Wix+CTUBC2ZYfmYbpXQoKEmN/QDqYzz4UxNkxik8AAAAAEABGxiZqB2wiYQEAAQAHbCJh",
                      channelName: "test",
                      video: false,
                    });
                  } else if (test.item == "video") {
                    console.log("test.item", test.item);
                    this.props.navigation.navigate("RTCView", {
                      appId: "6f149b4cb1b84f2ba4805accb2946326",
                      token:
                        "0066f149b4cb1b84f2ba4805accb2946326IAD7eTqxPx0Wix+CTUBC2ZYfmYbpXQoKEmN/QDqYzz4UxNkxik8AAAAAEABGxiZqB2wiYQEAAQAHbCJh",
                      channelName: "test",
                      video: true,
                    });
                  }
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
                    color: "#FFF",
                    fontSize: 18,
                  }}
                >
                  ยืนยัน
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <WebView
          source={{
            uri: url,
          }}
          onNavigationStateChange={this.onNavigationStateChange}
          startInLoadingState
          scalesPageToFit
          javaScriptEnabled
          style={{ flex: 1 }}
        />
      </SafeAreaView>
    );
  }
}
