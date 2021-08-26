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
  Modal,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import Doctor from "../../component/Doctor";
import RBSheet from "react-native-raw-bottom-sheet";
import Profilelist from "../Profile/Profilelist/Profilelist";

import * as ImagePicker from "expo-image-picker";
import * as ImageManipulator from "expo-image-manipulator";
import { apiservice } from "../../service/api";
import { tokenState } from "../../reducer/reducer/Atom";
import { useRecoilState } from "recoil";

const { width, height } = Dimensions.get("screen");
const ProfilePet = ({ navigation, route }) => {
  const [Home, setHome] = useState(false);
  const RBSheets = useRef();
  const [page, setPage] = useState(0);
  const [heightSheet, setheightSheet] = useState(300);

  const data = route.params.item;
  console.log("data>>>>", data);
  const [user, setuser] = useState("");
  const [token, settoken] = useRecoilState(tokenState);

  async function Getuser() {
    const response = await apiservice({
      method: "Get",
      path: "api/user/profile",
      token: token.token,
    });
    setuser(response.data);
  }
  useEffect(() => {
    Getuser();
  }, [token]);

  const data1 = [
    {
      id: "1",
      image: require("../../image/Jai.png"),
      name: "jai Dee",
      sex: "หญิง",
      color: "น้ำตาลผสมขาว",
      we: "8 KG",
      years: "2",
      select: false,
      breed: "สกอตติชโฟลด์",
    },
    {
      id: "2",
      image: require("../../image/photo.png"),
      name: "Photo",
      sex: "ชาย",
      color: "น้ำตาล",
      we: "6 KG",
      years: "2",
      select: false,
      breed: "สกอตติชโฟลด์",
    },
    {
      id: "3",
      image: require("../../image/tako.png"),
      name: "Tako",
      sex: "ชาย",
      color: "น้ำตาลผสมขาว",
      we: "10 KG",
      years: "2",
      select: false,
      breed: "สกอตติชโฟลด์",
    },
  ];

  function pagePopUp() {
    if (page == 0) {
      return (
        <View
          style={{
            width: width,
            alignItems: "center",
          }}
        >
          <ScrollView>
            <FlatList
              data={data1}
              renderItem={({ item, index }) => {
                return (
                  <Profilelist
                    item={item}
                    navigation={navigation}
                    RBSheets={RBSheets}
                    data1={data1}
                    data={data}
                  />
                );
              }}
            />
          </ScrollView>
        </View>
      );
    }
  }

  const [modalVisible, setModalVisible] = useState(false);
  const [photo, setphoto] = useState();
  const [image, setImage] = useState();

  const pickImageUser = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      base64: true,
    }).catch((err) => console.log(err));
    setImage(result.uri);
    if (!result.cancelled) {
      const response = await apiservice({
        method: "Post",
        path: "api/image/upload",
        body: {
          base64: result.base64,
          name: new Date().getTime(),
        },
      });
      setbody({ ...body, image: response.data.date });

      const responseUser = await apiservice({
        method: "put",
        path: "api/user/editpic",
        token: token.token,
        body: {
          image: response.data.date,
        },
      });
    }
  };
  const cameraImageUser = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
    });
    setImage(result.uri);
    if (!result.cancelled) {
      const response = await apiservice({
        method: "Post",
        path: "api/image/upload",
        body: {
          base64: result.base64,
          name: new Date().getTime(),
        },
      });
      setbody({ ...body, image: response.data.date });
      const responseUser = await apiservice({
        method: "put",
        path: "api/user/editpic",
        token: token.token,
        body: {
          image: response.data.date,
        },
      });
    }
  };

  const [modalVisiblepet, setModalVisiblepet] = useState(false);

  const [imagepat, setImagepat] = useState();
  const [bodypet, setbodypet] = useState({
    image: "",
  });

  const pickImagepet = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      base64: true,
    }).catch((err) => console.log(err));
    setImagepat(result.uri);
    if (!result.cancelled) {
      const response = await apiservice({
        method: "Post",
        path: "api/image/upload",
        body: {
          base64: result.base64,
          name: new Date().getTime(),
        },
      });
      setbodypet({ ...bodypet, image: response.data.date });
      const responsepet = await apiservice({
        method: "put",
        path: "api/pet/editpic",
        // token: token.token,
        body: {
          image: response.data.date,
          petid: data.id,
        },
      });
      console.log(responsepet);
    }
  };

  const cameraImagepet = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
    });
    setImagepat(result.uri);
    if (!result.cancelled) {
      const response = await apiservice({
        method: "Post",
        path: "api/image/upload",
        body: {
          base64: result.base64,
          name: new Date().getTime(),
        },
      });
      setbodypet({ ...bodypet, image: response.data.date });
      const responsepat = await apiservice({
        method: "put",
        path: "api/pet/editpic",
        body: {
          image: response.data.date,
          petid: data.id,
        },
      });
      console.log("responsepat.data", responsepat.data);
    }
  };
  const [body, setbody] = useState({
    image: "",
  });

  return (
    <View style={style.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <TouchableOpacity
          onPress={() => [setModalVisible(!modalVisible)]}
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
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                cameraImageUser();
              }}
              style={{
                width: 145,
                height: 190,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: 98,
                  height: 98,
                }}
              >
                <Image
                  resizeMode={"center"}
                  style={{ width: 98, height: 98 }}
                  source={require("../../image/Phonetoup.png")}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                // setModalVisible(!modalVisible);
                pickImageUser();
              }}
              style={{
                width: 145,
                height: 190,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: 98,
                  height: 98,
                }}
              >
                <Image
                  resizeMode={"center"}
                  style={{ width: 98, height: 98 }}
                  source={require("../../image/ImgUp.png")}
                />
              </View>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisiblepet}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisiblepet(!modalVisiblepet);
        }}
      >
        <TouchableOpacity
          onPress={() => [setModalVisiblepet(!modalVisiblepet)]}
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
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                cameraImagepet();
                setModalVisiblepet(!modalVisiblepet);
              }}
              style={{
                width: 145,
                height: 190,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: 98,
                  height: 98,
                }}
              >
                <Image
                  resizeMode={"center"}
                  style={{ width: 98, height: 98 }}
                  source={require("../../image/Phonetoup.png")}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                pickImagepet();
                setModalVisiblepet(!modalVisiblepet);
              }}
              style={{
                width: 145,
                height: 190,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: 98,
                  height: 98,
                }}
              >
                <Image
                  resizeMode={"center"}
                  style={{ width: 98, height: 98 }}
                  source={require("../../image/ImgUp.png")}
                />
              </View>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>

      <ScrollView>
        <RBSheet
          ref={RBSheets}
          height={heightSheet}
          // openDuration={250}
          closeOnDragDown
          customStyles={{
            container: {
              alignItems: "center",
              borderRadius: 10,
            },
            draggableIcon: {
              width: width * 0.2,
            },
          }}
        >
          {pagePopUp()}
        </RBSheet>

        <SafeAreaView style={{ backgroundColor: "#2A2A2A" }} />
        <Doctor
          navigation={navigation}
          header={Home ? "PROFILE" : "PET PROFILE"}
        />

        {Home ? (
          <View style={{ width: width, height: 220 }}>
            <Image
              style={{
                width: width,
                height: 230,
                marginTop: -10,
                position: "absolute",
                zIndex: -99,
              }}
              source={{
                uri: "http://54.169.196.73:5000/api/image/getpic/" + user.image,
              }}
            />
            {image && (
              <Image
                resizeMode={"stretch"}
                source={{ uri: image }}
                style={{
                  width: width,
                  height: 230,
                  marginTop: -10,
                  position: "absolute",
                  zIndex: -99,
                }}
              />
            )}

            <View
              style={{
                width: 97,
                height: 100,
                alignSelf: "flex-end",
                marginRight: 10,
                justifyContent: "center",
                marginTop: 10,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Edit", { user });
                }}
                style={{
                  width: 97,
                  height: 28,
                  backgroundColor: "#FFB574",
                  borderRadius: 8,
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 12,
                    color: "#000000",
                    fontFamily: "Prompt-Regular",
                    textAlign: "center",
                  }}
                >
                  EDIT PROFILE
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
                style={{ alignSelf: "flex-end" }}
              >
                <Image
                  style={{ width: 40, height: 40, marginTop: 20 }}
                  source={require("../../image/Upphoto.png")}
                />
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={{ width: width, height: 220 }}>
            <Image
              style={{
                width: width,
                height: 230,
                marginTop: -10,
                position: "absolute",
                zIndex: -99,
              }}
              source={{
                uri: "http://54.169.196.73:5000/api/image/getpic/" + data.image,
              }}
            />

            {imagepat && (
              <Image
                resizeMode={"stretch"}
                source={{ uri: imagepat }}
                style={{
                  width: width,
                  height: 230,
                  marginTop: -10,
                  position: "absolute",
                  zIndex: -99,
                }}
              />
            )}

            <View
              style={{
                width: 97,
                height: 100,
                alignSelf: "flex-end",
                marginRight: 10,
                justifyContent: "center",
                marginTop: 10,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("EditPet", { data });
                }}
                style={{
                  width: 97,
                  height: 28,
                  backgroundColor: "#FFB574",
                  borderRadius: 8,
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 12,
                    color: "#000000",
                    fontFamily: "Prompt-Regular",
                    textAlign: "center",
                  }}
                >
                  EDIT PROFILE
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setModalVisiblepet(!modalVisiblepet);
                }}
                style={{ alignSelf: "flex-end" }}
              >
                <Image
                  style={{ width: 40, height: 40, marginTop: 20 }}
                  source={require("../../image/Upphoto.png")}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}

        <View
          style={{
            width: width,
            backgroundColor: "#F8831C",
            height: 12,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              width: width * 0.25,
              height: 12,
              backgroundColor: "#F8831C",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                setHome((val) => !val);
              }}
              style={{
                alignSelf: "center",
                width: 39,
                height: 39,
                backgroundColor: !Home ? "#DBDBDB" : "#F8831C",
                marginTop: -14,
                borderRadius: 30,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image source={require("../../image/1.png")} />
            </TouchableOpacity>
          </View>

          <View
            style={{
              width: width * 0.5,
              height: 30,
              backgroundColor: "#F8831C",
              marginTop: -19,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 6,
            }}
          >
            {Home ? (
              <Text
                style={{
                  fontSize: 17,
                  color: "#fff",
                  fontFamily: "Prompt-Regular",
                }}
              >
                {user.name}
              </Text>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  setheightSheet(300);
                  setPage(0);
                  setTimeout(() => {
                    RBSheets.current.open();
                  }, 300);
                }}
                style={{
                  width: width * 0.5,
                  flexDirection: "row",
                  height: 30,
                  zIndex: 99,
                }}
              >
                <TouchableOpacity
                  style={{ width: width * 0.5, justifyContent: "center" }}
                  onPress={() => {
                    setheightSheet(300);
                    setPage(0);
                    setTimeout(() => {
                      RBSheets.current.open();
                    }, 300);
                  }}
                >
                  <Text
                    style={{
                      fontSize: 17,
                      color: "#fff",
                      fontFamily: "Prompt-Regular",
                      textAlign: "center",
                    }}
                  >
                    {data.name}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setheightSheet(300);
                    setPage(0);
                    setTimeout(() => {
                      RBSheets.current.open();
                    }, 300);
                  }}
                  style={{
                    width: width * 0.07,
                    marginLeft: -30,
                    justifyContent: "center",
                    height: 30,
                    alignItems: "center",
                  }}
                >
                  <AntDesign name="caretdown" size={20} color="#fff" />
                </TouchableOpacity>
              </TouchableOpacity>
            )}
          </View>

          <View
            style={{
              width: width * 0.25,
              height: 12,
              backgroundColor: "#F8831C",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                setHome((val) => !val);
              }}
              style={{
                alignSelf: "center",
                width: 39,
                height: 39,
                backgroundColor: !Home ? "#F8831C" : "#DBDBDB",
                marginTop: -14,
                borderRadius: 30,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image source={require("../../image/2.png")} />
            </TouchableOpacity>
          </View>
        </View>

        {Home ? (
          <View></View>
        ) : (
          <View>
            <View
              style={{
                width: width,
                height: height * 0.23,
              }}
            >
              <View
                style={{
                  width: width,
                  height: height * 0.12,
                  flexDirection: "row",
                  marginTop: 10,
                }}
              >
                <View style={{ width: width * 0.8 }}>
                  <View style={{ left: 10 }}>
                    <Text
                      style={{
                        fontSize: 35,
                        color: "#F8831C",
                        fontFamily: "Prompt-Regular",
                      }}
                    >
                      {data.name}
                    </Text>
                    <Text
                      style={{
                        fontSize: 17,
                        color: "#898A8F",
                        fontFamily: "Prompt-Regular",
                      }}
                    >
                      สกอตติซโฟลด์
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    width: 60,
                    height: 60,
                    backgroundColor: "#F24DAB",
                    alignSelf: "center",
                    borderRadius: 30,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 17,
                      color: "#fff",
                      fontFamily: "Prompt-Regular",
                    }}
                  >
                    {data.weight} KG
                  </Text>
                </View>
              </View>

              <View
                style={{
                  width: width,
                  height: height * 0.1,
                  marginTop: 3,
                }}
              >
                <View
                  style={{
                    width: width,
                    height: height * 0.05,
                    flexDirection: "row",
                  }}
                >
                  <View style={{ flexDirection: "row", width: width * 0.82 }}>
                    <Image
                      resizeMode={"stretch"}
                      style={{
                        width: 33,
                        height: 43,
                        marginHorizontal: 10,
                        marginTop: -4,
                      }}
                      source={require("../../image/sex1.png")}
                    />
                    <Text
                      style={{
                        fontSize: 17,
                        color: "#F8831C",
                        fontFamily: "Prompt-Regular",
                        marginTop: 5,
                      }}
                    >
                      {data.gender}
                    </Text>
                    <Image
                      resizeMode={"stretch"}
                      style={{ width: 30, height: 30, marginHorizontal: 10 }}
                      source={require("../../image/color1.png")}
                    />
                    <Text
                      style={{
                        fontSize: 20,
                        color: "#F8831C",
                        fontFamily: "Prompt-Regular",
                        marginTop: 5,
                      }}
                    >
                      {data.color}
                    </Text>
                  </View>

                  <View
                    style={{
                      width: 49,
                      height: 49,
                      backgroundColor: "#1D4594",
                      alignSelf: "center",
                      borderRadius: 30,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 20,
                        color: "#fff",
                        fontFamily: "Prompt-Regular",
                      }}
                    >
                      {data.age}y
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{ width: width * 0.95, alignSelf: "center" }}>
              <View
                style={{
                  borderBottomWidth: 1,
                  borderColor: "#F8831C",
                }}
              />
            </View>

            <View
              style={{
                width: width * 0.85,
                height: height * 0.275,
                alignSelf: "center",
                marginTop: 24,
                marginBottom: 20,
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("HealthNoteBook");
                }}
                style={{ width: 140, height: 173, marginHorizontal: 30 }}
              >
                <Image
                  style={{ width: 140, height: 173, position: "absolute" }}
                  source={require("../../image/Note1.png")}
                />
                <View
                  style={{
                    width: 110,
                    height: 172,
                    alignSelf: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      color: "black",
                      fontFamily: "Prompt-Regular",
                      marginVertical: 5,
                    }}
                  >
                    สมุดบันทึกสุขภาพ
                  </Text>

                  <Text
                    style={{
                      fontSize: 8,
                      color: "black",
                      fontFamily: "Prompt-Regular",
                      marginVertical: 5,
                    }}
                  >
                    เป็นสมุดที่ใช้บันทึกสุขภาพ ของ
                    สัตว์เลี้ยงของคุณที่เกี่ยวกับการ ทำวัคซีน
                  </Text>
                </View>
              </TouchableOpacity>

              <View style={{ width: 140, height: 173, marginHorizontal: 30 }}>
                <Image
                  style={{ width: 140, height: 173, position: "absolute" }}
                  source={require("../../image/Note2.png")}
                />
                <View
                  style={{
                    width: 110,
                    height: 172,
                    alignSelf: "center",
                    left: 7,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 10,
                      color: "black",
                      fontFamily: "Prompt-Regular",
                      marginVertical: 5,
                    }}
                  >
                    สมุดบันทึกการถ่ายพยาธิ การคุมกำเนิด
                  </Text>

                  <Text
                    style={{
                      fontSize: 8,
                      color: "black",
                      fontFamily: "Prompt-Regular",
                      marginVertical: 5,
                    }}
                  >
                    เป็นสมุดที่ใช้บันทึกประวัติการถ่าย พยาธิ
                    ของสัตว์เลี้ยงของคุณ รวม ไปถึงการทำหมัน
                  </Text>
                </View>
              </View>
            </View>
          </View>
        )}

        {Home ? (
          <View
            style={{
              width: width,
              height: height * 0.07,
              justifyContent: "center",
              marginTop: 35,
            }}
          >
            <View style={{ flexDirection: "row", marginLeft: 13 }}>
              <View style={{ width: width * 0.72, flexDirection: "row" }}>
                <Image source={require("../../image/H.png")} />
                <Text
                  style={{
                    color: "black",
                    fontSize: 14,
                    marginLeft: 10,
                    fontFamily: "Prompt-Regular",
                  }}
                >
                  ประวัติการชำระเงิน
                </Text>
              </View>
            </View>
          </View>
        ) : (
          <View></View>
        )}

        {Home ? (
          <View
            style={{
              width: width,
              height: height * 0.07,
              justifyContent: "center",
              marginTop: 10,
            }}
          >
            <View style={{ flexDirection: "row", marginLeft: 13 }}>
              <View style={{ width: width * 0.72, flexDirection: "row" }}>
                <Image source={require("../../image/M.png")} />
                <Text
                  style={{
                    color: "black",
                    fontSize: 14,
                    marginLeft: 10,
                    fontFamily: "Prompt-Regular",
                  }}
                >
                  ประวัติการขอรับคำปรึกษา
                </Text>
              </View>
            </View>
          </View>
        ) : (
          <View></View>
        )}

        {Home ? (
          <View
            style={{
              width: width,
              height: height * 0.07,
              justifyContent: "center",
              marginTop: 10,
            }}
          >
            <View style={{ flexDirection: "row", marginLeft: 13 }}>
              <View style={{ width: width * 0.72, flexDirection: "row" }}>
                <Image source={require("../../image/M.png")} />
                <Text
                  style={{
                    color: "black",
                    fontSize: 14,
                    marginLeft: 10,
                    fontFamily: "Prompt-Regular",
                  }}
                >
                  รายงานปัญหาการใช้งาน
                </Text>
              </View>
            </View>
          </View>
        ) : (
          <View></View>
        )}

        {Home ? (
          <View
            style={{
              width: width,
              height: height * 0.07,
              justifyContent: "center",
              marginTop: 10,
            }}
          >
            <View style={{ flexDirection: "row", marginLeft: 13 }}>
              <View style={{ width: width * 0.72, flexDirection: "row" }}>
                <Image source={require("../../image/M.png")} />
                <Text
                  style={{
                    color: "black",
                    fontSize: 14,
                    marginLeft: 10,
                    fontFamily: "Prompt-Regular",
                  }}
                >
                  การแจ้งเตือน
                </Text>
              </View>
            </View>
          </View>
        ) : (
          <View></View>
        )}
        {Home ? (
          <View
            style={{
              width: width,
              height: height * 0.07,
              justifyContent: "center",
              marginTop: 10,
            }}
          >
            <View style={{ flexDirection: "row", marginLeft: 13 }}>
              <View style={{ width: width * 0.72, flexDirection: "row" }}>
                <Image source={require("../../image/M.png")} />
                <Text
                  style={{
                    color: "black",
                    fontSize: 14,
                    marginLeft: 10,
                    fontFamily: "Prompt-Regular",
                  }}
                >
                  ออกจากระบบ
                </Text>
              </View>
            </View>
          </View>
        ) : (
          <View></View>
        )}
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
export default ProfilePet;
