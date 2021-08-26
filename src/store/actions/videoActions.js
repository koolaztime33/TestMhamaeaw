import IO from "socket.io-client";
import Peer from "react-native-peerjs";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { ID } from "./authActions";

/** Web RTC */
import { mediaDevices } from "react-native-webrtc";
import {
  ADD_REMOTE_STREAM,
  ADD_STREAM,
  ALL_USERS,
  MY_STREAM,
  CLEAR_REMOTE_STREAM,
} from "./types";
import { NavigationContainer } from "@react-navigation/native";

//** API_URI */
export const API_URI = `https://chat-api.vnimal.com`;
// export const API_URI = `http://localhost:5000`;

//** Socket Config */
export const socket = IO(`${API_URI}`, {
  forceNew: true,
});

// export the function to connect and use socket IO:
export const startSocketIO = (store) => {
  socket.connect();

  socket.on("connection", () => console.log("Connection"));

  // return socket;
};

export const joinGeneralRoom = () => async (dispatch) => {
  socket.emit("join-general-room", "ajsdflajslkdfuaisfjwioerwqiheriyqw87ery");
};

export const userJoin = ({ props, navigation, type }) => async (
  dispatch,
  getState
) => {
  console.log(props);
  const allUserRoomID = props;
  const roomID = "active_room";
  const { user, allUsers } = getState().auth;
  socket.emit("user-exists", { user, socketID: socket.id });
  socket.on(props, (data) => {
    dispatch({ type: "ADD_CHAT", payload: data });
  });

  socket.on("user-found", (currentUser) => {
    console.log("currentUser", currentUser.email, user.email);
    if (currentUser.email == user.email) {
      console.log("update-user");
      socket.emit("update-user", {
        user: currentUser,
        socketID: socket.id,
        allUserRoomID,
      });
    } else {
      console.log("user-join");

      socket.emit("user-join", { allUserRoomID, user, socketID: socket.id });
    }
  });

  socket.on("activeUsers", (users) => {
    // console.log(user);
    const eUsers = allUsers.map(({ email }) => email);
    const fUsers = users
      .map(({ email, name, socketID, id, firstname, lastname }) => {
        if (!eUsers.includes(email)) {
          return {
            email,
            name: firstname + " " + lastname,
            socketID,
            id,
          };
        }
      })
      .filter((data) => data != undefined);

    dispatch({ type: ALL_USERS, payload: fUsers });
    dispatch(stream({ props, type }));
  });

  //
  socket.on("new-user-join", (user) => {
    console.log("ADD_NEW_USER", user);
    dispatch({ type: "ADD_NEW_USER", payload: user });
  });
  socket.on("call-disconnect", (user) => {
    console.log("disconnect");
    dispatch({ type: CLEAR_REMOTE_STREAM });
    dispatch(joinStream({ type: "true" }));
  });
  // dispatch(joinStream({ }));
};

export function onSend({ params, route, Auth }) {
  console.log(Auth, params);
  socket.emit("newmessage", {
    _id: 1,
    text: params,
    type: "message",
    createdAt: new Date().getTime(),
    user: {
      _id: Auth.token,
      name: "React Native",
      // avatar: "https://dev.bartergood.com/showimage/" + Auth.person_picture,
      UID: Auth.token,
    },
    cid: route.params,
    roomID: route.params,
  });
}

// Stream Actions
export const joinStream = ({ stream, props, type }) => async (
  dispatch,
  getState
) => {
  const peerServer = new Peer(undefined, {
    secure: false,
    config: {
      iceServers: [
        {
          urls: [
            "stun:stun1.l.google.com:19302",
            "stun:stun2.l.google.com:19302",
          ],
        },
      ],
    },
  });

  peerServer.on("error", console.log);

  const { user } = getState().auth;
  const roomID = props;
  console.log("join", props);
  dispatch({ type: MY_STREAM, payload: stream });
  dispatch({ type: ADD_STREAM, payload: { stream, ...user } });

  // const peerJS = peerServer.on("open");
  // console.log(peerJS);

  console.log(type);

  if (type == undefined) {
    peerServer.on("open", (peerID) => {
      // dispatch({type:})
      console.log("join-stream-room");
      socket.emit("join-stream-room", {
        roomID: roomID,
        peerID: peerID,
        socketID: socket.id,
        user: user,
      });
    });

    const users = user;

    socket.on("user-connected", ({ roomID, peerID, socketID, user }) => {
      // console.log("user-connected");
      connectToNewUser({
        roomID,
        peerID,
        socketID,
        user,
        stream,
        dispatch,
        peerServer,
        email: users,
      });
    });

    peerServer.on("call", (call) => {
      // console.log("call", call);
      call.answer(stream);

      call.on("stream", (remoteStreams) => {
        //add
        console.log("add", remoteStreams);
        dispatch({
          type: ADD_STREAM,
          payload: {
            stream: remoteStreams,
            name: `user_${ID()}`,
            email: `a@a.aa`,
            uid: `id_${ID()}`,
          },
        });
      });
    });
  } else {
    peerServer.disconnect();
  }
};

const connectToNewUser = ({
  roomID,
  peerID,
  socketID,
  user,
  stream,
  peerServer,
  dispatch,
  email,
}) => {
  // if (roomID == email.email) {
  const call = peerServer.call(peerID, stream);
  console.log("call");
  call.on("stream", (lastuserstream) => {
    if (lastuserstream) {
      console.log("call", lastuserstream);
      dispatch({
        type: ADD_REMOTE_STREAM,
        payload: {
          stream: lastuserstream,
          ...user,
        },
      });
    }
  });
  // }
};

export const disconnect = async ({ user, roomID, dispatch }) => {
  // peerServer.disconnected();
  console.log(roomID, user);
  socket.emit("call_disconnect", { roomID, user });

  return;
  // dispatch(joinStream({ type: "true" }));
  // dispatch({ type: CLEAR_REMOTE_STREAM });
  // socket.disconnect();
  // socket.emit("disconnect", { user, roomID, socketID: socket.id });
};

export const socketDisconnect = () => {
  socket.disconnect();
};

export const stream = ({ props, type }) => async (dispatch) => {
  let isFront = true;
  mediaDevices.enumerateDevices().then((sourceInfos) => {
    let videoSourceId;
    for (let i = 0; i < sourceInfos.length; i++) {
      const sourceInfo = sourceInfos[i];
      if (
        sourceInfo.kind == "videoinput" &&
        sourceInfo.facing == (isFront ? "front" : "environment")
      ) {
        videoSourceId = sourceInfo.deviceId;
      }
    }

    mediaDevices
      .getUserMedia({
        audio: true,
        video:
          type == "video"
            ? {
                mandatory: {
                  minWidth: 500,
                  minHeight: 300,
                  minFrameRate: 30,
                },
                facingMode: isFront ? "user" : "environment",
                optional: videoSourceId ? [{ sourceId: videoSourceId }] : [],
              }
            : false,
        // video: true,
      })
      .then((stream) => {
        dispatch(joinStream({ stream: stream, props: props }));
      })
      .catch((error) => {
        console.log(error);
      });
  });
};
