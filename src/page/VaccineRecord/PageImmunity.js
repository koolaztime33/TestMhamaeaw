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
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { Calendar } from "react-native-calendars";
import Doctor from "../../component/Doctor";
import * as ImagePicker from "expo-image-picker";
import * as ImageManipulator from "expo-image-manipulator";

const { width, height } = Dimensions.get("screen");
const PageImmunity = ({ navigation }) => {
  const [handelCalendarstart, setHandelCalendarstart] = useState(false);
  const [handelCalendarEnd, setHandelCalendarEnd] = useState(false);
  const [daystart, setdaystart] = useState(new Date());
  const [dayEnd, setdayEnd] = useState(new Date());

  const [modalVisible, setModalVisible] = useState(false);

  const [image, setImage] = useState();
  const [photo, setphoto] = useState();
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

  const [data, setdata] = useState([]);
  const [modalVisibleStartdate, setmodalVisibleStartdate] = useState(false);
  const [modalVisibleEntdate, setmodalVisibleEntdate] = useState(false);
  const [Save, setSave] = useState(false);
  return (
    <View style={style.container}>
      <ScrollView>
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

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisibleStartdate}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setmodalVisibleStartdate(!modalVisibleStartdate);
          }}
        >
          <TouchableOpacity
            onPress={() => [setmodalVisibleStartdate(!modalVisibleStartdate)]}
            style={{
              flex: 1,
              backgroundColor: "#000000aa",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: 390,
                height: 390,
                borderRadius: 20,
                backgroundColor: "#fff",
                justifyContent: "center",
              }}
            >
              <Calendar
                theme={{
                  agendaDayTextColor: "yellow",
                  agendaDayNumColor: "green",
                  agendaTodayColor: "red",
                  agendaKnobColor: "blue",
                }}
                onDayPress={(day) => {
                  setdaystart(day.dateString);
                  setmodalVisibleStartdate(!modalVisibleStartdate);
                  console.log("day pressed", day.dateString);
                }}
              />
            </View>
          </TouchableOpacity>
        </Modal>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisibleEntdate}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setmodalVisibleEntdate(!modalVisibleEntdate);
          }}
        >
          <TouchableOpacity
            onPress={() => [setmodalVisibleEntdate(!modalVisibleEntdate)]}
            style={{
              flex: 1,
              backgroundColor: "#000000aa",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: 390,
                height: 390,
                borderRadius: 20,
                backgroundColor: "#fff",
                justifyContent: "center",
              }}
            >
              <Calendar
                theme={{
                  agendaDayTextColor: "yellow",
                  agendaDayNumColor: "green",
                  agendaTodayColor: "red",
                  agendaKnobColor: "blue",
                }}
                onDayPress={(day) => {
                  setdayEnd(day.dateString);
                  setmodalVisibleEntdate(!modalVisibleEntdate);
                  console.log("day pressed", day.dateString);
                }}
              />
            </View>
          </TouchableOpacity>
        </Modal>

        <SafeAreaView style={{ backgroundColor: "#2A2A2A" }} />

        <Doctor navigation={navigation} header="ตารางบันทึกวัคซีน" />

        <View>
          <View
            style={{
              width: width * 0.86,
              height: 50,
              marginTop: 20,
              alignSelf: "center",
              flexDirection: "row",
            }}
          >
            <View style={{ width: width * 0.6, flexDirection: "row" }}>
              <Image
                style={{ width: 42, height: 50 }}
                source={require("../../image/Maew.png")}
              />

              <Image
                resizeMode={"stretch"}
                style={{ width: 70, height: 45, marginHorizontal: 20 }}
                source={require("../../image/logo_bot2.png")}
              />
            </View>
            <View
              style={{
                width: width * 0.28,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {Save ? (
                <TouchableOpacity
                  onPress={() => {
                    setSave((val) => !val);
                  }}
                  style={{
                    width: 97,
                    height: 28,
                    backgroundColor: "#FFB574",
                    justifyContent: "center",
                    borderRadius: 6,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      color: "#444444",
                      fontFamily: "Prompt-Regular",
                      textAlign: "center",
                    }}
                  >
                    EDIT
                  </Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    setSave((val) => !val);
                  }}
                  style={{
                    width: 97,
                    height: 28,
                    backgroundColor: "#FFB574",
                    justifyContent: "center",
                    borderRadius: 6,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      color: "#444444",
                      fontFamily: "Prompt-Regular",
                      textAlign: "center",
                    }}
                  >
                    SAVE
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>

          <View style={style.Viewstyle}>
            <View style={style.Header}>
              <Text
                style={{
                  fontSize: 12,
                  color: "#fff",
                  fontFamily: "Prompt-Regular",
                  textAlign: "center",
                }}
              >
                วัคซีนป้องกันโรคภูมิคุ้มกันบกพร่อง ในแมว
              </Text>
            </View>

            <View
              style={{
                width: width * 0.9,
                height: 434,
                flexDirection: "row",
                // backgroundColor:'red'
              }}
            >
              <View
                style={{
                  width: width * 0.9,
                  height: 153,
                }}
              >
                <View
                  style={{
                    width: width * 0.9,
                    height: 70,
                    flexDirection: "row",
                  }}
                >
                  <View style={style.Day}>
                    <Text
                      style={{
                        fontSize: 16,
                        color: "#393939",
                        fontFamily: "Prompt-Regular",
                        left: 7,
                      }}
                    >
                      วันที่ฉีด
                    </Text>
                    <TouchableOpacity
                      onPress={() => {
                        setmodalVisibleStartdate(!modalVisibleStartdate);
                      }}
                      style={style.Calen}
                    >
                      <View
                        style={{
                          width: 28,
                          height: 12,
                          left: 3,
                        }}
                      >
                        <Image
                          style={{ width: 19, height: 21 }}
                          source={require("../../image/calendar.png")}
                        />
                      </View>

                      <View
                        style={{
                          width: 105,
                          height: 26,
                          // backgroundColor:'red'
                        }}
                      >
                        <TextInput
                          onChangeText={(text) => setdaystart(text)}
                          defaultValue={daystart}
                          style={{
                            width: 105,
                            height: 26,
                            fontFamily: "Prompt-Regular",
                            fontSize: 12,
                          }}
                          placeholderTextColor="#DBDBDB"
                          placeholder="ระบุวัน"
                        />
                      </View>

                      <AntDesign
                        name="down"
                        size={15}
                        color="#DBDBDB"
                        style={{ marginTop: 5 }}
                      />
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      width: width * 0.26,
                      height: 70,
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        color: "#393939",
                        fontFamily: "Prompt-Regular",
                        left: 3,
                      }}
                    >
                      นัดครั้งต่อไป
                    </Text>
                    <TouchableOpacity
                      onPress={() => {
                        setmodalVisibleEntdate(!modalVisibleEntdate);
                      }}
                      style={style.Calen}
                    >
                      <View
                        style={{
                          width: 28,
                          height: 12,
                          left: 3,
                        }}
                      >
                        <Image
                          style={{ width: 19, height: 21 }}
                          source={require("../../image/calendar.png")}
                        />
                      </View>

                      <View
                        style={{
                          width: 105,
                          height: 26,
                        }}
                      >
                        <TextInput
                          onChangeText={(text) => setdayEnd(text)}
                          defaultValue={dayEnd}
                          style={{
                            width: 105,
                            height: 26,
                            fontFamily: "Prompt-Regular",
                            fontSize: 12,
                          }}
                          placeholderTextColor="#DBDBDB"
                          placeholder="ระบุวัน"
                        />
                      </View>

                      <AntDesign
                        name="down"
                        size={15}
                        color="#DBDBDB"
                        style={{ marginTop: 5 }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>

                <View
                  style={{
                    borderWidth: 0.5,
                    marginVertical: 10,
                    borderColor: "#F8831C",
                    width: width * 0.895,
                  }}
                />
                <View style={style.Sa}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#393939",
                      fontFamily: "Prompt-Regular",
                      left: 5,
                    }}
                  >
                    สัตว์แพทย์/เลขที่ใบอนุญาต
                  </Text>
                  <TouchableOpacity style={style.ViewInputstyle}>
                    <View
                      style={{
                        width: width * 0.87,
                        height: 31,
                        left: 5,
                        justifyContent: "center",
                      }}
                    >
                      <TextInput
                        style={style.TextstyleInput}
                        placeholderTextColor="#DBDBDB"
                        placeholder="ชื่อคุณหมอ"
                      />
                    </View>
                  </TouchableOpacity>

                  <View
                    style={{
                      width: width * 0.87,
                      height: 31,
                      borderRadius: 3,
                      marginVertical: 5,
                      flexDirection: "row",
                      borderWidth: 0.5,
                      alignSelf: "center",
                      borderColor: "#717171",
                    }}
                  >
                    <View
                      style={{
                        width: width * 0.87,
                        height: 31,
                        left: 5,
                        justifyContent: "center",
                      }}
                    >
                      <TextInput
                        style={style.TextstyleInput}
                        placeholderTextColor="#DBDBDB"
                        placeholder="01-11677/2559"
                      />
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: width * 0.87,
                    height: 150,
                    alignSelf: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#393939",
                      fontFamily: "Prompt-Regular",
                    }}
                  >
                    ชื่อวัคซีน/หมายเลขชุดผลิต
                  </Text>

                  <TouchableOpacity
                    onPress={() => {
                      setModalVisible(!modalVisible);
                    }}
                    style={{
                      width: width * 0.85,
                      backgroundColor: "#F6D6D7",
                      height: 120,
                      marginTop: 10,
                    }}
                  >
                    {image && (
                      <View
                        style={{
                          width: width * 0.87,
                          backgroundColor: "#F6D6D7",
                          height: 120,
                          position: "absolute",
                        }}
                      ></View>
                    )}
                    <Text
                      style={{
                        fontSize: 17,
                        color: "#E25E31",
                        fontFamily: "Prompt-Regular",
                        textAlign: "center",
                        marginTop: 15,
                      }}
                    >
                      Upload photo
                    </Text>
                    <View>
                      <AntDesign
                        name="pluscircle"
                        size={35}
                        color="#FF7346"
                        style={{ alignSelf: "center", marginTop: 15 }}
                      />
                      {image && (
                        <Image
                          resizeMode={"stretch"}
                          source={{ uri: image }}
                          style={{
                            width: width * 0.87,
                            height: 120,
                            alignItems: "center",
                            justifyContent: "center",
                            position: "absolute",
                            marginTop: -40,
                          }}
                        />
                      )}
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          {handelCalendarstart && (
            <Calendar
              theme={{
                agendaDayTextColor: "yellow",
                agendaDayNumColor: "green",
                agendaTodayColor: "red",
                agendaKnobColor: "blue",
              }}
              onDayPress={(day) => {
                setdaystart(day.dateString);

                console.log("day pressed", day.dateString);
              }}
            />
          )}

          {handelCalendarEnd && (
            <Calendar
              theme={{
                agendaDayTextColor: "yellow",
                agendaDayNumColor: "green",
                agendaTodayColor: "red",
                agendaKnobColor: "blue",
              }}
              onDayPress={(day) => {
                setdayEnd(day.dateString);
                console.log("day pressed", day.dateString);
              }}
            />
          )}
        </View>
        <FlatList
          data={data}
          renderItem={({ item }) => {
            return (
              <View>
                <View
            style={{
              width: width * 0.86,
              height: 50,
              marginTop: 20,
              alignSelf: "center",
              flexDirection: "row",
            }}
          >
            <View style={{ width: width * 0.6, flexDirection: "row" }}>
              <Image
                style={{ width: 42, height: 50 }}
                source={require("../../image/Maew.png")}
              />

              <Image
                resizeMode={"stretch"}
                style={{ width: 70, height: 45, marginHorizontal: 20 }}
                source={require("../../image/logo_bot2.png")}
              />
            </View>
            <View
              style={{
                width: width * 0.28,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {Save ? (
                <TouchableOpacity
                  onPress={() => {
                    setSave((val) => !val);
                  }}
                  style={{
                    width: 97,
                    height: 28,
                    backgroundColor: "#FFB574",
                    justifyContent: "center",
                    borderRadius: 6,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      color: "#444444",
                      fontFamily: "Prompt-Regular",
                      textAlign: "center",
                    }}
                  >
                    EDIT
                  </Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    setSave((val) => !val);
                  }}
                  style={{
                    width: 97,
                    height: 28,
                    backgroundColor: "#FFB574",
                    justifyContent: "center",
                    borderRadius: 6,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      color: "#444444",
                      fontFamily: "Prompt-Regular",
                      textAlign: "center",
                    }}
                  >
             SAVE
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>

                <View style={style.Viewstyle}>
                  <View style={style.Header}>
                    <Text
                      style={{
                        fontSize: 12,
                        color: "#fff",
                        fontFamily: "Prompt-Regular",
                        textAlign: "center",
                      }}
                    >
                      วัคซีนป้องกันโรคภูมิคุ้มกันบกพร่อง ในแมว
                    </Text>
                  </View>

                  <View
                    style={{
                      width: width * 0.9,
                      height: 434,
                      flexDirection: "row",
                      // backgroundColor:'red'
                    }}
                  >
                    <View
                      style={{
                        width: width * 0.9,
                        height: 153,
                      }}
                    >
                      <View
                        style={{
                          width: width * 0.9,
                          height: 70,
                          flexDirection: "row",
                        }}
                      >
                        <View style={style.Day}>
                          <Text
                            style={{
                              fontSize: 16,
                              color: "#393939",
                              fontFamily: "Prompt-Regular",
                              left: 7,
                            }}
                          >
                            วันที่ฉีด
                          </Text>
                          <TouchableOpacity
                            onPress={() => {
                              setHandelCalendarstart((val) => !val);
                            }}
                            style={style.Calen}
                          >
                            <View
                              style={{
                                width: 28,
                                height: 12,
                                left: 3,
                              }}
                            >
                              <Image
                                style={{ width: 19, height: 21 }}
                                source={require("../../image/calendar.png")}
                              />
                            </View>

                            <View
                              style={{
                                width: 105,
                                height: 26,
                                // backgroundColor:'red'
                              }}
                            >
                              <TextInput
                                onChangeText={(text) => setdaystart(text)}
                                defaultValue={daystart}
                                style={{
                                  width: 105,
                                  height: 26,
                                  fontFamily: "Prompt-Regular",
                                  fontSize: 12,
                                }}
                                placeholderTextColor="#DBDBDB"
                                placeholder="ระบุวัน"
                              />
                            </View>

                            <AntDesign
                              name="down"
                              size={15}
                              color="#DBDBDB"
                              style={{ marginTop: 5 }}
                            />
                          </TouchableOpacity>
                        </View>
                        <View
                          style={{
                            width: width * 0.26,
                            height: 70,
                            justifyContent: "center",
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 16,
                              color: "#393939",
                              fontFamily: "Prompt-Regular",
                              left: 3,
                            }}
                          >
                            นัดครั้งต่อไป
                          </Text>
                          <TouchableOpacity
                            onPress={() => {
                              setHandelCalendarEnd((val) => !val);
                            }}
                            style={style.Calen}
                          >
                            <View
                              style={{
                                width: 28,
                                height: 12,
                                left: 3,
                              }}
                            >
                              <Image
                                style={{ width: 19, height: 21 }}
                                source={require("../../image/calendar.png")}
                              />
                            </View>

                            <View
                              style={{
                                width: 105,
                                height: 26,
                              }}
                            >
                              <TextInput
                                onChangeText={(text) => setdayEnd(text)}
                                defaultValue={dayEnd}
                                style={{
                                  width: 105,
                                  height: 26,
                                  fontFamily: "Prompt-Regular",
                                  fontSize: 12,
                                }}
                                placeholderTextColor="#DBDBDB"
                                placeholder="ระบุวัน"
                              />
                            </View>

                            <AntDesign
                              name="down"
                              size={15}
                              color="#DBDBDB"
                              style={{ marginTop: 5 }}
                            />
                          </TouchableOpacity>
                        </View>
                      </View>

                      <View
                        style={{
                          borderWidth: 0.5,
                          marginVertical: 10,
                          borderColor: "#F8831C",
                          width: width * 0.895,
                        }}
                      />
                      <View style={style.Sa}>
                        <Text
                          style={{
                            fontSize: 16,
                            color: "#393939",
                            fontFamily: "Prompt-Regular",
                            left: 5,
                          }}
                        >
                          สัตว์แพทย์/เลขที่ใบอนุญาต
                        </Text>
                        <TouchableOpacity style={style.ViewInputstyle}>
                          <View
                            style={{
                              width: width * 0.87,
                              height: 31,
                              left: 5,
                              justifyContent: "center",
                            }}
                          >
                            <TextInput
                              style={style.TextstyleInput}
                              placeholderTextColor="#DBDBDB"
                              placeholder="ชื่อคุณหมอ"
                            />
                          </View>
                        </TouchableOpacity>

                        <View
                          style={{
                            width: width * 0.87,
                            height: 31,
                            borderRadius: 3,
                            marginVertical: 5,
                            flexDirection: "row",
                            borderWidth: 0.5,
                            alignSelf: "center",
                            borderColor: "#717171",
                          }}
                        >
                          <View
                            style={{
                              width: width * 0.87,
                              height: 31,
                              left: 5,
                              justifyContent: "center",
                            }}
                          >
                            <TextInput
                              style={style.TextstyleInput}
                              placeholderTextColor="#DBDBDB"
                              placeholder="01-11677/2559"
                            />
                          </View>
                        </View>
                      </View>
                      <View
                        style={{
                          width: width * 0.87,
                          height: 150,
                          alignSelf: "center",
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 16,
                            color: "#393939",
                            fontFamily: "Prompt-Regular",
                          }}
                        >
                          ชื่อวัคซีน/หมายเลขชุดผลิต
                        </Text>

                        <TouchableOpacity
                          onPress={() => {
                            setModalVisible(!modalVisible);
                          }}
                          style={{
                            width: width * 0.85,
                            backgroundColor: "#F6D6D7",
                            height: 120,
                            marginTop: 10,
                          }}
                        >
                          {image && (
                            <View
                              style={{
                                width: width * 0.87,
                                backgroundColor: "#F6D6D7",
                                height: 120,
                                position: "absolute",
                              }}
                            ></View>
                          )}
                          <Text
                            style={{
                              fontSize: 17,
                              color: "#E25E31",
                              fontFamily: "Prompt-Regular",
                              textAlign: "center",
                              marginTop: 15,
                            }}
                          >
                            Upload photo
                          </Text>
                          <View>
                            <AntDesign
                              name="pluscircle"
                              size={35}
                              color="#FF7346"
                              style={{ alignSelf: "center", marginTop: 15 }}
                            />
                            {image && (
                              <Image
                                resizeMode={"stretch"}
                                source={{ uri: image }}
                                style={{
                                  width: width * 0.87,
                                  height: 120,
                                  alignItems: "center",
                                  justifyContent: "center",
                                  position: "absolute",
                                  marginTop: -40,
                                }}
                              />
                            )}
                          </View>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>

                {handelCalendarstart && (
                  <Calendar
                    theme={{
                      agendaDayTextColor: "yellow",
                      agendaDayNumColor: "green",
                      agendaTodayColor: "red",
                      agendaKnobColor: "blue",
                    }}
                    onDayPress={(day) => {
                      setdaystart(day.dateString);

                      console.log("day pressed", day.dateString);
                    }}
                  />
                )}

                {handelCalendarEnd && (
                  <Calendar
                    theme={{
                      agendaDayTextColor: "yellow",
                      agendaDayNumColor: "green",
                      agendaTodayColor: "red",
                      agendaKnobColor: "blue",
                    }}
                    onDayPress={(day) => {
                      setdayEnd(day.dateString);
                      console.log("day pressed", day.dateString);
                    }}
                  />
                )}
              </View>
            );
          }}
          ListFooterComponent={
            <View>
              <TouchableOpacity
                onPress={() => {
                  setdata((val) => val.concat({}));
                }}
                style={{
                  width: width,
                  height: 90,
                  marginVertical: 15,
                  alignSelf: "center",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <AntDesign name="pluscircle" size={45} color="#F8831C" />
              </TouchableOpacity>
            </View>
          }
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
  Viewstyle: {
    width: width * 0.9,
    height: 434,
    backgroundColor: "#fff",
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "#ECECEC",
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    marginTop: -2,
  },
  Header: {
    width: width * 0.9,
    height: 27,
    backgroundColor: "#1D9094",
    justifyContent: "center",
    borderTopRightRadius: 6,
    borderTopLeftRadius: 6,
  },
  Calen: {
    width: 157,
    height: 26,
    marginTop: 10,
    borderRadius: 3,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ECECEC",
    marginLeft: 5,
  },
  Day: {
    width: width * 0.45,
    height: 70,
    justifyContent: "center",
  },
  Sa: {
    width: width * 0.9,
    height: 135,
  },

  ViewInputstyle: {
    width: width * 0.87,
    height: 31,
    marginTop: 15,
    borderRadius: 3,
    marginVertical: 15,
    flexDirection: "row",
    borderWidth: 0.5,
    borderColor: "#717171",
    alignSelf: "center",
  },
  TextstyleInput: {
    width: 158,
    height: 26,
    fontFamily: "Prompt-Regular",
    fontSize: 16,
  },
});
export default PageImmunity;
