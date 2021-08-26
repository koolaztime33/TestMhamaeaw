import React, { useState, useEffect, useCallback } from "react";
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
  TextInput,
  RefreshControl,
  Modal,
} from "react-native";
import { AntDesign, Entypo, MaterialIcons } from "@expo/vector-icons";

import Comments from "../Comments/Comments";
import * as ImagePicker from "expo-image-picker";
import * as ImageManipulator from "expo-image-manipulator";

const { width, height } = Dimensions.get("screen");
const User = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const [modalVisibleED, setModalVisibleED] = useState(false);

  const [com1, setcom1] = useState(false);
  const [img, setimg] = useState(false);

  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const [image, setImage] = useState();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      base64: true,
    }).catch((err) => console.log(err));
    setImage(result.uri);
    const results = await ImageManipulator.manipulateAsync(
      result.uri,
      [{ resize: { width: 100, height: 100 } }],
      { compress: 0, format: ImageManipulator.SaveFormat.PNG, base64: true }
    );
    // if (!result.cancelled) {
    //   const response = await apiservice({
    //     method: "Post",
    //     path: "api/image/upload",
    //     body: {
    //       base64: results.base64,
    //       name: new Date().getTime(),
    //     },
    //   });
    //   setBody({ ...body, image: response.data.date });
    // }
  };

  const [photo, setphoto] = useState();

  const cameraImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
    });
    setphoto(result.uri);
    const results = await ImageManipulator.manipulateAsync(
      result.uri,
      [{ resize: { width: 800, height: 800 } }],
      { compress: 0, format: ImageManipulator.SaveFormat.PNG, base64: true }
    );
    console.log(results);
  };

  const [datach, setdatach] = useState([
    {
      id: "1",
      img: require("../../../image/profileAdd.png"),
      name: "Baxter Johnson",
      time: "5:30 PM",
      status: "yes",
      tab: "Shares",
      adduser: "NoADD",
      tabf: "Earl Garcia, Nancy Maio, and 20 others",
      imgPost: require("../../../image/Post.png"),
      like: "120",
      Com: "60",
      Shares: "60",
      headerPost: "My Family very Happy ^^",
      dataPost:
        "Obsessed with my desk at work. All cleaned & organizedafter 5 years #workdesk #worklife #agency    ",
      timeout: "22 hours ago",
      select: false,
      chack: false,
    },

    {
      id: "2",
      img: require("../../../image/profileAdd.png"),
      name: "Baxter Johnson",
      time: "5:30 PM",
      status: "yes",
      tab: "Shares",
      adduser: "NoADD",
      tabf: "Earl Garcia, Nancy Maio, and 20 others",
      imgPost: require("../../../image/Post.png"),
      like: "120",
      Com: "60",
      Shares: "60",
      headerPost: "My Family very Happy ^^",
      dataPost:
        "Obsessed with my desk at work. All cleaned & organizedafter 5 years #workdesk #worklife #agency    ",
      timeout: "22 hours ago",
      select: false,
      chack: false,
    },
  ]);

  const [data3, setdata3] = useState([
    {
      id: "1",
      img: require("../../../image/f1.png"),
      name: "Ronald Shores",
      com: "Impressive set up",
      com: "That was the day we got nothing...",
      status: "No",
      time: "22 hours ago",
      tab: "No",
      adduser: "ADD",
    },

    {
      id: "2",
      img: require("../../../image/f2.png"),
      name: "Jimmy Love",
      com: "Where's you office?",
      status: "yes",
      tab: "Shares",
      adduser: "NoADD",
      tabf: "Earl Garcia, Nancy Maio,",
    },
    {
      id: "3",
      img: require("../../../image/f3.png"),
      name: "Sha Gaines",
      com: "I remember being away that day",
      status: "yes",
      tab: "Shares",
      adduser: "NoADD",
      tabf: "Earl Garcia, Nancy Maio,",
    },
    {
      id: "4",
      img: require("../../../image/f4.png"),
      name: "Ivey Wilson",
      com: "Hahaha you made me clean your...",
      status: "yes",
      tab: "Shares",
      adduser: "NoADD",
      tabf: "Earl Garcia, Nancy Maio,",
    },
    {
      id: "5",
      img: require("../../../image/f5.png"),
      name: "Bradley Dame",
      com: "That was the day we got nothing...",
      status: "No",
      time: "22 hours ago",
      tab: "No",
      adduser: "ADD",
      tabf: "Earl Garcia, Nancy Maio, and 20 others",
    },
  ]);
  const [state, setstate] = useState(false);
  const [pig, setpig] = useState([]);
  const [keyindex, setkeyindex] = useState(Math.floor(Math.random() * 100 + 1));

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
                cameraImage();
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
                  source={require("../../../image/Phonetoup.png")}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                // setModalVisible(!modalVisible);
                pickImage();
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
                  source={require("../../../image/ImgUp.png")}
                />
              </View>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleED}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisibleED(!modalVisibleED);
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "#000000",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => [setModalVisibleED(!modalVisibleED)]}
          >
            <Image style={{ width: width }} source={img} />
          </TouchableOpacity>
        </View>
      </Modal>

      <ScrollView
        //  contentContainerStyle={style.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <SafeAreaView style={{ backgroundColor: "#2A2A2A" }} />

        {image && (
          <Image
            resizeMode={"stretch"}
            source={{ uri: image }}
            style={{
              width: width,
              height: 240,
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              marginTop: -45,
              borderRadius: 50,
              zIndex: 99,
            }}
          />
        )}
        <Image
          resizeMode={"stretch"}
          style={{ width: width, height: 240 }}
          source={require("../../../image/Bauser.png")}
        />

        <View
          style={{
            width: width,
            height: height * 0.09,
            flexDirection: "row",
            position: "absolute",
            zIndex: 99,
          }}
        >
          <View
            style={{
              width: width * 0.1,
              marginTop: 10,
              justifyContent: "center",
              marginLeft: 10,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <AntDesign name="left" size={27} color="#fff" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: width * 0.75,
              marginTop: 10,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: "#FDFDFD",
                marginHorizontal: 4,
                fontFamily: "Prompt-Regular",
                textAlign: "center",
              }}
            >
              FEED
            </Text>
          </View>

          <View
            style={{
              height: 20,
              marginTop: 30,
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 10,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.openDrawer();
              }}
            >
              <Image source={require("../../../image/icon.png")} />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            width: width * 0.67,
            height: 150,
            marginTop: -160,
            alignSelf: "flex-end",
            flexDirection: "row",
            alignItems: "center",
            zIndex: 99,
          }}
        >
          <Image
            style={{ width: 144, height: 144, borderRadius: 70 }}
            source={require("../../../image/ProfileU.png")}
          />
          {/* {image && (
            <Image
              resizeMode={"stretch"}
              source={{ uri: image }}
              style={{
                width: 144,
                height: 144,
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                marginTop: -45,
                borderRadius: 50,
                zIndex: 99,
              }}
            />
          )} */}

          <TouchableOpacity
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          >
            {image && (
              <View
                style={{
                  width: 40,
                  height: 40,
                  position: "absolute",
                  zIndex: 99,
                  flexDirection: "row",
                }}
              ></View>
            )}
            <Image
              style={{ width: 40, height: 40, marginHorizontal: 20 }}
              source={require("../../../image/PhoneE.png")}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            width: width,
            height: 70,
            marginTop: -40,
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              width: width * 0.4,
              height: 70,
              backgroundColor: "#fff",
              borderTopLeftRadius: 10,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 18,
                color: "#000000",
                marginHorizontal: 4,
                fontFamily: "Prompt-Regular",
                textAlign: "center",
                marginVertical: 4,
              }}
            >
              125
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: "#9F9F9F",
                fontFamily: "Prompt-Regular",
                textAlign: "center",
              }}
            >
              Post
            </Text>
          </View>

          <View
            style={{
              width: width * 0.2,
              height: 100,
              backgroundColor: "#fff",
              borderTopLeftRadius: 10,
              justifyContent: "center",
            }}
          ></View>

          <View
            style={{
              width: width * 0.4,
              height: 70,
              backgroundColor: "#fff",
              borderTopRightRadius: 10,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 18,
                color: "#000000",
                marginHorizontal: 4,
                fontFamily: "Prompt-Regular",
                textAlign: "center",
                marginVertical: 4,
              }}
            >
              150
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: "#9F9F9F",
                fontFamily: "Prompt-Regular",
                textAlign: "center",
              }}
            >
              Friends
            </Text>
          </View>
        </View>

        <FlatList
          data={datach}
          key={keyindex}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  width: width,
                  backgroundColor: "#fff",
                }}
              >
                <View
                  style={{
                    width: width,
                    height: 70,
                    alignSelf: "center",
                    flexDirection: "row",
                    marginTop: 10,
                  }}
                >
                  <View
                    style={{
                      width: width * 0.18,
                      height: 70,
                      justifyContent: "center",
                    }}
                  >
                    <View style={{ alignSelf: "center" }}>
                      <Image
                        style={{ width: 40, height: 40 }}
                        source={item.img}
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      width: width * 0.71,
                      height: 70,
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        color: "#3B3B3B",
                        fontFamily: "Prompt-Regular",
                      }}
                    >
                      {item.name}
                    </Text>
                    <View style={{ flexDirection: "row" }}>
                      <Text
                        style={{
                          fontSize: 10,
                          color: "#3B3B3B",
                          fontFamily: "Prompt-Regular",
                        }}
                      >
                        {item.time}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      width: width * 0.1,
                      height: 70,
                      justifyContent: "center",
                      alignSelf: "flex-end",
                    }}
                  >
                    <Entypo
                      name="dots-three-vertical"
                      size={24}
                      color="black"
                    />
                  </View>
                </View>

                {item.tab == "Shares" && (
                  <View
                    style={{
                      width: width * 0.95,
                      height: 70,
                      alignSelf: "center",
                      flexDirection: "row",
                      marginTop: 10,
                    }}
                  >
                    <View
                      style={{
                        width: width * 0.23,
                        height: 70,
                        flexDirection: "row",
                      }}
                    >
                      <View
                        style={{
                          width: 60,
                          height: 60,
                          borderRadius: 30,
                          borderWidth: 1,
                          borderColor: "#fff",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Image
                          style={{ width: 60, height: 60 }}
                          source={require("../../../image/Grand1.png")}
                        />
                      </View>

                      <View
                        style={{
                          width: 60,
                          height: 60,
                          borderRadius: 30,
                          marginLeft: -25,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Image
                          style={{ width: 60, height: 60 }}
                          source={require("../../../image/Grand2.png")}
                        />
                      </View>
                    </View>
                    <View
                      style={{
                        width: width * 0.7,
                        height: 70,
                        marginLeft: 5,
                      }}
                    >
                      <Text
                        style={{
                          marginTop: 10,
                          fontSize: 10,
                          color: "#3B3B3B",
                          fontFamily: "Prompt-Regular",
                        }}
                      >
                        with
                      </Text>
                      <View style={{ flexDirection: "row" }}>
                        <Text
                          style={{
                            marginTop: 10,
                            fontSize: 12,
                            color: "#3B3B3B",
                            fontFamily: "Prompt-Regular",
                            fontWeight: "bold",
                          }}
                        >
                          {item.tabf}
                        </Text>
                      </View>
                    </View>
                  </View>
                )}

                <TouchableOpacity
                  onPress={() => {
                    setimg(item.imgPost);
                    setModalVisibleED(!modalVisibleED);
                  }}
                >
                  <Image source={item.imgPost} style={{ width: width }} />
                </TouchableOpacity>
                <View
                  style={{
                    width: width,
                    height: 70,
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <TouchableOpacity
                    onPress={() => {
                      setstate((Val) => !Val);
                      let selecount = datach;
                      const i = selecount.findIndex((e) => {
                        return e.id === item.id;
                      });
                      if (i > -1) {
                        selecount[i].select = !selecount[i].select;
                      }
                      setpig(selecount);
                      setkeyindex(Math.floor(Math.random() * 100 + 1));
                      console.log("item.select>>>>>>", item.select);
                    }}
                    style={{
                      width: width * 0.3333,
                      height: 70,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{ alignItems: "center", flexDirection: "row" }}
                    >
                      {item.select ? (
                        <Image
                          resizeMode={"stretch"}
                          style={{ width: 22, height: 21 }}
                          source={require("../../../image/like.png")}
                        />
                      ) : (
                        <Image
                          resizeMode={"stretch"}
                          style={{ width: 22, height: 21 }}
                          source={require("../../../image/Nolike.png")}
                        />
                      )}
                      <Text
                        style={{
                          fontSize: 12,
                          color: "#3B3B3B",
                          fontFamily: "Prompt-Regular",
                          marginLeft: 10,
                        }}
                      >
                        {item.like} Liked
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      setcom1((val) => !val);
                      let data = datach.map((items) =>
                        items.id == item.id
                          ? { ...items, chack: !item.chack }
                          : items
                      );
                      setdatach(data);
                      // chack:false
                    }}
                    style={{
                      width: width * 0.3333,
                      height: 70,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{ alignItems: "center", flexDirection: "row" }}
                    >
                      <Image
                        resizeMode={"stretch"}
                        style={{ width: 22, height: 21 }}
                        source={require("../../../image/com.png")}
                      />
                      <Text
                        style={{
                          fontSize: 12,
                          color: "#3B3B3B",
                          fontFamily: "Prompt-Regular",
                          marginLeft: 10,
                        }}
                      >
                        {item.Com} Comments
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <View
                    style={{
                      width: width * 0.3333,
                      height: 70,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{ alignItems: "center", flexDirection: "row" }}
                    >
                      <View
                        style={{
                          width: 25,
                          height: 25,
                          backgroundColor: "#70707090",
                          borderRadius: 30,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Image
                          resizeMode={"stretch"}
                          style={{ width: 13, height: 11 }}
                          source={require("../../../image/Nosh.png")}
                        />
                      </View>
                      <Text
                        style={{
                          fontSize: 12,
                          color: "#3B3B3B",
                          fontFamily: "Prompt-Regular",
                          marginLeft: 10,
                        }}
                      >
                        {item.Shares} Shares
                      </Text>
                    </View>
                  </View>
                </View>

                <View
                  style={{
                    width: width,
                    borderWidth: 1,
                    borderColor: "#DBDBDB",
                  }}
                />

                <View
                  style={{
                    width: width * 0.95,
                    alignSelf: "center",
                    marginTop: 14,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 11,
                      color: "#3B3B3B",
                      fontFamily: "Prompt-Regular",

                      fontWeight: "bold",
                    }}
                  >
                    {item.headerPost}
                  </Text>
                  <View style={{ width: width * 0.82, flexDirection: "row" }}>
                    <Text
                      style={{
                        fontSize: 11,
                        color: "#3B3B3B",
                        fontFamily: "Prompt-Regular",
                        marginLeft: 10,
                        marginTop: 10,
                      }}
                    >
                      {item.dataPost}
                    </Text>
                  </View>
                  <Text
                    style={{
                      fontSize: 11,
                      color: "#3B3B3B",
                      fontFamily: "Prompt-Regular",
                      marginTop: 8,
                      marginLeft: 10,
                    }}
                  >
                    {item.timeout}
                  </Text>
                </View>

                {/* แสดงความคิดเห็น */}
                <TouchableOpacity
                  onPress={() => {
                    setcom1((val) => !val);
                  }}
                  style={{
                    width: width,
                    height: 37,
                    backgroundColor: "#f7f7f7",
                    marginTop: 10,
                  }}
                >
                  <View
                    style={{
                      width: width * 0.98,
                      height: 37,
                      alignSelf: "center",
                      flexDirection: "row",
                    }}
                  >
                    <View
                      style={{
                        width: width * 0.15,
                        height: 37,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Image
                        style={{
                          width: 27,
                          height: 27,
                          borderRadius: 30,
                        }}
                        source={require("../../../image/11.png")}
                      />
                    </View>

                    <View
                      style={{
                        width: width * 0.67,
                        height: 37,
                        justifyContent: "center",
                      }}
                    >
                      <TextInput
                        style={{
                          fontSize: 11,
                          color: "#3B3B3B",
                          fontFamily: "Prompt-Regular",
                        }}
                        placeholder={"แสดงความคิดเห็น"}
                        placeholderTextColor="#484D54"
                      />
                    </View>

                    <View
                      style={{
                        width: width * 0.18,
                        height: 37,
                        justifyContent: "center",
                      }}
                    >
                      <MaterialIcons
                        name="photo-camera"
                        size={25}
                        color="#515F65"
                        style={{ marginLeft: 22 }}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
                {item.chack && (
                  <View>
                    <FlatList
                      data={data3}
                      renderItem={({ item }) => {
                        return <Comments item={item} navigation={navigation} />;
                      }}
                    />
                  </View>
                )}
              </View>
            );
          }}
        />
      </ScrollView>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6F6",
  },
  Post: {
    width: 108,
    height: 26,
    backgroundColor: "#F8831C",
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 6,
    marginTop: 10,
  },
});
export default User;
