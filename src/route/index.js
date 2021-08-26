import React, { useState, useEffect } from "react";
import { Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

//logi
import Login from "../page/Login/login";
import Fist from "../page/First/Fist";
import LoginAll from "../page/Login/LoginAll";
import Reginster from "../page/Register/Register";
//User
import Home from "../page/Home/home";
import Menu from "../component/menu";
import Search from "../page/Search/search";
import Profile from "../page/Profile/profile";
import Profilelist from "../page/Profilelist/profilelist";
import Doctor from "../page/Doctor/Doctor";
import Nearby from "../page/Nearby/Nearby";
// import NotificationsD from "../page/Notifications/Notifications";
import ProfilePet from "../page/Profile/ProfilePet";
import Edit from "../page/EditProfile/Edit";
import EditPet from "../page/EditPet/EditPet";
import EditPetUser from "../page/EditPet/EditPetUser";
import AddPet from "../page/AddPet/AddPet";
import HealthNoteBook from "../page/HealthNoteBook/HealthNoteBook";
import PageMeasles from "../page/VaccineRecord/PageMeasles";
import PageLeukemia from "../page/VaccineRecord/PageLeukemia";
import PageLeuAndMea from "../page/VaccineRecord/PageLeuAndMea";
import Pageperitonitis from "../page/VaccineRecord/Pageperitonitis";
import PageImmunity from "../page/VaccineRecord/PageImmunity";
import PageRabies from "../page/VaccineRecord/PageRabies";
import OtherTypes from "../page/VaccineRecord/OtherTypes";
import ZoomMap from "../page/Nearby/ZoomMap/ZoomMap";
import Pay from "../page/Pay/index";
import Postpopar from "../page/Feed/PostPoplar/Postpopar";
import Chat from "../page/Chat/chat";
//Doctor
import HomeDortor from "../page/HomDoctor/HomeDortor";
import MenuDortor from "../component/MenuDortor";
import DottorList from "../PageDoctor/DortorList/DottorList";
import NoteDottor from "../PageDoctor/NoteDortor/NoteDottor";
import Addpet from "../PageDoctor/AddPet/Addpet";
import AddpetDoctor from "../PageDoctor/ProfilePet/Addpet";
import RTCView from "../page/RTCView";
//Feed
import Feed from "../page/Feed/Feed";
import Friends from "../page/Feed/Friends/Friends";
import Popular from "../page/Feed/Popular/Popular";
import Post from "../page/Feed/Post/Post";
import FriendsList from "../page/Feed/FriendsList/FriendsList";
import Tab from "../page/Feed/FriendsTab/Tab";
import User from "../page/Feed/profileUser/User";
import friends from "../page/Feed/Profilefriends/friends";
import { useRecoilValue } from "recoil";

import {
  tokenState,
  CheckLogin,
  CheckVETE,
  NotificationState,
} from "../reducer/reducer/Atom";
import { Dimensions } from "react-native";

import messaging from "@react-native-firebase/messaging";

const { width, height } = Dimensions.get("window");

const Route = () => {
  const Stack = createStackNavigator();
  const DrawerStack = createDrawerNavigator();
  const StackDoctor = createStackNavigator();
  const DrawerStackDoctor = createDrawerNavigator();
  const LoginSc = createStackNavigator();

  const token = useRecoilValue(tokenState);
  const [expoPushToken, setExpoPushToken] = useState(NotificationState);

  const [loading, setLoading] = useState(true);
  const [initialRoute, setInitialRoute] = useState("Login");

  // useEffect(() => {
  //   registerAppWithFCM();
  // }, []);
  // async function registerAppWithFCM() {
  //   const fcmtoken = await messaging().registerDeviceForRemoteMessages();
  //   Alert.alertg(fcmtoken);
  // }

  // useEffect(() => {
  //   // Assume a message-notification contains a "type" property in the data payload of the screen to open

  //   messaging().onNotificationOpenedApp((Login) => {
  //     console.log(
  //       "Notification caused app to open from background state:",
  //       Login.notification
  //     );
  //     navigation.navigate("Login");
  //   });

  //   // Check whether an initial notification is available
  //   messaging()
  //     .getInitialNotification()
  //     .then((Login) => {
  //       if (Login) {
  //         console.log(
  //           "Notification caused app to open from quit state:",
  //           Login.notification
  //         );
  //         setInitialRoute("Login"); // e.g. "Settings"
  //       }
  //       setLoading(false);
  //     });
  // }, []);

  // if (loading) {
  //   return null;
  // }

  function LoginScreen() {
    return (
      <LoginSc.Navigator headerMode="none" initialRouteName={"Login"}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="LoginAll" component={LoginAll} />
        <Stack.Screen name="Reginster" component={Reginster} />
      </LoginSc.Navigator>
    );
  }

  function Draweruser() {
    return (
      <DrawerStack.Navigator
        edgeWidth={0}
        drawerStyle={{
          width: width * 0.9,
          height: height,
          // backgroundColor: "red",
        }}
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"Draweruser"}
        drawerContent={(props) => <Menu {...props} />}
      >
        <DrawerStack.Screen name="Draweruser" component={user} />
      </DrawerStack.Navigator>
    );
  }

  function user() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        mode="modal"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="RTCView" component={RTCView} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Profilelist" component={Profilelist} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Doctor" component={Doctor} />
        {/* <Stack.Screen name="Notifications" component={Notifications} /> */}

        <Stack.Screen name="ProfilePet" component={ProfilePet} />

        <Stack.Screen name="Pay" component={Pay} />

        <Stack.Screen name="Edit" component={Edit} />
        <Stack.Screen name="EditPet" component={EditPet} />
        <Stack.Screen name="EditPetUser" component={EditPetUser} />
        <Stack.Screen name="AddPet" component={AddPet} />
        <Stack.Screen name="HealthNoteBook" component={HealthNoteBook} />

        {/* FEED */}
        <Stack.Screen name="Feed" component={Feed} />
        <Stack.Screen name="Post" component={Post} />
        <Stack.Screen name="FriendsList" component={FriendsList} />
        <Stack.Screen name="Tab" component={Tab} />
        <Stack.Screen name="User" component={User} />
        <Stack.Screen name="friends" component={friends} />
        <Stack.Screen name="Postpopar" component={Postpopar} />

        {/* Map */}
        <Stack.Screen name="Nearby" component={Nearby} />
        <Stack.Screen name="ZoomMap" component={ZoomMap} />

        {/* Note */}
        <Stack.Screen name="PageMeasles" component={PageMeasles} />
        <Stack.Screen name="PageLeukemia" component={PageLeukemia} />
        <Stack.Screen name="PageLeuAndMea" component={PageLeuAndMea} />
        <Stack.Screen name="Pageperitonitis" component={Pageperitonitis} />
        <Stack.Screen name="PageImmunity" component={PageImmunity} />
        <Stack.Screen name="PageRabies" component={PageRabies} />
        <Stack.Screen name="OtherTypes" component={OtherTypes} />
        <Stack.Screen name="Chat" component={Chat} />
      </Stack.Navigator>
    );
  }

  function DrawerDoctor() {
    return (
      <DrawerStackDoctor.Navigator
        edgeWidth={0}
        drawerStyle={{
          width: "90%",
        }}
        headerMode="none"
        drawerContent={(props) => <MenuDortor {...props} />}
      >
        <DrawerStackDoctor.Screen name="Login" component={main} />
      </DrawerStackDoctor.Navigator>
    );
  }

  function main() {
    return (
      <StackDoctor.Navigator
        screenOptions={{
          headerShown: false,
        }}
        mode="modal"
      >
        {/* <StackDoctor.Screen name="Login" component={Login} /> */}
        {/* <StackDoctor.Screen name="LoginAll" component={LoginAll} /> */}

        <StackDoctor.Screen name="HomeDortor" component={HomeDortor} />
        <StackDoctor.Screen name="RTCView" component={RTCView} />
        <StackDoctor.Screen name="DottorList" component={DottorList} />
        <StackDoctor.Screen name="NoteDottor" component={NoteDottor} />
        {/* <StackDoctor.Screen name="Notifications" component={Notifications} /> */}
        <StackDoctor.Screen name="Reginster" component={Reginster} />

        <StackDoctor.Screen name="Feed" component={Feed} />
        <StackDoctor.Screen name="Post" component={Post} />
        <StackDoctor.Screen name="FriendsList" component={FriendsList} />
        <StackDoctor.Screen name="Tab" component={Tab} />
        <StackDoctor.Screen name="User" component={User} />
        <StackDoctor.Screen name="friends" component={friends} />
        <StackDoctor.Screen name="Postpopar" component={Postpopar} />

        <StackDoctor.Screen name="Addpet" component={Addpet} />
        <StackDoctor.Screen name="AddpetDoctor" component={AddpetDoctor} />
        <StackDoctor.Screen name="ProfilePet" component={ProfilePet} />
        <StackDoctor.Screen name="HealthNoteBook" component={HealthNoteBook} />
        <StackDoctor.Screen name="EditPet" component={EditPet} />

        <StackDoctor.Screen name="PageMeasles" component={PageMeasles} />
        <StackDoctor.Screen name="PageLeukemia" component={PageLeukemia} />
        <StackDoctor.Screen name="PageLeuAndMea" component={PageLeuAndMea} />
        <StackDoctor.Screen
          name="Pageperitonitis"
          component={Pageperitonitis}
        />
        <StackDoctor.Screen name="PageImmunity" component={PageImmunity} />
        <StackDoctor.Screen name="PageRabies" component={PageRabies} />
      </StackDoctor.Navigator>
    );
  }

  // Draweruser()
  //DrawerDoctor()

  function CheckType() {
    if (token == "") {
      LoginScreen();
    }
    if (token.role == "USER") {
      return !token.token ? LoginScreen() : Draweruser();
    } else if (token.role == "VETE") {
      return !token.token ? LoginScreen() : DrawerDoctor();
    } else {
      return LoginScreen();
    }
  }

  return <NavigationContainer>{CheckType()}</NavigationContainer>;
  // return <NavigationContainer>{Draweruser()}</NavigationContainer>;
};

export default Route;
