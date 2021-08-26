import { Dimensions, StyleSheet } from "react-native";

const dimensions = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
};

export default StyleSheet.create({
  max: {
    flex: 1,
  },
  buttonHolder: {
    height: 100,
    alignItems: "center",
    // flex: 1,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 20,
    paddingHorizontal: 15,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#0093E9",
    borderRadius: 25,
  },
  buttonClose: {
    backgroundColor: "#ff0000",
    borderRadius: 35,
    width: 65,
    height: 65,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
  },
  fullView: {
    width: dimensions.width,
    height: dimensions.height,
  },
  remoteContainer: {
    width: "100%",
    height: 150,
    position: "absolute",
    top: 5,
  },
  remote: {
    width: 150,
    height: 150,
    marginHorizontal: 2.5,
  },
  noUserText: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: "#0093E9",
  },
});
