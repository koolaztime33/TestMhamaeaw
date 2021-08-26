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
  Platform,
} from "react-native";

import Friends from "./Friends/Friends";
import Popular from "./Popular/Popular";
import Comments from "./Comments/Comments";
import {
  FontAwesome,
  AntDesign,
  Octicons,
  Ionicons,
  Entypo,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const { width, height } = Dimensions.get("screen");
const Feed = ({ navigation }) => {
  const data = [
    {
      friends: "Dash Lee",
      img: require("../../image/FriendsListA1.png"),
      time: "5:30 PM",
      status: "yes",
      tab: "Shares",
      adduser: "ADD",
      tabf: "Earl Garcia, Nancy Maio, and 20 others",
      imgPost: require("../../image/Post.png"),
      like: "120",
      Com: "60",
      Shares: "60",
      headerPost: "My Family very Happy ^^",
      dataPost:
        "Obsessed with my desk at work. All cleaned & organizedafter 5 years #workdesk #worklife #agency    ",
      timeout: "22 hours ago",
    },

    {
      friends: "Anne Belle",
      img: require("../../image/FriendsListA2.png"),
      time: "5:30 PM",
      status: "yes",
      tab: "Shares",
      adduser: "ADD",
      tabf: "Earl Garcia, Nancy Maio, and 20 others",
      imgPost: require("../../image/Post.png"),
      like: "120",
      Com: "60",
      Shares: "60",
      headerPost: "My Family very Happy ^^",
      dataPost:
        "Obsessed with my desk at work. All cleaned & organizedafter 5 years #workdesk #worklife #agency    ",
      timeout: "22 hours ago",
    },
    {
      friends: "Jason",
      img: require("../../image/FriendsListA3.png"),
      time: "5:30 PM",
      status: "yes",
      tab: "Shares",
      adduser: "ADD",
      tabf: "Earl Garcia, Nancy Maio, and 20 others",
      imgPost: require("../../image/Post.png"),
      like: "120",
      Com: "60",
      Shares: "60",
      headerPost: "My Family very Happy ^^",
      dataPost:
        "Obsessed with my desk at work. All cleaned & organizedafter 5 years #workdesk #worklife #agency    ",
      timeout: "22 hours ago",
    },
    {
      friends: "Samantha Fox",
      img: require("../../image/FriendsListA4.png"),
      time: "5:30 PM",
      status: "yes",
      tab: "Shares",
      adduser: "ADD",
      tabf: "Earl Garcia, Nancy Maio, and 20 others",
      imgPost: require("../../image/Post.png"),
      like: "120",
      Com: "60",
      Shares: "60",
      headerPost: "My Family very Happy ^^",
      dataPost:
        "Obsessed with my desk at work. All cleaned & organizedafter 5 years #workdesk #worklife #agency    ",
      timeout: "22 hours ago",
    },
    {
      friends: "Jason",
      img: require("../../image/FriendsListA3.png"),
      time: "5:30 PM",
      status: "yes",
      tab: "Shares",
      adduser: "ADD",
      tabf: "Earl Garcia, Nancy Maio, and 20 others",
      imgPost: require("../../image/Post.png"),
      like: "120",
      Com: "60",
      Shares: "60",
      headerPost: "My Family very Happy ^^",
      dataPost:
        "Obsessed with my desk at work. All cleaned & organizedafter 5 years #workdesk #worklife #agency    ",
      timeout: "22 hours ago",
    },
    {
      friends: "Samantha Fox",
      img: require("../../image/FriendsListA4.png"),
      time: "5:30 PM",
      status: "yes",
      tab: "Shares",
      adduser: "NoADD",
      tabf: "Earl Garcia, Nancy Maio, and 20 others",
      imgPost: require("../../image/Post.png"),
      like: "120",
      Com: "60",
      Shares: "60",
      headerPost: "My Family very Happy ^^",
      dataPost:
        "Obsessed with my desk at work. All cleaned & organizedafter 5 years #workdesk #worklife #agency    ",
      timeout: "22 hours ago",
    },
  ];
  const [data3, setdata3] = useState([
    {
      id: "1",
      img: require("../../image/f1.png"),
      name: "Ronald Shores",
      com: "Impressive set up",
      com: "That was the day we got nothing...",
      status: "No",
      time: "22 hours ago",
      tab: "No",
      adduser: "ADD",
      tabf: "Earl Garcia, Nancy Maio, and 20 others",
      imgPost: require("../../image/Ba.png"),
      like: "120",
      Com: "60",
      Shares: "60",
      headerPost: "My Family very Happy ^^",
      dataPost:
        "Obsessed with my desk at work. All cleaned & organizedafter 5 years #workdesk #worklife #agency    ",
      timeout: "22 hours ago",
      select: false,
    },

    {
      id: "2",
      img: require("../../image/f2.png"),
      name: "Jimmy Love",
      com: "Where's you office?",
      status: "yes",
      tab: "Shares",
      adduser: "NoADD",
      tabf: "Earl Garcia, Nancy Maio,",
      imgPost: require("../../image/Post.png"),
      like: "120",
      Com: "60",
      Shares: "60",
      headerPost: "My Family very Happy ^^",
      dataPost:
        "Obsessed with my desk at work. All cleaned & organizedafter 5 years #workdesk #worklife #agency    ",
      timeout: "22 hours ago",
      select: false,
    },
    {
      id: "3",
      img: require("../../image/f3.png"),
      name: "Sha Gaines",
      com: "I remember being away that day",
      status: "yes",
      tab: "Shares",
      adduser: "NoADD",
      tabf: "Earl Garcia, Nancy Maio,",
      imgPost: require("../../image/Post.png"),
      like: "120",
      Com: "60",
      Shares: "60",
      headerPost: "My Family very Happy ^^",
      dataPost:
        "Obsessed with my desk at work. All cleaned & organizedafter 5 years #workdesk #worklife #agency    ",
      timeout: "22 hours ago",
      select: false,
    },
    {
      id: "4",
      img: require("../../image/f4.png"),
      name: "Ivey Wilson",
      com: "Hahaha you made me clean your...",
      status: "yes",
      tab: "Shares",
      adduser: "NoADD",
      tabf: "Earl Garcia, Nancy Maio,",
      imgPost: require("../../image/Post.png"),
      like: "120",
      Com: "60",
      Shares: "60",
      headerPost: "My Family very Happy ^^",
      dataPost:
        "Obsessed with my desk at work. All cleaned & organizedafter 5 years #workdesk #worklife #agency    ",
      timeout: "22 hours ago",
      select: false,
    },
    {
      id: "5",
      img: require("../../image/f5.png"),
      name: "Bradley Dame",
      com: "That was the day we got nothing...",
      status: "No",
      time: "22 hours ago",
      tab: "No",
      adduser: "ADD",
      tabf: "Earl Garcia, Nancy Maio, and 20 others",
      imgPost: require("../../image/Ba.png"),
      like: "120",
      Com: "60",
      Shares: "60",
      headerPost: "My Family very Happy ^^",
      dataPost:
        "Obsessed with my desk at work. All cleaned & organizedafter 5 years #workdesk #worklife #agency    ",
      timeout: "22 hours ago",
      select: false,
    },
  ]);
  const data2 = [
    {
      id: "1",
      friends: require("../../image/Popular1.png"),
      img: require("../../image/Popularf1.png"),
      name: "Deanna Walser",
      time: "5:30 PM",
      status: "yes",
      tab: "Shares",
      adduser: "NoADD",
      tabf: "Earl Garcia, Nancy Maio,",
      imgPost: require("../../image/Post.png"),
      like: "120",
      Com: "60",
      Shares: "60",
      headerPost: "My Family very Happy ^^",
      dataPost:
        "Obsessed with my desk at work. All cleaned & organizedafter 5 years #workdesk #worklife #agency    ",
      timeout: "22 hours ago",
      select: false,
    },

    {
      id: "2",
      friends: require("../../image/Popular2.png"),
      img: require("../../image/Popularf2.png"),
      name: "Janice Williams",
      time: "5:30 PM",
      status: "yes",
      tab: "Shares",
      adduser: "NoADD",
      tabf: "Earl Garcia, Nancy Maio,",
      imgPost: require("../../image/Post.png"),
      like: "120",
      Com: "60",
      Shares: "60",
      headerPost: "My Family very Happy ^^",
      dataPost:
        "Obsessed with my desk at work. All cleaned & organizedafter 5 years #workdesk #worklife #agency    ",
      timeout: "22 hours ago",
      select: false,
    },
    {
      id: "3",
      friends: require("../../image/Popular3.png"),
      img: require("../../image/Popularf3.png"),
      name: "Adam Neumann",
      time: "5:30 PM",
      status: "yes",
      tab: "Shares",
      adduser: "NoADD",
      tabf: "Earl Garcia, Nancy Maio,",
      imgPost: require("../../image/Post.png"),
      like: "120",
      Com: "60",
      Shares: "60",
      headerPost: "My Family very Happy ^^",
      dataPost:
        "Obsessed with my desk at work. All cleaned & organizedafter 5 years #workdesk #worklife #agency    ",
      timeout: "22 hours ago",
      select: false,
    },
  ];

  const [datach, setdatach] = useState([
    {
      id: "1",
      img: require("../../image/profileAdd.png"),
      name: "Baxter Johnson",
      time: "5:30 PM",
      status: "yes",
      tab: "Shares",
      adduser: "NoADD",
      tabf: "Earl Garcia, Nancy Maio, and 20 others",
      imgPost: require("../../image/Post.png"),
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
      img: require("../../image/profileAdd.png"),
      name: "Baxter Johnson",
      time: "5:30 PM",
      status: "yes",
      tab: "Shares",
      adduser: "NoADD",
      tabf: "Earl Garcia, Nancy Maio, and 20 others",
      imgPost: require("../../image/BaimgH.png"),
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
      id: "3",
      img: require("../../image/profilef.png"),
      name: "Hank Lozano",
      status: "No",
      time: "22 hours ago",
      tab: "No",
      adduser: "ADD",
      tabf: "Earl Garcia, Nancy Maio, and 20 others",
      imgPost: require("../../image/Ba.png"),
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

  const [refreshing, setRefreshing] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const [com1, setcom1] = useState(false);
  const [img, setimg] = useState(false);

  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const [state, setstate] = useState(false);
  const [keyindex, setkeyindex] = useState(Math.floor(Math.random() * 100 + 1));
  const [pig, setpig] = useState([]);

  return (
    <View style={style.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <SafeAreaView style={{ backgroundColor: "#F8831C" }} />
        <View
          style={{
            backgroundColor: "#000000",
            marginTop: Platform.OS === "ios" ? 0 : 25,
          }}
        ></View>

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
        <View
          style={{
            width: width,
            height: height * 0.09,
            flexDirection: "row",
            backgroundColor: "#F8831C",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              width: width * 0.1,
              justifyContent: "center",
              marginLeft: 10,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
              style={{ width: 35, height: 35 }}
            >
              <AntDesign name="left" size={27} color="#fff" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: width * 0.5,
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
              marginTop: 20,
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 5,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.openDrawer();
              }}
            >
              <Image source={require("../../image/icon.png")} />
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

              alignItems: "center",
            }}
          >
            <Image
              style={{
                width: 40,
                height: 40,
                borderRadius: 30,
              }}
              source={require("../../image/11.png")}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("User");
            }}
            style={{
              justifyContent: "center",
              width: width * 0.63,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: "#707070",
                fontFamily: "Prompt-Regular",
                marginLeft: 10,
              }}
            >
              Park Min-Young
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Post");
            }}
            style={{
              width: width * 0.15,
              justifyContent: "center",
              alignItems: "center",
              height: 70,
            }}
          >
            <AntDesign name="pluscircle" size={30} color="#F8831C" />
          </TouchableOpacity>
        </View>

        <View>
          <View
            style={{
              width: width,
              height: 60,
              backgroundColor: "#F6F6F6",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                width: width * 0.95,
                alignSelf: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  width: width * 0.83,
                  borderRadius: 5,
                  height: 35,
                  backgroundColor: "#fff",
                }}
              >
                <TextInput
                  style={{
                    fontSize: 14,
                    padding: 3,
                    left: 10,
                    width: width * 0.85,
                    fontFamily: "Prompt-Regular",
                  }}
                  multiline={true}
                  placeholder="ค้นหาชื่อเพื่อน / รายชื่อคนอื่นๆ"
                />
              </View>

              <View
                style={{
                  width: 35,
                  height: 35,
                  backgroundColor: "#E3DFE170",
                  borderRadius: 5,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Octicons name="search" size={24} color="#fff" />
              </View>
            </View>
          </View>

          <View
            style={{
              width: width,
              flexDirection: "row",
              alignSelf: "center",
              backgroundColor: "#F6F6F6",
              marginVertical: 10,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("FriendsList");
              }}
              style={{ width: width * 0.81 }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: "#393939",
                  fontFamily: "Prompt-Regular",
                  marginLeft: 10,
                }}
              >
                Friends
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("FriendsList");
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: "#393939",
                  fontFamily: "Prompt-Regular",
                  marginLeft: 20,
                }}
              >
                All
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ width: width, backgroundColor: "#F6F6F6" }}>
            <FlatList
              data={data}
              horizontal
              renderItem={({ item }) => {
                return <Friends item={item} navigation={navigation} />;
              }}
            />
          </View>
          <View
            style={{
              width: width,
              flexDirection: "row",
              backgroundColor: "#F6F6F6",
              left: 10,
              marginTop: 15,
            }}
          >
            <View style={{ width: width * 0.81 }}>
              <Text
                style={{
                  fontSize: 20,
                  color: "#393939",
                  fontFamily: "Prompt-Regular",
                }}
              >
                Popular
              </Text>
            </View>
          </View>

          <FlatList
            data={data2}
            horizontal
            renderItem={({ item }) => {
              return <Popular item={item} navigation={navigation} />;
            }}
          />

          {/* ส่วนการ Post */}

          <FlatList
            data={datach}
            key={keyindex}
            renderItem={({ item, index }) => {
              // console.log(item);
              return (
                <View
                  style={{
                    width: width,
                    backgroundColor: "#fff",
                  }}
                >
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("friends", { item });
                    }}
                    style={{
                      width: width,
                      height: 70,
                      alignSelf: "center",
                      flexDirection: "row",
                      marginTop: 15,
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
                          style={{ width: 42, height: 42 }}
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
                  </TouchableOpacity>

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
                            borderWidth: 3,
                            borderColor: "#fff",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Image
                            style={{ width: 80, height: 80 }}
                            source={require("../../image/Grandfather4.png")}
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
                            style={{ width: 80, height: 80 }}
                            source={require("../../image/Grandfather5.png")}
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
                        <Text
                          style={{
                            marginTop: 10,
                            fontSize: 12,
                            color: "#3B3B3B",
                            fontFamily: "Prompt-Regular",
                            left: 5,
                          }}
                        >
                          {item.tabf}
                        </Text>
                      </View>
                    </View>
                  )}

                  <TouchableOpacity
                    onPress={() => {
                      setimg(item.imgPost);
                      setModalVisible(!modalVisible);
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

                        // let arr = datach.map((items) =>
                        //   items.id == item.id
                        //     ? { ...items, select: !item.select }
                        //     : items
                        // );
                        // setdatach(arr);
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
                            source={require("../../image/like.png")}
                          />
                        ) : (
                          <Image
                            resizeMode={"stretch"}
                            style={{ width: 22, height: 21 }}
                            source={require("../../image/Nolike.png")}
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
                          source={require("../../image/com.png")}
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
                            width: 22,
                            height: 21,
                            backgroundColor: "#70707090",
                            borderRadius: 30,
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Image
                            resizeMode={"stretch"}
                            style={{ width: 13, height: 11 }}
                            source={require("../../image/Nosh.png")}
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
                  <View
                    onPress={() => {
                      // setcom1((val) => !val);
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
                          source={require("../../image/11.png")}
                        />
                      </View>

                      <View
                        style={{
                          width: width * 0.6,
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
                          width: width * 0.15,
                          height: 37,
                          justifyContent: "center",
                        }}
                      >
                        <MaterialIcons
                          name="photo-camera"
                          size={25}
                          color="black"
                          style={{ marginLeft: 22 }}
                        />
                      </View>

                      <View
                        style={{
                          width: width * 0.15,
                          height: 37,
                          justifyContent: "center",
                        }}
                      >
                        <MaterialCommunityIcons
                          name="send"
                          size={24}
                          color="black"
                        />
                      </View>
                    </View>
                  </View>

                  {item.chack && (
                    <View>
                      <FlatList
                        data={data3}
                        renderItem={({ item }) => {
                          return (
                            <Comments item={item} navigation={navigation} />
                          );
                        }}
                      />
                    </View>
                  )}
                </View>
              );
            }}
          />
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

export default Feed;
