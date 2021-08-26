import {
  ADD_REMOTE_STREAM,
  ADD_STREAM,
  MY_STREAM,
  CLEAR_REMOTE_STREAM,
} from "../actions/types";
// import { stream } from '../actions/videoActions';

const initialState = {
  myStream: null,
  streams: [],
  remoteStreams: [],
  chat: [],
  listmemberchat: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case MY_STREAM:
      return { ...state, myStream: payload };
    case "ADD_CHAT":
      return { ...state, chat: state.chat.concat(payload) };
    case "CLEAR_CHAT":
      return { ...state, chat: [] };
    case "ADD_MEMBER_CHAT":
      return { ...state, listmemberchat: state.listmemberchat.concat(payload) };
    case "CLEAR_MEMBER_CHAT":
      return { ...state, listmemberchat: [] };
    case ADD_STREAM:
      const streams = state.streams.filter(
        ({ email }) => payload.email != email
      );
      return { ...state, streams: [...streams, payload] };
    case ADD_REMOTE_STREAM:
      const otherStreams = state.streams.filter(
        ({ email }) => payload.email != email
      );
      return { ...state, streams: [...otherStreams, payload] };
    case CLEAR_REMOTE_STREAM:
      return { ...state, streams: [] };
    default:
      return state;
  }
};
