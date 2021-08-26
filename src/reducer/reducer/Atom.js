import AsyncStorage from "@react-native-async-storage/async-storage";

import { atom } from "recoil";
import { recoilPersist } from "../reducer/recoil-persist";

const { persistAtom } = recoilPersist({
  key: "recoil-persist",
  storage: AsyncStorage,
});

export const tokenState = atom({
  key: "token",
  default: {},
  effects_UNSTABLE: [persistAtom],
});
export const Authen = atom({
  key: "auth",
  default: {
    auth: false,
  },
  effects_UNSTABLE: [persistAtom],
});

export const CheckLogin = atom({
  key: "user",
  default: "User",
  effects_UNSTABLE: [persistAtom],
});

export const CheckVETE = atom({
  key: "VETE",
  default: "VETE",
  effects_UNSTABLE: [persistAtom],
});

export const NotificationState = atom({
  key: "Notification",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
