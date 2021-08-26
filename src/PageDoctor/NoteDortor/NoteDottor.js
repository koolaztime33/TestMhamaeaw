import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Image,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
//icon

//Header
import Header from "../../component/Heder";

const { width, height } = Dimensions.get("screen");
const NoteDottor = ({ navigation, route }) => {
  const data = route.params.data;

  const [topic, settopic] = useState("");
  const [Details, setDetails] = useState("");
  const [Introduce, setIntroduce] = useState("");

  return (
    <View style={style.container}>
      <SafeAreaView style={{ backgroundColor: "#2A2A2A" }} />
      <KeyboardAwareScrollView scrollEnabled={false}>
      <Header navigation={navigation} />
      <TouchableOpacity
        style={{
          width: width * 1,
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
          }}
        >
          <Image
            style={{
              width: width * 0.2,
              height: 70,
            }}
            source={data.source}
          />
        </View>

        <View
          style={{
            width: width * 0.75,
            height: 70,
          }}
        >
          <Text
            style={{
              fontFamily: "Prompt-Regular",
              color: "#242134",
              fontSize: 17,
            }}
          >
            {data.name}
          </Text>
          <TouchableOpacity
            style={{
              width: 108,
              height: 26,
              backgroundColor: "#DBDBDB",
              alignSelf: "flex-end",
              justifyContent: "center",
              borderRadius: 6,
            }}
          >
            <Text
              style={{
                fontFamily: "Prompt-Regular",
                color: "#fff",
                fontSize: 14,
                textAlign: "center",
              }}
            >
              เก็บรายชื่อ
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>

      <Text
        style={{
          fontFamily: "Prompt-Regular",
          color: "#DBDBDB",
          fontSize: 14,
          left: 10,
          marginVertical: 7,
        }}
      >
        รายละเอียดของลูกค้า
      </Text>

      <View
        style={{
          width: width,
          height: 76,
          marginTop: 8,
          backgroundColor: "#fff",
        }}
      >
        <View
          style={{
            width: width * 0.9,
            borderRadius: 2,

            height: 80,
            alignSelf: "center",
          }}
        >
          <TextInput
            onChangeText={(text) => {
              settopic(text);
            }}
            style={{
              fontSize: 14,
              padding: 3,

              width: width * 0.7,
            }}
            multiline={true}
            placeholder="ชื่อสัตว์เลี้ยง"
          />
        </View>
      </View>

      <View
        style={{
          width: width,
          height: 174,
          marginTop: 8,
          backgroundColor: "#fff",
        }}
      >
        <View
          style={{
            width: width * 0.9,
            borderRadius: 2,

            height: 80,
            alignSelf: "center",
          }}
        >
          <TextInput
            onChangeText={(text) => {
              setDetails(text);
            }}
            style={{
              fontSize: 14,
              padding: 3,

              width: width * 0.7,
            }}
            multiline={true}
            placeholder="อาการและสาเหตุ"
          />
        </View>
      </View>
      <View
        style={{
          width: width,
          height: 121,
          marginTop: 8,
          backgroundColor: "#fff",
          marginTop:10
        }}
      >
        <View
          style={{
            width: width * 0.9,
            borderRadius: 2,
            height: 80,
            alignSelf: "center",
          }}
        >
          <TextInput
            onChangeText={(text) => {
              setIntroduce(text);
            }}
            style={{
              fontSize: 14,
              padding: 3,

              width: width * 0.7,
            }}
            multiline={true}
            placeholder="คำแนะนำ"
          />
        </View>
      </View>
      <View
        style={{
          width: width,
          height: 80,

          justifyContent: "center",
        }}
      >
        <View style={{ flexDirection: "row", alignSelf: "center" }}>
          <View style={{ width: width * 0.5 }}>
            <TouchableOpacity
              disabled={
                !topic.length > 0 &&
                !Details.length > 0 &&
                !Introduce.length > 0
              }
              style={{
                width: 108,
                height: 26,
                backgroundColor:
                  topic.length > 0 && Details.length > 0 && Introduce.length > 0
                    ? "#F8831C"
                    : "#DBDBDB",

                justifyContent: "center",
                borderRadius: 6,
              }}
            >
              <Text
                style={{
                  fontFamily: "Prompt-Regular",
                  color: "#fff",
                  fontSize: 14,
                  textAlign: "center",
                }}
              >
                บันทึก
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity  onPress={() => navigation.navigate("DottorList")}
            style={{
              width: 108,
              height: 26,
              backgroundColor: "#DBDBDB",
              alignSelf: "flex-end",
              justifyContent: "center",
              borderRadius: 6,
            }}
          >
            <Text
              style={{
                fontFamily: "Prompt-Regular",
                color: "#fff",
                fontSize: 14,
                textAlign: "center",
              }}
            >
              ยกเลิก
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6F6",
  },
});

export default NoteDottor;
