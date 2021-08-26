import { ALL_USERS, LOGIN_SUCCESS, REGISTER_SUCCESS } from "../actions/types";

const intialState = {
  isAuthenticated: null,
  user: null,
  allUsers: [],
  myID: null,
  isCat:null
};


export default (state = intialState, { payload, type }) => {
  switch (type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
      };
      case "LOGIN_FALSE":
        return {
          ...state,
          isAuthenticated: false,
        };
    
    default:
      return state;
  }
};
