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
  Input,
} from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { Calendar } from "react-native-calendars";
import { DatePicker, Picker } from "react-native-woodpicker";

import Doctor from "../../component/Doctor";

const { width, height } = Dimensions.get("screen");
const AddPet = ({ navigation, route }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [stateBu, setstateBu] = useState(false);
  const [image, setImage] = useState();
  const [photo, setphoto] = useState();

  //   const [pickedDateStart, setPickedDateStart] = useState();
  //   const handleTextStart = () =>
  //   pickedDateStart ? pickedDateStart.toDateString() : "Please select";
  // const handleDateStartChange = (date) => setPickedDateStart(date);

  const [locate, setLo] = useState({});
  const [handelCalendar, setHandelCalendar] = useState(false);
  const [dateState, setDateState] = useState(new Date());
  const [day, setday] = useState(new Date());


  const changeDate = (e) => {
    setDateState(e);
  };

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
  };

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
              width: 292,
              height: 190,
              backgroundColor: "#fff",
              borderRadius: 50,
              flexDirection: "row",
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
                <Image source={require("../../image/photoup.png")} />
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
                  borderColor: "#DBDBDB",
                  borderWidth: 1,
                  borderRadius: 48,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FontAwesome name="file-photo-o" size={40} color="#DBDBDB" />
              </View>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
      <ScrollView>
        <Doctor navigation={navigation} header={"PROFILE"} />

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
              Upload photo
            </Text>
            <View>
              <AntDesign
                name="pluscircle"
                size={85}
                color="#FF7346"
                style={{ alignSelf: "center", marginTop: 28 }}
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
        </View>
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
              //   defaultValue={dataED.name}
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
              //   defaultValue={dataED.breed}
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
              //   defaultValue={dataED.sex}
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
              //   defaultValue={dataED.color}
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
              width: width * 0.2,
              height: 38,
              flexDirection: "row",
            }}
          >
            <TextInput
              style={{
                width: width * 0.2,
                height: 38,
                backgroundColor: "#fff",
                marginTop: 10,
                borderRadius: 10,
                textAlign: "center",
                fontFamily: "Prompt-Medium",
              }}
              //   defaultValue={dataED.we}
              placeholderTextColor="#DBDBDB"
              placeholder="น้ำหนัก"
            />
            <View
              style={{
                width: width * 0.2,
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
            <AntDesign name="down" size={24} color="#ECECEC" style={{marginTop:8}} />
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
                console.log("day pressed", day.dateString);
              }}
            />
          )}
        </View>

        <TouchableOpacity
          style={{
            width: 108,
            height: 26,
            backgroundColor: "#F8831C",
            alignSelf: "center",
            borderRadius:6
          }}
        >
          <Text
            style={{ fontFamily: "Prompt-Medium", color: "#fff", fontSize: 18,textAlign:'center' }}
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
    borderRadius: 10,
    marginVertical: 10,
  },
});

export default AddPet;
