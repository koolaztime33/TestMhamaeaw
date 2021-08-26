import React, { Component } from "react";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Modal,
  TextInput,
} from "react-native";
import RtcEngine, {
  RtcLocalView,
  RtcRemoteView,
  VideoRenderMode,
} from "react-native-agora";
import { Feather, AntDesign } from "@expo/vector-icons";
const { width, height } = Dimensions.get("window");
import requestCameraAndAudioPermission from "./components/Permission";
import styles from "./components/Style";
import { Dimensions } from "react-native";

// interface Props {}

/**
 * @property peerIds Array for storing connected peers
 * @property appId
 * @property channelName Channel Name for the current session
 * @property joinSucceed State variable for storing success
 */
// interface State {
//   appId: string;
//   token: string;
//   channelName: string;
//   joinSucceed: boolean;
//   peerIds: number[];
// }

export default class App extends Component {
  constructor(props) {
    super(props);
    this._engine = new RtcEngine();
    this.state = {
      appId: "6f149b4cb1b84f2ba4805accb2946326",
      token:
        "0066f149b4cb1b84f2ba4805accb2946326IAAqWdqSFIqrcIDhbd8tvDnZOSegwmzVjnKPKf3MDOnYmgx+f9gAAAAAEAA8nW45A+0oYQEAAQAD7Shh",
      channelName: "test",
      openMicrophone: true,
      enableSpeakerphone: true,
      joinSucceed: false,
      peerIds: [],
      modalVisible: false,
      Score: 0,
    };

    // if (Platform.OS === 'android') {
    // Request required permissions from Android
    requestCameraAndAudioPermission().then(() => {
      console.log("requested!");
    });
    // }
  }

  componentDidMount() {
    this.init();
  }

  // Turn the microphone on or off.
  _switchMicrophone = () => {
    const { openMicrophone } = this.state;
    this._engine
      ?.enableLocalAudio(!openMicrophone)
      .then(() => {
        this.setState({ openMicrophone: !openMicrophone });
      })
      .catch((err) => {
        console.warn("enableLocalAudio", err);
      });
  };

  _switchSpeakerphone = () => {
    const { enableSpeakerphone } = this.state;
    this._engine
      ?.setEnableSpeakerphone(!enableSpeakerphone)
      .then(() => {
        this.setState({ enableSpeakerphone: !enableSpeakerphone });
      })
      .catch((err) => {
        console.warn("setEnableSpeakerphone", err);
      });
  };

  /**
   * @name init
   * @description Function to initialize the Rtc Engine, attach event listeners and actions
   */
  init = async () => {
    const { appId } = this.state;
    this._engine = await RtcEngine.create(appId);
    await this._engine.enableVideo();
    this.startCall();
    this._engine.addListener("Warning", (warn) => {
      console.log("Warning", warn);
    });

    this._engine.addListener("Error", (err) => {
      console.log("Error", err);
    });

    this._engine.addListener("UserJoined", (uid, elapsed) => {
      console.log("UserJoined", uid, elapsed);
      // Get current peer IDs
      const { peerIds } = this.state;
      // If new user
      if (peerIds.indexOf(uid) === -1) {
        this.setState({
          // Add peer ID to state array
          peerIds: [...peerIds, uid],
        });
      }
    });

    this._engine.addListener("UserOffline", (uid, reason) => {
      console.log("UserOffline", uid, reason);
      const { peerIds } = this.state;
      this.setState({
        // Remove peer ID from state array
        peerIds: peerIds.filter((id) => id !== uid),
      });
    });

    // If Local user joins RTC channel
    this._engine.addListener("JoinChannelSuccess", (channel, uid, elapsed) => {
      console.log("JoinChannelSuccess", channel, uid, elapsed);
      // Set state variable to true
      this.setState({
        joinSucceed: true,
      });
    });
  };

  /**
   * @name startCall
   * @description Function to start the call
   */
  startCall = async () => {
    // Join Channel using null token and channel name
    await this._engine?.joinChannel(
      this.state.token,
      this.state.channelName,
      null,
      0
    );
  };

  /**
   * @name endCall
   * @description Function to end the call
   */
  endCall = async () => {
    await this._engine?.leaveChannel();
    this.setState({ peerIds: [], joinSucceed: false, modalVisible: true });
  };

  render() {
    return (
      <View style={styles.max}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setState({
              modalVisible: !this.state.modalVisible,
            });
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "#000000aa",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: 335,
                height: 283,
                backgroundColor: "#fff",
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Prompt-Medium",
                  color: "#393939",
                  fontSize: 18,
                  marginTop: 10,
                }}
              >
                คุณภาพการโทรของคุณเป็นอย่างไร
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  width: 200,
                  alignSelf: "center",
                }}
              >
                <FlatList
                  data={[1, 2, 3, 4, 5]}
                  horizontal
                  renderItem={({ item, index }) => {
                    return (
                      <TouchableOpacity
                        onPress={() => {
                          // setScore();
                          // console.log(Score);
                          this.setState({
                            Score: index + 1,
                          });
                        }}
                      >
                        <AntDesign
                          name="star"
                          size={24}
                          color={
                            this.state.Score > index ? "#FCD010" : "#DCDCDC"
                          }
                          style={{ marginHorizontal: 5 }}
                        />
                      </TouchableOpacity>
                    );
                  }}
                />
              </View>
              <View
                style={{
                  width: width * 0.6,
                  height: 100,
                  backgroundColor: "#F6F6F6",
                  marginTop: 10,
                  borderRadius: 10,
                }}
              >
                <TextInput
                  style={{
                    width: width * 0.6,
                    marginLeft: 15,
                    fontFamily: "Prompt-Regular",
                    fontSize: 18,
                  }}
                  placeholderTextColor="#DBDBDB"
                  placeholder="ข้อเสนอแนะ"
                />
              </View>

              <TouchableOpacity
                onPress={() => {
                  // Vete();
                  this.props.navigation.goBack();
                }}
                style={{
                  width: 100,
                  height: 50,
                  backgroundColor: "#F8831C",
                  justifyContent: "center",
                  marginTop: 10,
                  borderRadius: 10,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontFamily: "Prompt-Medium",
                    color: "#393939",
                    fontSize: 18,
                  }}
                >
                  ยืนยัน
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <View style={styles.max}>
          {this._renderVideos()}
          <View style={styles.buttonHolder}>
            <TouchableOpacity
              onPress={this._switchMicrophone}
              style={styles.button}
            >
              <Feather
                name={this.state.openMicrophone ? "mic" : "mic-off"}
                size={24}
                color="#fff"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={this.endCall} style={styles.buttonClose}>
              <AntDesign name="close" size={32} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this._switchSpeakerphone}
              style={[
                styles.button,
                {
                  backgroundColor: this.state.enableSpeakerphone
                    ? "#0093E9"
                    : "#d2d2d2",
                },
              ]}
            >
              <AntDesign name="sound" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  _renderVideos = () => {
    const { joinSucceed } = this.state;

    return joinSucceed ? (
      <View style={styles.fullView}>
        {this.props.route.params.video ? (
          <RtcLocalView.SurfaceView
            style={styles.max}
            channelId={this.state.channelName}
            renderMode={
              this.props.route.params.video
                ? VideoRenderMode.FILL
                : VideoRenderMode.Hidden
            }
          />
        ) : (
          <View
            style={{
              width: width,
              height: height,
              backgroundColor: "#000",
              alignItems: "center",
            }}
          >
            <Image
              style={{
                width: 145,
                height: 145,
                borderRadius: 80,
                marginTop: height * 0.2,
              }}
              source={require("../../image/Dortor1.jpeg")}
            />
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Prompt-SemiBold",
                marginTop: 15,
                color: "#fff",
              }}
            >
              Dr.{this.props.route.params.name}
            </Text>
          </View>
        )}
        {this._renderRemoteVideos()}
      </View>
    ) : null;
  };

  _renderRemoteVideos = () => {
    const { peerIds } = this.state;
    return (
      <ScrollView
        style={styles.remoteContainer}
        contentContainerStyle={{ paddingHorizontal: 2.5 }}
        horizontal={true}
      >
        {peerIds.map((value) => {
          return this.props.route.params.video ? (
            <RtcRemoteView.SurfaceView
              style={styles.remote}
              uid={value}
              channelId={this.state.channelName}
              renderMode={VideoRenderMode.FILL}
              zOrderMediaOverlay={true}
            />
          ) : (
            <View />
          );
        })}
      </ScrollView>
    );
  };
}
