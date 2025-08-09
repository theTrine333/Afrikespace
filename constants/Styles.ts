import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "./Colors";

export const { width, height } = Dimensions.get("window");

const themedStyle = (theme: "light" | "dark") =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 40,
      backgroundColor: Colors[theme].background,
    },
    searchContainer: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: theme === "light" ? "#f0f0f0" : undefined,
      borderRadius: 10,
      paddingHorizontal: 10,
      height: 40,
    },
    searchIcon: {
      marginRight: 8,
    },
    searchInput: {
      flex: 1,
      fontSize: 16,
      color: Colors[theme].text,
    },
    clearButton: {
      padding: 4,
    },
    scannerButton: {
      padding: 4,
      marginRight: 4,
    },
    scannerContainer: {
      flex: 1,
      backgroundColor: "#000",
    },
    scannerHeader: {
      flexDirection: "row",
      alignItems: "center",
      padding: 16,
      backgroundColor: "rgba(0,0,0,0.5)",
    },
    closeButton: {
      padding: 8,
    },
    scannerTitle: {
      color: "#fff",
      fontSize: 18,
      fontWeight: "600",
      marginLeft: 16,
    },
    scanner: {
      flex: 1,
    },
    scannerOverlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0,0,0,0.5)",
      justifyContent: "center",
      alignItems: "center",
    },
    scanFrame: {
      width: 250,
      height: 250,
      position: "relative",
    },
    longBtn: {
      alignSelf: "center",
      backgroundColor: "#007fff",
      height: height * 0.06,
      padding: 10,
      marginTop: 10,
      width: width * 0.8,
      borderRadius: 10,
    },
    longBtnText: {
      fontSize: 16,
      color: "white",
      textAlign: "center",
      fontWeight: "800",
    },
    roundBtn: {
      backgroundColor: Colors[theme].blur,
      alignItems: "center",
      justifyContent: "center",
      padding: 10,
      height: 45,
      width: 45,
      borderRadius: 45 / 2,
    },
    rowView: {
      flexDirection: "row",
      width: "100%",
    },
    txtInputContainer: {
      width: width * 0.8,
      borderColor: "#007fff",
      alignSelf: "center",
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "space-around",
      height: height * 0.08,
    },
    txtInput: {
      padding: 5,
      flex: 1,
    },
    txtInputLeftIcon: {
      alignSelf: "center",
      padding: 10,
    },
    txtInputRightIcon: { alignSelf: "center", padding: 10 },
    logo: {
      height: 120,
      width: 120,
      borderWidth: 5,
      borderRadius: 60,
      alignSelf: "center",
      margin: 10,
    },
    tabNavImage: { height: 30, width: 30 },
  });

export default themedStyle;
