import React, { useEffect, useState, useRef, useCallback } from "react";
import {
  Dimensions,
  LogBox,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Platform,
  ImageBackground,
} from "react-native";
// import socketIOClient from "socket.io-client";
import { GiftedChat } from "react-native-gifted-chat";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { useRecoilState } from "recoil";
import { MaterialIcons } from "@expo/vector-icons";

import firebase from "@react-native-firebase/app";
// import "firebase/firebase-storage";

const { width, height } = Dimensions.get("screen");
LogBox.ignoreAllLogs();

export default function chat({ navigation, route, item }) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const userC = route.params.user;
  console.log("vete......", userC);
  const vete = route.params.data;
  console.log("vete......", vete);

  const firebaseConfig = {
    apiKey: "AIzaSyCuYLSy250TRBWJIGlM5nIKcZ9XuQqxRSw",
    authDomain: "hmameaw-9ab0c.firebaseapp.com",
    projectId: "hmameaw-9ab0c",
    storageBucket: "hmameaw-9ab0c.appspot.com",
    messagingSenderId: "33158550281",
    appId: "1:33158550281:web:d03d47505fae4a98eff9d8",
    measurementId: "G-WXM1WNHN2H",
  };
  // Initialize Firebase
  if (!firebase.apps.length) {
    app = firebase.initializeApp(firebaseConfig);
    firebase.firestore();
  }

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    console.log(messages);
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
    const { _id, createdAt, text, user } = messages[0];
    firebase
      .firestore()
      .collection("chats")
      .add({ _id, createdAt, text, user });
  }, []);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View
        style={{
          width: width,
          flexDirection: "row",
          height: 40,
          marginTop: Platform.OS == "android" ? 30 : 0,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{ width: 20, marginLeft: 10 }}
        >
          <Entypo name="chevron-left" size={24} color="#555" />
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 18,
            // fontFamily: "Kanit-Regular",
            color: "#219653",
            marginLeft: 10,
          }}
        >
          {/* {route.params.newmessage.fullname} */}
        </Text>
        <View style={{ width: 20 }} />
      </View>

      <GiftedChat
        messages={messages}
        showAvatarForEveryMessage={true}
        onSend={(messages) => onSend(messages)}
        // user={{
        //   _id: 1,
        // }}
      />
    </SafeAreaView>
  );
}
