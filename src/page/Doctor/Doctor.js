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
  Modal,
  TextInput,
  Linking,
} from "react-native";
import DoctorLike from "../../component/Doctor";

import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { apiservice, apitest } from "../../service/api";

import MD5 from "crypto-js/md5";
import Qs from "qs";
import { object } from "prop-types";
import { LongPressGestureHandler } from "react-native-gesture-handler";

import Style from "./Style";
import { tokenState } from "../../reducer/reducer/Atom";
import { useRecoilState } from "recoil";

const { width, height } = Dimensions.get("screen");

const Doctor = ({ navigation, route }) => {
  const data = route.params.item;
  // console.log(data);

  const [chat, setchat] = useState(false);
  const [consult, setconsult] = useState(false);
  const [video, setvideo] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  function chatDortor() {
    if (chat) {
      setchat(false);
    } else {
      setchat(true);
      setconsult(false);
      setvideo(false);
    }
  }

  function consultDortor() {
    if (consult) {
      setconsult(false);
    } else {
      setconsult(true);
      setchat(false);
      setvideo(false);
    }
  }

  function videoDortor() {
    if (video) {
      setvideo(false);
    } else {
      setvideo(true);
      setchat(false);
      setconsult(false);
    }
  }

  const [body, setbody] = useState({
    MerchantCode: "M032077",
    OrderNo: Date.now(),
    CustomerId: "gu",
    Amount: "",
    PhoneNumber: "0818275898",
    Description: "Test01",
    ChannelCode: "creditcard",
    Currency: "764",
    LangCode: "TH",
    RouteNo: "1",
    IPAddress: "203.255.255.155",
    ApiKey: "MFSufQZ8jftF8XjwH9sBV5wd9W6RXsER9ZgtIuY7alf8u3HbSYAt33vtORoh3dOz",
    MD5: "ejLjPUmXrTFuHyjGGRTNPFpbRVhWlkC46cpc7DXTIq1m9ZUw5nyqr9YLZiIt4fMzBdeVsXXEIRTdYVoc4Too5RavoXOl7MCI61dY0IJ2nOOTdC5mLoE1a2W7Iij3aAjmjHKgS5DktT1FpfaUbPjQ2kMQEDZhTsqIOfaX3",
  });

  const [user, setuser] = useState("");

  const [token, settoken] = useRecoilState(tokenState);
  async function Getuser() {
    const response = await apiservice({
      method: "Get",
      path: "api/user/profile",
      token: token.token,
    });
    setuser(response.data);
    // console.log(user);
  }
  // console.log(user);

  useEffect(() => {
    Getuser();
  }, [token]);

  const [Score, setScore] = useState("");

  async function Vete() {
    // console.log("Score", typeof Score);
    // let Allpay = {
    //   ...body,
    //   Amount: (Score * 100).toString(),
    // };
    // console.log("....", Allpay);
    let Allpay = "";
    for (const key of Object.keys(body)) {
      Allpay += body[key];
    }
    const CheckSum = MD5(Allpay).toString();
    body.CheckSum = CheckSum;
    delete body.MD5;
    const DataKa = Qs.stringify(body);

    // console.log("DataKa......", DataKa);

    const response = await apitest({
      method: "Post",
      body: DataKa,
      path: "https://sandbox-appsrv2.chillpay.co/api/v2/Payment/",
    });
    console.log(response);
    const responsepay = await apiservice({
      method: "Post",
      path: "api/balance/createorder",
      body: {
        status: response.Status,
        Code: response.Code,
        Message: response.Message,
        TransactionId: response.TransactionId,
        Amount: response.Amount,
        OrderNo: response.OrderNo,
        CustomerId: response.CustomerId,
        ChannelCode: response.ChannelCode,
        IpAddress: response.IpAddress,
        Token: response.Token,
        CreatedDate: response.CreatedDate,
        ExpiredDate: response.ExpiredDate,
        item: FT,
      },
    });
    console.log("responsepay.......", responsepay.data);
    navigation.navigate("Pay", {
      PaymentUrl: response.PaymentUrl,
      data: responsepay.data,
    });
  }
  // Linking.openURL(response.PaymentUrl);
  // console.log(response);
  // Linking.openURL(
  //   "https://sandbox-appsrv2.chillpay.co/api/v2/Payment/" + ALLpay
  // );
  const [FT, setFT] = useState("");

  return (
    <View style={style.container}>
      <SafeAreaView style={{ backgroundColor: "#F8831C" }} />
      <ScrollView>
        <DoctorLike navigation={navigation} header={"DOCTOR"} />
        <View
          style={{
            width: width,
            height: height * 0.33,
            flexDirection: "row",
            marginTop: 10,
          }}
        >
          {/* วิว */}
          <View
            style={{
              width: width * 0.25,
              height: height * 0.3,
            }}
          >
            <View
              style={{
                width: width * 0.28,
                alignSelf: "center",
                marginTop: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  color: "#F67118",
                  fontFamily: "Prompt-Regular",
                  left: 15,
                }}
              >
                <Image
                  style={{ width: 14, height: 13 }}
                  source={require("../../image/star.png")}
                />
                4.2
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  color: "#F67118",
                  fontFamily: "Prompt-Regular",
                  textAlign: "center",
                }}
              >
                150 Reviews
              </Text>
            </View>
          </View>

          {/* รูป */}
          <View
            style={{
              width: width * 0.5,
              height: height * 0.3,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 10,
            }}
          >
            <Image
              style={{ width: 145, height: 145, borderRadius: 80 }}
              source={require("../../image/Dortor1.jpeg")}
            />
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Prompt-SemiBold",
                marginTop: 15,
              }}
            >
              Dr.{data.name}
            </Text>
            <Text
              style={{
                fontSize: 10,
                fontFamily: "Prompt-Regular",
                color: "#898A8F",
              }}
            >
              {data.educationalHistory[1]},{data.scholarships[1]},
              {data.workplaceHistory[1]},
            </Text>
          </View>

          <View
            style={{
              width: width * 0.25,
              height: height * 0.2,
            }}
          >
            <View
              style={{
                width: width * 0.2,
                height: height * 0.15,
                alignSelf: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  width: width * 0.17,
                  backgroundColor: "#F24DAB",
                  height: height * 0.035,
                  alignSelf: "center",

                  marginTop: 20,
                }}
              >
                <View
                  style={{ flexDirection: "row", marginTop: 5, marginLeft: 5 }}
                >
                  <AntDesign
                    name="heart"
                    size={15}
                    color="#fff"
                    style={{ marginHorizontal: 2 }}
                  />
                  <Text
                    style={{
                      fontSize: 12,
                      fontFamily: "Prompt-Regular",
                      color: "#fff",
                      marginLeft: 9,
                    }}
                  >
                    Like
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: width * 0.17,
                  backgroundColor: "#5EC73F",
                  height: height * 0.035,
                  alignSelf: "center",

                  marginTop: 15,
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: "Prompt-Regular",
                    color: "#fff",
                    textAlign: "center",
                  }}
                >
                  Available
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  width: width * 0.187,
                  height: 100,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{ width: 23, height: 23 }}
                  source={require("../../image/years1.png")}
                />
                <Text style={{ fontSize: 17, fontFamily: "Prompt-Regular" }}>
                  {data.workExperience} Years
                </Text>
                <Text
                  style={{
                    fontSize: 11,
                    fontFamily: "Prompt-Regular",
                    color: "#BBB9B9",
                  }}
                >
                  Experiences
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            borderBottomWidth: 0.7,
            borderBottomColor: "#F8831C",
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
              width: width * 0.6,
              height: 40,
              justifyContent: "center",
              marginLeft: 5,
            }}
          >
            <Text
              styl={{
                fontFamily: "Prompt-Medium",
                color: "#393939",
                fontSize: 12,
              }}
            >
              กรุณาเลือกการให้บริการคำปรึกษา
            </Text>
          </View>
          <View
            style={{
              width: width * 0.35,
              height: 40,
              justifyContent: "center",
            }}
          >
            {Score !== "" ? (
              <TouchableOpacity
                onPress={() => {
                  // setModalVisible(!modalVisible);
                  Vete();
                  // navigation.navigate("Chat", { data, user });
                  // console.log("data.......", user);
                  // data.chatamount
                  // data.voiceamount
                  // data.videoamount
                  // if (!chat) {
                  // } else {
                  // navigation.navigate("RTCView", {
                  //   appId: "6f149b4cb1b84f2ba4805accb2946326",
                  //   token:
                  //     "0066f149b4cb1b84f2ba4805accb2946326IAD7eTqxPx0Wix+CTUBC2ZYfmYbpXQoKEmN/QDqYzz4UxNkxik8AAAAAEABGxiZqB2wiYQEAAQAHbCJh",
                  //   channelName: "test0001",
                  //   video: false,
                  //   name: data.name,
                  // });
                  // }
                }}
                style={{
                  alignSelf: "flex-end",
                  width: 108,
                  height: 26,
                  backgroundColor: "#F8831C",
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
                  ขอคำปรึกษา
                </Text>
              </TouchableOpacity>
            ) : (
              <View
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
                  ขอคำปรึกษา
                </Text>
              </View>
            )}
          </View>
        </View>

        {/* chat */}

        <View
          style={{
            width: width,
            height: 40,
            marginTop: 8,
            flexDirection: "row",
          }}
        >
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
                  style={{ width: 35, height: 35 }}
                  source={require("../../image/chat1.png")}
                />
              </View>
            </TouchableOpacity>
          </View>

          <View
            style={{
              width: width * 0.38,
              height: 40,
              justifyContent: "center",
            }}
          >
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "#5EC73F",
              }}
            />
          </View>

          <View
            style={{
              width: width * 0.1,
              height: 40,

              justifyContent: "center",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontFamily: "Prompt-Regular",
                color: "black",
                fontSize: 10,
              }}
            >
              35 %
            </Text>
          </View>
          <View
            style={{
              width: width * 0.36,
              height: 40,
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                consultDortor();

                if (!consult) {
                  setScore((val) => !val);
                  setbody({ ...body, Amount: data.chatamount * 100 });
                  setFT("chat");
                } else {
                  setFT("");
                  setScore("");
                }
              }}
              style={{
                alignSelf: "flex-end",
                width: 59,
                height: 34,
                backgroundColor: consult ? "#F8831C" : "#FFFFFF",
                borderRadius: 6,
                justifyContent: "center",
                borderColor: "#707070",
                borderWidth: 0.7,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontFamily: "Prompt-SemiBold",
                  color: consult ? "#FFFFFF" : "black",
                  fontSize: 14,
                }}
              >
                ฿{data.chatamount}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* โทร */}
        <View
          style={{
            width: width,
            height: 40,
            marginTop: 10,
            flexDirection: "row",
          }}
        >
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
                  style={{ width: 35, height: 35 }}
                  source={require("../../image/call1.png")}
                />
              </View>
            </TouchableOpacity>
          </View>

          <View
            style={{
              width: width * 0.2,
              height: 40,
              justifyContent: "center",
            }}
          >
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "#5EC73F",
              }}
            />
          </View>

          <View
            style={{
              width: width * 0.1,
              height: 40,

              justifyContent: "center",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontFamily: "Prompt-Regular",
                color: "black",
                fontSize: 10,
              }}
            >
              20 %
            </Text>
          </View>
          <View
            style={{
              width: width * 0.54,
              height: 40,
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                chatDortor();
                if (!chat) {
                  // setScore(data.voiceamount);
                  setScore((val) => !val);
                  setbody({ ...body, Amount: data.voiceamount * 100 });
                  setFT("call");
                } else {
                  setFT("");
                  setScore("");
                }
                // setScore(data.voiceamount);
              }}
              style={{
                alignSelf: "flex-end",
                width: 59,
                height: 34,
                backgroundColor: chat ? "#F8831C" : "#FFFFFF",
                borderRadius: 6,
                justifyContent: "center",
                borderColor: "#707070",
                borderWidth: 0.7,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontFamily: "Prompt-SemiBold",
                  color: chat ? "#FFFFFF" : "black",
                  fontSize: 14,
                }}
              >
                ฿{data.voiceamount}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* วิอิโอ */}
        <View
          style={{
            width: width,
            height: 40,
            marginTop: 10,
            flexDirection: "row",
          }}
        >
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
                  style={{
                    width: 35,
                    height: 35,
                  }}
                  source={require("../../image/videcoall1.png")}
                />
              </View>
            </TouchableOpacity>
          </View>

          <View
            style={{
              width: width * 0.5,
              height: 40,
              justifyContent: "center",
            }}
          >
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "#5EC73F",
              }}
            />
          </View>

          <View
            style={{
              width: width * 0.1,
              height: 40,

              justifyContent: "center",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontFamily: "Prompt-Regular",
                color: "black",
                fontSize: 10,
              }}
            >
              45 %
            </Text>
          </View>
          <View
            style={{
              width: width * 0.24,
              height: 40,
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                videoDortor();
                // setScore(data.videoamount);
                if (!video) {
                  setScore((val) => !val);
                  setbody({ ...body, Amount: data.videoamount * 100 });
                  setFT("video");
                } else {
                  setFT("");
                  setScore("");
                }
              }}
              style={{
                alignSelf: "flex-end",
                width: 59,
                height: 34,
                backgroundColor: video ? "#F8831C" : "#FFFFFF",
                borderRadius: 6,
                justifyContent: "center",
                borderColor: "#707070",
                borderWidth: 0.7,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontFamily: "Prompt-SemiBold",
                  color: video ? "#FFFFFF" : "black",
                  fontSize: 14,
                }}
              >
                ฿{data.videoamount}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            width: width * 0.95,
            alignSelf: "center",
            height: 200,
            marginTop: 15,
          }}
        >
          <Text
            style={{
              fontFamily: "Prompt-Regular",
              color: "#898A8F",
              fontSize: 12,
            }}
          >
            About doctor
          </Text>
          <Text
            style={{
              fontFamily: "Prompt-Regular",
              color: "#898A8F",
              fontSize: 12,
            }}
          >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet
          </Text>
        </View>
        <View
          style={{
            width: width,
            height: 40,
            marginTop: 35,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              width: width * 0.87,
              height: 40,
              justifyContent: "center",
              marginLeft: 5,
            }}
          >
            <Text
              styl={{
                fontFamily: "Prompt-Regular",
                color: "black",
                fontSize: 12,
              }}
            >
              รีวิวจากผู้ขอคำปรึกษา
            </Text>
          </View>
          <View
            style={{
              width: width * 0.45,
              height: 40,
              justifyContent: "center",
            }}
          >
            <View
              style={{
                width: 108,
                height: 26,
                borderRadius: 6,
                justifyContent: "center",
              }}
            >
              <AntDesign name="right" size={24} color="black" />
            </View>
          </View>
        </View>

        <View
          style={{
            width: width,
            height: 60,
            justifyContent: "center",
            marginVertical: 5,
          }}
        >
          <View
            style={{
              width: width * 0.95,
              height: 50,
              alignSelf: "center",
              flexDirection: "row",
            }}
          >
            <View
              style={{
                width: width * 0.15,
                height: 50,
              }}
            >
              <Image source={require("../../image/user1.png")} />
            </View>
            <View
              style={{
                width: width * 0.65,
                height: 50,

                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Prompt-Regular",
                  color: "#707070",
                  fontSize: 12,
                }}
              >
                สู้ศักดิ์ รักดี
              </Text>
              <Text
                style={{
                  fontFamily: "Prompt-Regular",
                  color: "#707070",
                  fontSize: 11,
                }}
              >
                ให้คำปรึกษาดีมากเลยครับ
              </Text>
            </View>
            <View
              style={{
                width: width * 0.2,
                height: 50,
                alignSelf: "center",
                justifyContent: "center",
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    fontFamily: "Prompt-Regular",
                    color: "#707070",
                    fontSize: 12,
                    marginHorizontal: 10,
                  }}
                >
                  5.0
                </Text>
                <FontAwesome name="star" size={20} color="#EFCE4A" />
              </View>
            </View>
          </View>
        </View>
        <View style={{ width: width * 0.9, alignSelf: "center" }}>
          <View
            style={{
              borderBottomWidth: 0.7,
              borderBottomColor: "#F8831C",
            }}
          />
        </View>

        <View
          style={{
            width: width,
            height: 60,

            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: width * 0.95,
              height: 50,

              alignSelf: "center",
              flexDirection: "row",
            }}
          >
            <View
              style={{
                width: width * 0.15,
                height: 50,
              }}
            >
              <Image source={require("../../image/user2.png")} />
            </View>
            <View
              style={{
                width: width * 0.65,
                height: 50,

                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Prompt-Regular",
                  color: "#707070",
                  fontSize: 12,
                }}
              >
                โฉมฉาย รายล้อม
              </Text>
              <Text
                style={{
                  fontFamily: "Prompt-Regular",
                  color: "#707070",
                  fontSize: 11,
                }}
              >
                เสียงไมค์เบาไปหน่อยค่ะ แต่โดยรวมโอเค
              </Text>
            </View>
            <View
              style={{
                width: width * 0.2,
                height: 50,
                alignSelf: "center",
                justifyContent: "center",
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    fontFamily: "Prompt-Regular",
                    color: "#707070",
                    fontSize: 12,
                    marginHorizontal: 10,
                  }}
                >
                  4.0
                </Text>
                <FontAwesome name="star" size={20} color="#EFCE4A" />
              </View>
            </View>
          </View>
        </View>

        <View style={{ width: width * 0.9, alignSelf: "center", height: 10 }}>
          {/* <View
            style={{
              borderBottomWidth: 0.7,
              borderBottomColor: "#F8831C",
            }}
          /> */}
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
});
export default Doctor;
