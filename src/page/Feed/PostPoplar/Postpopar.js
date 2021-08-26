import React, { useState, useCallback } from "react";
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

const { width, height } = Dimensions.get("screen");
const Postpopar = ({ navigation, route }) => {
  const data = route.params.item;


  console.log(data);

  const [refreshing, setRefreshing] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const [ModalVisibleED, setModalVisibleED] = useState(false);
  const [com1, setcom1] = useState(false);
  const [img, setimg] = useState(false);

  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const data3 = [
    {
      img: require("../../../image/f1.png"),
      name: "Ronald Shores",
      com: "Impressive set up",
    },

    {
      img: require("../../../image/f2.png"),
      name: "Jimmy Love",
      com: "Where's you office?",
    },
    {
      img: require("../../../image/f3.png"),
      name: "Sha Gaines",
      com: "I remember being away that day",
    },
    {
      img: require("../../../image/f4.png"),
      name: "Ivey Wilson",
      com: "Hahaha you made me clean your...",
    },
    {
      img: require("../../../image/f5.png"),
      name: "Bradley Dame",
      com: "That was the day we got nothing...",
    },
  ];

  const [state, setstate] = useState(false);

  return (
    <View style={style.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisibleED(!ModalVisibleED);
        }}
      >
        <TouchableOpacity
          onPress={() => [setModalVisibleED(!ModalVisibleED)]}
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
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
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
          <TouchableOpacity onPress={() => [setModalVisible(!modalVisible)]}>
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
            source={data.img}
          />
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
            {data.adduser == "ADD" && (
              <View>
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
            )}
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
            {data.adduser == "ADD" && (
              <View>
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
            )}

            {data.adduser == "NoADD" && (
              <TouchableOpacity
                style={{
                  width: 72,
                  height: 30,
                  borderColor: "#F8831C",
                  borderWidth: 2,
                  borderRadius: 15,
                  alignSelf: "flex-end",
                  marginRight: 17,
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    color: "#F8831C",
                    fontFamily: "Prompt-Regular",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  ADD
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>

        {/* <FlatList
          data={dataPost}
          renderItem={({ item }) => {
            return ( */}
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
                width: width * 0.2,
                height: 70,
                justifyContent: "center",
              }}
            >
              <View style={{ alignSelf: "center" }}>
                <Image
                  style={{ width: 40, height: 40, borderRadius: 40 }}
                  source={data.img}
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
                {data.name}
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    fontSize: 10,
                    color: "#3B3B3B",
                    fontFamily: "Prompt-Regular",
                  }}
                >
                  {data.time}
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
              <Entypo name="dots-three-vertical" size={24} color="black" />
            </View>
          </View>

          {data.tab == "Shares" && (
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
                    left: 5,
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
                      left: 5,
                    }}
                  >
                    {data.tabf}
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 12,
                      color: "#3B3B3B",
                      fontFamily: "Prompt-Regular",
                    }}
                  >
                    ,and 20 others
                  </Text>
                </View>
              </View>
            </View>
          )}

          <TouchableOpacity
            onPress={() => {
              setimg(data.friends);
              setModalVisible(!modalVisible);
            }}
          >
            <Image
              resizeMode={"stretch"}
              source={data.friends}
              style={{ width: width }}
            />
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
             
            }}
              style={{
                width: width * 0.3333,
                height: 70,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View style={{ alignItems: "center", flexDirection: "row" }}>
                {state ? (
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
                  {data.like} Liked
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setcom1((val) => !val);
              }}
              style={{
                width: width * 0.3333,
                height: 70,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View style={{ alignItems: "center", flexDirection: "row" }}>
                <Image
                  resizeMode={"stretch"}
                  style={{ width: 25, height: 25 }}
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
                  {data.Com} Comments
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
              <View style={{ alignItems: "center", flexDirection: "row" }}>
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
                  {data.Shares} Shares
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
              {data.headerPost}
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
                {data.dataPost}
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
              {data.timeout}
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

          {com1 && (
            <View>
              <FlatList
                data={data3}
                renderItem={({ item }) => {
                  return <Comments item={item}  navigation={navigation}/>;
                }}
              />
            </View>
          )}
        </View>
        {/* );
          }}
        /> */}
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
export default Postpopar;
