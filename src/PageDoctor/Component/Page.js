import React, { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  Switch,
  Modal,
  RefreshControl,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { apiservice } from "../../service/api";
import { useRecoilState } from "recoil";
import { tokenState } from "../../reducer/reducer/Atom";
import { ScrollView } from "react-native-gesture-handler";
const { width, height } = Dimensions.get("screen");
const Page = ({ navigation, vete }) => {
  // console.log("vete.chatamount", vete != null && vete.vete);
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabled1, setIsEnabled1] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const toggleSwitch1 = () => setIsEnabled1((previousState) => !previousState);
  const toggleSwitch2 = () => setIsEnabled2((previousState) => !previousState);

  const [modalVisible, setModalVisible] = useState(false);
  const [token, settoken] = useRecoilState(tokenState);

  // console.log(token);
  async function putchat() {
    let chatM = {
      ...bodychat,
      chatamount: chat,
    };
    console.log(chatM);
    const response = await apiservice({
      method: "put",
      path: "api/vete/editchatamount",
      token: token.token,
      body: chatM,
    });
    console.log(response);
  }

  async function putCall() {
    let Call = {
      ...bodycall,
      voiceamount: call,
    };
    console.log("......", Call);
    const response = await apiservice({
      method: "put",
      path: "api/vete/editvoiceamount",
      token: token.token,
      body: Call,
    });
    console.log("responsecall", response);
  }

  async function putvideo() {
    let videoM = {
      ...bodyvideo,
      videoamount: video,
    };
    console.log("......", videoM);
    const response = await apiservice({
      method: "put",
      path: "api/vete/editvideoamount",
      token: token.token,
      body: videoM,
    });
    console.log("videoM>>>>>", response);
  }
  const [chat, setchat] = useState();
  const [chat1, setchat1] = useState(false);
  const [bodychat, setbodychat] = useState({
    chatamount: "",
  });

  const [modalVisiblecall, setModalVisiblecall] = useState(false);
  const [call, seCall] = useState();
  const [bodycall, setbodycall] = useState({
    voiceamount: "",
  });

  const [modalVisiblevideo, setModalVisiblevideo] = useState(false);
  const [video, setvideo] = useState();
  const [bodyvideo, setbodyvideo] = useState({
    videoamount: "",
  });

  const [refreshing, setRefreshing] = useState(false);
  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <View>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
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
              style={{ width: width, height: 250, backgroundColor: "#ffffff" }}
            >
              <View
                style={{
                  width: width,
                  height: 45,
                  backgroundColor: "#F8831C",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    fontFamily: "Prompt-Regular",
                    fontSize: 14,
                    color: "#ffff",
                    textAlign: "center",
                  }}
                >
                  เลือกราคาที่จะให้บริการ
                </Text>
              </View>

              <View style={{ flexDirection: "row", width: width, height: 79 }}>
                <TouchableOpacity
                  onPress={() => {
                    setchat("0");
                    // setchat1((val) => !val);
                  }}
                  style={{
                    flexDirection: "row",
                    width: width * 0.3333,
                    height: 79,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MaterialCommunityIcons
                    name={"checkbox-blank-circle-outline"}
                    size={24}
                    color={"#707070"}
                  />
                  <Text
                    style={{
                      fontFamily: "Prompt-Medium",
                      fontSize: 16,
                      color: "black",
                      marginHorizontal: 10,
                    }}
                  >
                    ฟรี
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setchat("100");
                    setchat1((val) => !val);
                  }}
                  style={{
                    flexDirection: "row",
                    width: width * 0.3333,
                    height: 79,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MaterialCommunityIcons
                    name={
                      chat1
                        ? "checkbox-blank-circle"
                        : "checkbox-blank-circle-outline"
                    }
                    size={24}
                    color={chat1 ? "#F8831C" : "#707070"}
                  />
                  <Text
                    style={{
                      fontFamily: "Prompt-Medium",
                      fontSize: 16,
                      color: "black",
                      marginHorizontal: 10,
                    }}
                  >
                    100
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setchat("200");
                  }}
                  style={{
                    flexDirection: "row",
                    width: width * 0.3333,
                    height: 79,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MaterialCommunityIcons
                    name="checkbox-blank-circle-outline"
                    size={24}
                    color="#707070"
                  />
                  <Text
                    style={{
                      fontFamily: "Prompt-Medium",
                      fontSize: 16,
                      color: "black",
                      marginHorizontal: 10,
                    }}
                  >
                    200
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row", width: width, height: 79 }}>
                <TouchableOpacity
                  onPress={() => {
                    setchat("300");
                  }}
                  style={{
                    flexDirection: "row",
                    width: width * 0.3333,
                    height: 79,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MaterialCommunityIcons
                    name="checkbox-blank-circle-outline"
                    size={24}
                    color="#707070"
                  />
                  <Text
                    style={{
                      fontFamily: "Prompt-Medium",
                      fontSize: 16,
                      color: "black",
                      marginHorizontal: 10,
                    }}
                  >
                    ฿300
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setchat("400");
                  }}
                  style={{
                    flexDirection: "row",
                    width: width * 0.3333,
                    height: 79,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MaterialCommunityIcons
                    name="checkbox-blank-circle-outline"
                    size={24}
                    color="#707070"
                  />
                  <Text
                    style={{
                      fontFamily: "Prompt-Medium",
                      fontSize: 16,
                      color: "black",
                      marginHorizontal: 10,
                    }}
                  >
                    400
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setchat("500");
                  }}
                  style={{
                    flexDirection: "row",
                    width: width * 0.3333,
                    height: 79,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MaterialCommunityIcons
                    name="checkbox-blank-circle-outline"
                    size={24}
                    color="#707070"
                  />
                  <Text
                    style={{
                      fontFamily: "Prompt-Medium",
                      fontSize: 16,
                      color: "black",
                      marginHorizontal: 10,
                    }}
                  >
                    500
                  </Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                onPress={() => {
                  putchat();
                  setModalVisible(!modalVisible);
                }}
                style={{
                  alignSelf: "center",
                  width: 97,
                  height: 30,
                  backgroundColor: "#FFB574",
                  justifyContent: "center",
                  borderRadius: 6,
                }}
              >
                <Text
                  style={{
                    fontFamily: "Prompt-Medium",
                    fontSize: 16,
                    color: "#ffff",
                    textAlign: "center",
                  }}
                >
                  ตกลง
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisiblecall}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisiblecall(!modalVisiblecall);
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
              style={{ width: width, height: 250, backgroundColor: "#ffffff" }}
            >
              <View
                style={{
                  width: width,
                  height: 45,
                  backgroundColor: "#F8831C",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    fontFamily: "Prompt-Regular",
                    fontSize: 14,
                    color: "#ffff",
                    textAlign: "center",
                  }}
                >
                  เลือกราคาที่จะให้บริการ
                </Text>
              </View>

              <View style={{ flexDirection: "row", width: width, height: 79 }}>
                <TouchableOpacity
                  onPress={() => {
                    seCall("0");
                    // setchat1((val) => !val);
                  }}
                  style={{
                    flexDirection: "row",
                    width: width * 0.3333,
                    height: 79,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MaterialCommunityIcons
                    name={"checkbox-blank-circle-outline"}
                    size={24}
                    color={"#707070"}
                  />
                  <Text
                    style={{
                      fontFamily: "Prompt-Medium",
                      fontSize: 16,
                      color: "black",
                      marginHorizontal: 10,
                    }}
                  >
                    ฟรี
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    seCall("100");
                    // setchat1((val) => !val);
                  }}
                  style={{
                    flexDirection: "row",
                    width: width * 0.3333,
                    height: 79,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MaterialCommunityIcons
                    name={
                      chat1
                        ? "checkbox-blank-circle"
                        : "checkbox-blank-circle-outline"
                    }
                    size={24}
                    color={chat1 ? "#F8831C" : "#707070"}
                  />
                  <Text
                    style={{
                      fontFamily: "Prompt-Medium",
                      fontSize: 16,
                      color: "black",
                      marginHorizontal: 10,
                    }}
                  >
                    100
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    seCall("200");
                  }}
                  style={{
                    flexDirection: "row",
                    width: width * 0.3333,
                    height: 79,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MaterialCommunityIcons
                    name="checkbox-blank-circle-outline"
                    size={24}
                    color="#707070"
                  />
                  <Text
                    style={{
                      fontFamily: "Prompt-Medium",
                      fontSize: 16,
                      color: "black",
                      marginHorizontal: 10,
                    }}
                  >
                    200
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row", width: width, height: 79 }}>
                <TouchableOpacity
                  onPress={() => {
                    seCall("300");
                  }}
                  style={{
                    flexDirection: "row",
                    width: width * 0.3333,
                    height: 79,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MaterialCommunityIcons
                    name="checkbox-blank-circle-outline"
                    size={24}
                    color="#707070"
                  />
                  <Text
                    style={{
                      fontFamily: "Prompt-Medium",
                      fontSize: 16,
                      color: "black",
                      marginHorizontal: 10,
                    }}
                  >
                    ฿300
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    seCall("400");
                  }}
                  style={{
                    flexDirection: "row",
                    width: width * 0.3333,
                    height: 79,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MaterialCommunityIcons
                    name="checkbox-blank-circle-outline"
                    size={24}
                    color="#707070"
                  />
                  <Text
                    style={{
                      fontFamily: "Prompt-Medium",
                      fontSize: 16,
                      color: "black",
                      marginHorizontal: 10,
                    }}
                  >
                    400
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    seCall("500");
                  }}
                  style={{
                    flexDirection: "row",
                    width: width * 0.3333,
                    height: 79,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MaterialCommunityIcons
                    name="checkbox-blank-circle-outline"
                    size={24}
                    color="#707070"
                  />
                  <Text
                    style={{
                      fontFamily: "Prompt-Medium",
                      fontSize: 16,
                      color: "black",
                      marginHorizontal: 10,
                    }}
                  >
                    500
                  </Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                onPress={() => {
                  putCall();
                  setModalVisiblecall(!modalVisiblecall);
                }}
                style={{
                  alignSelf: "center",
                  width: 97,
                  height: 30,
                  backgroundColor: "#FFB574",
                  justifyContent: "center",
                  borderRadius: 6,
                }}
              >
                <Text
                  style={{
                    fontFamily: "Prompt-Medium",
                    fontSize: 16,
                    color: "#ffff",
                    textAlign: "center",
                  }}
                >
                  ตกลง
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* {video} */}

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisiblevideo}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisiblevideo(!modalVisiblevideo);
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
              style={{ width: width, height: 250, backgroundColor: "#ffffff" }}
            >
              <View
                style={{
                  width: width,
                  height: 45,
                  backgroundColor: "#F8831C",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    fontFamily: "Prompt-Regular",
                    fontSize: 14,
                    color: "#ffff",
                    textAlign: "center",
                  }}
                >
                  เลือกราคาที่จะให้บริการ
                </Text>
              </View>

              <View style={{ flexDirection: "row", width: width, height: 79 }}>
                <TouchableOpacity
                  onPress={() => {
                    setvideo("0");
                    // setchat1((val) => !val);
                  }}
                  style={{
                    flexDirection: "row",
                    width: width * 0.3333,
                    height: 79,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MaterialCommunityIcons
                    name={
                      chat1
                        ? "checkbox-blank-circle"
                        : "checkbox-blank-circle-outline"
                    }
                    size={24}
                    color={chat1 ? "#F8831C" : "#707070"}
                  />
                  <Text
                    style={{
                      fontFamily: "Prompt-Medium",
                      fontSize: 16,
                      color: "black",
                      marginHorizontal: 10,
                    }}
                  >
                    ฟรี
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setvideo("100");
                    // setchat1((val) => !val);
                  }}
                  style={{
                    flexDirection: "row",
                    width: width * 0.3333,
                    height: 79,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MaterialCommunityIcons
                    name={
                      chat1
                        ? "checkbox-blank-circle"
                        : "checkbox-blank-circle-outline"
                    }
                    size={24}
                    color={chat1 ? "#F8831C" : "#707070"}
                  />
                  <Text
                    style={{
                      fontFamily: "Prompt-Medium",
                      fontSize: 16,
                      color: "black",
                      marginHorizontal: 10,
                    }}
                  >
                    100
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setvideo("200");
                  }}
                  style={{
                    flexDirection: "row",
                    width: width * 0.3333,
                    height: 79,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MaterialCommunityIcons
                    name="checkbox-blank-circle-outline"
                    size={24}
                    color="#707070"
                  />
                  <Text
                    style={{
                      fontFamily: "Prompt-Medium",
                      fontSize: 16,
                      color: "black",
                      marginHorizontal: 10,
                    }}
                  >
                    200
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row", width: width, height: 79 }}>
                <TouchableOpacity
                  onPress={() => {
                    setvideo("300");
                  }}
                  style={{
                    flexDirection: "row",
                    width: width * 0.3333,
                    height: 79,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MaterialCommunityIcons
                    name="checkbox-blank-circle-outline"
                    size={24}
                    color="#707070"
                  />
                  <Text
                    style={{
                      fontFamily: "Prompt-Medium",
                      fontSize: 16,
                      color: "black",
                      marginHorizontal: 10,
                    }}
                  >
                    ฿300
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setvideo("400");
                  }}
                  style={{
                    flexDirection: "row",
                    width: width * 0.3333,
                    height: 79,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MaterialCommunityIcons
                    name="checkbox-blank-circle-outline"
                    size={24}
                    color="#707070"
                  />
                  <Text
                    style={{
                      fontFamily: "Prompt-Medium",
                      fontSize: 16,
                      color: "black",
                      marginHorizontal: 10,
                    }}
                  >
                    400
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setvideo("500");
                  }}
                  style={{
                    flexDirection: "row",
                    width: width * 0.3333,
                    height: 79,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MaterialCommunityIcons
                    name="checkbox-blank-circle-outline"
                    size={24}
                    color="#707070"
                  />
                  <Text
                    style={{
                      fontFamily: "Prompt-Medium",
                      fontSize: 16,
                      color: "black",
                      marginHorizontal: 10,
                    }}
                  >
                    500
                  </Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                onPress={() => {
                  putvideo();
                  setModalVisiblevideo(!modalVisiblevideo);
                }}
                style={{
                  alignSelf: "center",
                  width: 97,
                  height: 30,
                  backgroundColor: "#FFB574",
                  justifyContent: "center",
                  borderRadius: 6,
                }}
              >
                <Text
                  style={{
                    fontFamily: "Prompt-Medium",
                    fontSize: 16,
                    color: "#ffff",
                    textAlign: "center",
                  }}
                >
                  ตกลง
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <View
          style={{
            width: width * 0.95,
            alignSelf: "center",
            height: height * 0.55,
          }}
        >
          <Text
            style={{
              fontFamily: "Prompt-Regular",
              fontSize: 14,
              color: "#DBDBDB",
              marginVertical: 8,
              marginTop: 20,
            }}
          >
            Edit description
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: "#242134",
              fontFamily: "Prompt-Regular",
            }}
          >
            {vete != null && vete.vete.intro}
          </Text>

          <View
            style={{
              borderBottomWidth: 1,
              borderColor: "#F8831C",
              marginTop: 20,
            }}
          />
          <View
            style={{
              width: width,
              height: 40,
              marginTop: 5,
              flexDirection: "row",
            }}
          >
            <View
              style={{
                width: width * 0.5,
                height: 40,

                justifyContent: "center",
                marginLeft: 5,
              }}
            >
              <Text
                styl={{
                  fontFamily: "Prompt-Medium",
                  color: "black",
                  fontSize: 12,
                }}
              >
                กรุณาเลือกการให้บริการคำปรึกษา
              </Text>
            </View>
            <View
              style={{
                width: width * 0.45,
                height: 40,
                justifyContent: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  alignSelf: "flex-end",
                  width: 108,
                  height: 26,
                  backgroundColor: "#DBDBDB",
                  borderRadius: 6,
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontFamily: "Prompt-Medium",
                    color: "#fff",
                    fontSize: 14,
                  }}
                >
                  ให้บริการปรึกษา
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={style.CCV}>
            <View
              style={{
                width: width * 0.12,
                height: 40,
                marginLeft: 5,
                justifyContent: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  width: 34,
                  height: 31,
                  borderRadius: 6,
                  justifyContent: "center",
                  borderColor: "#707070",
                  borderRadius: 30,
                }}
              >
                <View
                  style={{
                    backgroundColor: "#1D9459",
                    width: 40,
                    height: 40,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 30,
                  }}
                >
                  <Image
                    resizeMode={"stretch"}
                    style={{ width: 25, height: 25 }}
                    source={require("../../image/chat.png")}
                  />
                </View>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={() => {
                setModalVisible(!modalVisible);
                // setModalVisiblevideo(!modalVisiblevideo);
              }}
              style={{
                width: width * 0.2,
                height: 40,
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  textAlign: "right",
                  fontFamily: "Prompt-SemiBold",
                  color: "black",
                  fontSize: 10,
                }}
              >
                เลือกราคา
              </Text>
            </TouchableOpacity>
            <View
              style={{
                width: width * 0.25,
                height: 40,
                justifyContent: "center",
              }}
            >
              <TouchableOpacity onPress={() => {}} style={style.BH}>
                <Text
                  style={{
                    textAlign: "center",
                    fontFamily: "Prompt-SemiBold",
                    color: "black",
                    fontSize: 10,
                  }}
                >
                  {/* ฿300 */}฿{vete != null && vete.vete.chatamount}
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                width: width * 0.35,
                height: 40,
                justifyContent: "center",
              }}
            >
              <Switch
                trackColor={{ false: "#767577", true: "#767577" }}
                thumbColor={isEnabled ? "#FF7346" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          </View>

          <View style={style.CCV}>
            <View
              style={{
                width: width * 0.12,
                height: 40,
                marginLeft: 5,
                justifyContent: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  width: 34,
                  height: 31,
                  borderRadius: 6,
                  justifyContent: "center",
                  borderColor: "#707070",
                  borderRadius: 30,
                }}
              >
                <View
                  style={{
                    backgroundColor: "#1D4594",
                    width: 40,
                    height: 40,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 30,
                  }}
                >
                  <Image
                    resizeMode={"stretch"}
                    style={{ width: 25, height: 25 }}
                    source={require("../../image/call.png")}
                  />
                </View>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={() => {
                setModalVisiblecall(!modalVisiblecall);
              }}
              style={{
                width: width * 0.2,
                height: 40,
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  textAlign: "right",
                  fontFamily: "Prompt-SemiBold",
                  color: "black",
                  fontSize: 10,
                }}
              >
                เลือกราคา
              </Text>
            </TouchableOpacity>
            <View
              style={{
                width: width * 0.25,
                height: 40,
                justifyContent: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  setModalVisiblecall(!modalVisiblecall);
                }}
                style={style.BH}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontFamily: "Prompt-SemiBold",
                    color: "black",
                    fontSize: 10,
                  }}
                >
                  ฿{vete != null && vete.vete.voiceamount}
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: width * 0.35,
                height: 40,
                justifyContent: "center",
              }}
            >
              <Switch
                trackColor={{ false: "#767577", true: "#767577" }}
                thumbColor={isEnabled1 ? "#FF7346" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch1}
                value={isEnabled1}
              />
            </View>
          </View>

          <View style={style.CCV}>
            <View
              style={{
                width: width * 0.12,
                height: 40,
                marginLeft: 5,
                justifyContent: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  width: 34,
                  height: 31,
                  borderRadius: 6,
                  justifyContent: "center",
                  borderColor: "#707070",
                  borderRadius: 30,
                }}
              >
                <View
                  style={{
                    backgroundColor: "#5D1D94",
                    width: 40,
                    height: 40,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 30,
                  }}
                >
                  <Image
                    resizeMode={"stretch"}
                    style={{ width: 25, height: 20 }}
                    source={require("../../image/videocall.png")}
                  />
                </View>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={() => {
                // setModalVisible(!modalVisible);
                setModalVisiblevideo(!modalVisiblevideo);
              }}
              style={{
                width: width * 0.2,
                height: 40,
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  textAlign: "right",
                  fontFamily: "Prompt-SemiBold",
                  color: "black",
                  fontSize: 10,
                }}
              >
                เลือกราคา
              </Text>
            </TouchableOpacity>
            <View
              style={{
                width: width * 0.25,
                height: 40,
                justifyContent: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  // setconsult((val) => !val);
                }}
                style={style.BH}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontFamily: "Prompt-SemiBold",
                    color: "black",
                    fontSize: 10,
                  }}
                >
                  ฿{vete != null && vete.vete.chatamount}
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: width * 0.35,
                height: 40,
                justifyContent: "center",
              }}
            >
              <Switch
                trackColor={{ false: "#767577", true: "#767577" }}
                thumbColor={isEnabled2 ? "#FF7346" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch2}
                value={isEnabled2}
              />
            </View>
          </View>
        </View>
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
  BH: {
    width: 59,
    height: 34,
    backgroundColor: "#FFFFFF",
    borderRadius: 6,
    justifyContent: "center",
    borderColor: "#707070",
    borderWidth: 0.7,
    alignSelf: "center",
    marginLeft: 20,
  },
});

export default Page;
