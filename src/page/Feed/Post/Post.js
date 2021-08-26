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

import { FontAwesome, AntDesign } from "@expo/vector-icons";

import * as ImagePicker from "expo-image-picker";
import * as ImageManipulator from "expo-image-manipulator";

const { width, height } = Dimensions.get("screen");
const Post = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const [posttext, setposttext] = useState(false);

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

  const [state, setstate] = useState(false);
  const data = [
    {
      img: require("../../../image/FriendsList1.png"),
      name: "Alex",
      id: "1",
    },
    {
      img: require("../../../image/FriendsList2.png"),
      name: "Sandra",
      id: "2",
    },
    {
      img: require("../../../image/FriendsList3.png"),
      name: "Lisa",
      id: "3",
    },
    {
      img: require("../../../image/FriendsList4.png"),
      name: "Mike",
      id: "4",
    },
    {
      img: require("../../../image/FriendsList5.png"),
      name: "Jennifer",
      id: "5",
    },
    {
      img: require("../../../image/FriendsList6.png"),
      name: "Jennifer",
      id: "6",
    },
  ];

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

      <ScrollView
        //  contentContainerStyle={style.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <SafeAreaView style={{ backgroundColor: "#2A2A2A" }} />

        <View
          style={{
            width: width,
            height: height * 0.09,
            flexDirection: "row",
            backgroundColor: "#F8831C",
            flexDirection: "row",
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
              NEW POST
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
            width: width,
            height: 70,
            backgroundColor: "#FFFFFF",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              justifyContent: "center",
              marginLeft: 10,
              width: width * 0.17,
            }}
          >
            <Image
              style={{
                width: 40,
                height: 40,
                borderRadius: 30,
              }}
              source={require("../../../image/11.png")}
            />
          </View>
          <View
            style={{
              justifyContent: "center",
              width: width * 0.58,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: "#707070",
                fontFamily: "Prompt-Regular",
                marginLeft: 14,
              }}
            >
              Park Min-Young
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              setstate((val) => !val);
            }}
            style={{ width: width * 0.2, justifyContent: "center" }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: 12,
                  color: "#707070",
                  fontFamily: "Prompt-Regular",
                }}
              >
                {state ? "friend " : "public"}
              </Text>
              <AntDesign
                name="caretdown"
                size={22}
                color="#393939"
                style={{ marginLeft: 10 }}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
            style={{
              width: width,
              backgroundColor: "#F6D6D7",
              height: 217,
            }}
          >
            {image && (
              <View
                style={{
                  width: width * 0.22,
                  height: 30,
                  position: "absolute",
                  zIndex: 99,
                  alignSelf: "flex-end",
                  flexDirection: "row",
                }}
              >
                <TouchableOpacity
                  style={{
                    width: 35,
                    height: 35,

                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      width: 25,
                      height: 25,
                      backgroundColor: "#fff",
                      borderRadius: 30,
                    }}
                  >
                    <AntDesign name="plus" size={24} color="#F8831C" />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: 35,
                    height: 35,
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: 10,
                  }}
                >
                  <View
                    style={{
                      width: 25,
                      height: 25,
                      backgroundColor: "#fff",
                      borderRadius: 30,
                    }}
                  >
                    <AntDesign name="close" size={24} color="#F8831C" />
                  </View>
                </TouchableOpacity>
              </View>
            )}

            <Text
              style={{
                fontSize: 16,
                color: "#E25E31",
                fontFamily: "Prompt-Regular",
                textAlign: "center",
                marginTop: 20,
              }}
            >
              Upload photo or Video
            </Text>
            <View>
              <AntDesign
                name="pluscircle"
                size={85}
                color="#FF7346"
                style={{ alignSelf: "center", marginTop: 40 }}
              />
              {image && (
                <Image
                  resizeMode={"stretch"}
                  source={{ uri: image }}
                  style={{
                    width: width,
                    height: 218,
                    alignItems: "center",
                    justifyContent: "center",
                    position: "absolute",
                    marginTop: -45,
                  }}
                />
              )}
            </View>
          </TouchableOpacity>

          <View
            style={{
              backgroundColor: "#DBDBDB90",
              width: width,
              height: 120,
              marginTop: 12,
            }}
          >
            <View
              style={{
                width: width * 0.95,
                borderRadius: 2,
                height: 120,
                alignSelf: "center",
                marginTop: 10,
              }}
            >
              <TextInput
                onChangeText={(text) => {
                  setposttext(text);
                }}
                style={{
                  fontSize: 14,
                  padding: 3,
                  left: 10,
                  width: width * 0.7,
                }}
                multiline={true}
                placeholder="Write something here..."
              />
            </View>
          </View>
          {posttext && (
            <TouchableOpacity
              disabled={!posttext.length > 0}
              style={{
                width: width * 0.5,
                height: 50,
                alignSelf: "center",
                marginTop: 20,
              }}
            >
              <View>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Tab", { data });
                  }}
                  style={{
                    width: width * 0.2,
                    flexDirection: "row",
                    alignItems: "center",
                    alignSelf: "center",
                  }}
                >
                  <AntDesign name="pluscircle" size={30} color="#F8831C" />
                  <Text
                    style={{
                      fontSize: 14,
                      color: "#3B3B3B",
                      fontFamily: "Prompt-Regular",
                      marginLeft: 10,
                    }}
                  >
                    Tag
                  </Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )}

          <TouchableOpacity onPress={() => {  navigation.navigate("Feed");}} style={style.Post}>
            <Text
              style={{
                fontFamily: "Prompt-Regular",
                color: "#fff",
                fontSize: 16,
                textAlign: "center",
              }}
            >
              Post
            </Text>
          </TouchableOpacity>
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

export default Post;
