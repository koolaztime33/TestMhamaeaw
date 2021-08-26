import { PermissionsAndroid, Platform } from "react-native";
// import {request, PERMISSIONS} from 'react-native-permissions';
import * as Permissions from "expo-permissions";
/**
 * @name requestCameraAndAudioPermission
 * @description Function to request permission for Audio and Camera
 */
export default async function requestCameraAndAudioPermission() {
  try {
    const CAMERA = await Permissions.askAsync(Permissions.CAMERA);
    if (CAMERA.status === "granted") {
      const AUDIO_RECORDING = await Permissions.askAsync(
        Permissions.AUDIO_RECORDING
      );
    }
  } catch (err) {
    console.warn(err);
  }
}
