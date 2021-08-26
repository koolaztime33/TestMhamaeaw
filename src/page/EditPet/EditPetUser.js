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
  TextInput,
  Modal,
} from "react-native";
import {
  FontAwesome,
  AntDesign,
  Octicons,
  Ionicons,
  Entypo,
  MaterialIcons,
} from "@expo/vector-icons";

import Doctor from "../../component/Doctor";
import { Calendar } from "react-native-calendars";
import { tokenState } from "../../reducer/reducer/Atom";
import { useRecoilState } from "recoil";
import { apiservice } from "../../service/api";

const { width, height } = Dimensions.get("screen");
const EditPetUser = ({ navigation, route }) => {
  const prilfeED = route.params.Pat0;
  console.log("prilfeED>>>>", prilfeED);
  const [handelCalendar, setHandelCalendar] = useState(false);
  const [dateState, setDateState] = useState(new Date());
  const [day, setday] = useState(new Date());

  const [body, setbody] = useState({
    name: "",
    gender: "",
    color: "",
    type: "",
    weight: "",
    age: "",
  });
  console.log(day);
  async function Petpost() {
    let Pet = {
      ...body,
      age: day,
    };

    console.log("Pet>>>>>>", Pet);
    const response = await apiservice({
      method: "Put",
      path: "api/pet/edit",
      token: token.token,
      body: Pet,
    });
    console.log(response.data);
  }

  const [token, settoken] = useRecoilState(tokenState);
  console.log(token.token);

  return (
    <View style={style.container}>
      <ScrollView>
        <Doctor navigation={navigation} header={"PROFILE"} />

        <View
          style={{
            width: width * 0.8,
            alignSelf: "center",
            //   backgroundColor: "red",
            marginTop: 20,
          }}
        >
          <Text
            style={{
              fontFamily: "Prompt-Medium",
              color: "#393939",
              fontSize: 18,
              marginVertical: 10,
            }}
          >
            Pet's Name
          </Text>
          <View style={style.Viewtext}>
            <TextInput
              style={style.textinput}
              onChangeText={(text) => setbody({ ...body, name: text })}
              defaultValue={prilfeED.name}
              placeholderTextColor="#DBDBDB"
              placeholder="กรอกชื่อสัตว์เลี้ยง"
            />
          </View>

          <Text
            style={{
              fontFamily: "Prompt-Medium",
              color: "#393939",
              fontSize: 18,
              marginVertical: 10,
            }}
          >
            Breed
          </Text>
          <View style={style.Viewtext}>
            <TextInput
              style={style.textinput}
              onChangeText={(text) => setbody({ ...body, type: text })}
              defaultValue={prilfeED.type}
              placeholderTextColor="#DBDBDB"
              placeholder="สายพันธ์"
            />
          </View>

          <Text
            style={{
              fontFamily: "Prompt-Medium",
              color: "#393939",
              fontSize: 18,
              marginVertical: 10,
            }}
          >
            Gender
          </Text>
          <View style={style.Viewtext}>
            <TextInput
              style={style.textinput}
              onChangeText={(text) => setbody({ ...body, gender: text })}
              defaultValue={prilfeED.gender}
              placeholderTextColor="#DBDBDB"
              placeholder="ระบุเพศ"
            />
          </View>
          <Text
            style={{
              fontFamily: "Prompt-Medium",
              color: "#393939",
              fontSize: 18,
              marginVertical: 10,
            }}
          >
            Color
          </Text>
          <View style={style.Viewtext}>
            <TextInput
              style={style.textinput}
              onChangeText={(text) => setbody({ ...body, color: text })}
              defaultValue={prilfeED.color}
              placeholderTextColor="#DBDBDB"
              placeholder="ระบุสีของสัตว์เลี้ยง"
            />
          </View>
          <Text
            style={{
              fontFamily: "Prompt-Medium",
              color: "#393939",
              fontSize: 18,
              marginVertical: 10,
            }}
          >
            Weight
          </Text>
          <View
            style={{
              width: width * 0.15,
              height: 38,
              flexDirection: "row",
            }}
          >
            <TextInput
              style={{
                width: width * 0.15,
                height: 38,
                backgroundColor: "#fff",
                marginTop: 10,
                borderRadius: 10,
                textAlign: "center",
                fontFamily: "Prompt-Regular",
              }}
              onChangeText={(text) => setbody({ ...body, weight: text })}
              defaultValue={prilfeED.weight}
              placeholderTextColor="#DBDBDB"
              placeholder="น้ำหนัก"
            />
            <View
              style={{
                width: width * 0.15,
                height: 38,
                marginLeft: 15,
                fontFamily: "Prompt-Regular",
                fontSize: 18,
              }}
            >
              <Text
                style={{
                  fontFamily: "Prompt-Medium",
                  color: "#393939",
                  fontSize: 18,
                  marginVertical: 10,
                  marginTop: 15,
                }}
              >
                Kg
              </Text>
            </View>
          </View>

          <Text
            style={{
              fontFamily: "Prompt-Medium",
              color: "#393939",
              fontSize: 18,
              marginVertical: 15,
            }}
          >
            Age
          </Text>
          <TouchableOpacity
            onPress={() => {
              setHandelCalendar((val) => !val);
            }}
            style={{
              width: width * 0.8,
              height: 38,
              backgroundColor: "#fff",
              marginTop: 10,
              borderRadius: 10,
              marginVertical: 10,
              flexDirection: "row",
            }}
          >
            <View
              style={{
                width: width * 0.1,
                height: 38,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                style={{ width: 20, height: 20 }}
                source={require("../../image/calendar.png")}
              />
            </View>

            <View
              style={{
                width: width * 0.6,
                height: 38,
                // backgroundColor: "#F75356",
              }}
            >
              <TextInput
                onChangeText={(text) => setday(text)}
                defaultValue={day}
                style={{
                  width: width * 0.7,
                  height: 38,
                  marginLeft: 15,
                  fontFamily: "Prompt-Regular",
                  fontSize: 18,
                }}
                placeholderTextColor="#DBDBDB"
                placeholder="เลือกวันเกิด"
              />
            </View>
            <AntDesign
              name="down"
              size={24}
              color="#ECECEC"
              style={{ marginTop: 8 }}
            />
          </TouchableOpacity>

          {handelCalendar && (
            <Calendar
              theme={{
                agendaDayTextColor: "yellow",
                agendaDayNumColor: "green",
                agendaTodayColor: "red",
                agendaKnobColor: "blue",
              }}
              onDayPress={(day) => {
                setday(day.dateString);
                setbody({ ...body, age: day.dateString });
                console.log("day pressed");
              }}
            />
          )}
        </View>

        <TouchableOpacity
          onPress={() => {
            Petpost();
            // navigation.navigate("Profilelist");
          }}
          style={{
            width: 108,
            height: 26,
            backgroundColor: "#F8831C",
            alignSelf: "center",
            borderRadius: 6,
            marginTop: 15,
          }}
        >
          <Text
            style={{
              fontFamily: "Prompt-Medium",
              color: "#fff",
              fontSize: 18,
              textAlign: "center",
            }}
          >
            SAVE
          </Text>
        </TouchableOpacity>

        <View style={{ marginBottom: 20 }}></View>
      </ScrollView>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6F6",
  },
  textinput: {
    width: width * 0.7,
    height: 38,
    marginLeft: 15,
    fontFamily: "Prompt-Regular",
    fontSize: 18,
  },
  Viewtext: {
    width: width * 0.8,
    height: 38,
    backgroundColor: "#fff",
    marginTop: 10,
    borderRadius: 6,
  },
});

export default EditPetUser;
