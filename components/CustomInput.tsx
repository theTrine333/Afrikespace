import themedStyle from "@/constants/Styles";
import { CustomInputProps, TextSearchInputProp } from "@/constants/types";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
  ViewStyle,
} from "react-native";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";

const CustomInput = ({
  theme,
  placeHolderText,
  containerStyle,
  inputStyle,
  setter,
  leftIcon,
  rightIcon,
  leftIconStyle,
  rightIconStyle,
  keyboardType,
  type,
  placeHolderTextColor,
  secured,
}: CustomInputProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const styles = themedStyle(theme);
  return (
    <ThemedView
      style={[
        styles.txtInputContainer,
        { borderWidth: isFocused ? 1 : 0 },
        { ...containerStyle },
      ]}
    >
      <View style={styles.rowView}>
        {/* Left icon */}
        {leftIcon && (
          <View style={[styles.txtInputLeftIcon, { ...leftIconStyle }]}>
            {leftIcon}
          </View>
        )}
        <TextInput
          onChangeText={setter}
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          placeholder={placeHolderText}
          keyboardType={keyboardType}
          secureTextEntry={secured}
          placeholderTextColor={placeHolderTextColor}
          style={[styles.txtInput, { ...inputStyle }]}
        />
        {/* Right icon */}
        {rightIcon && (
          <View style={[styles.txtInputRightIcon, { ...rightIconStyle }]}>
            {rightIcon}
          </View>
        )}
      </View>
    </ThemedView>
  );
};

const SearchBar = ({
  placeholderText,
  setter,
  isPassField,
  keyboardType,
  isBio,
  isSearch,
  style,
}: TextSearchInputProp) => {
  const theme = useColorScheme() ?? "light";
  const styles = themedStyle(theme);
  const [isFocused, setIsFocused] = useState(false);
  const [passShwon, setPassShwo] = useState(false);
  const [search, setSearch] = useState("");
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);
  const [showScanner, setShowScanner] = useState(false);
  return (
    <>
      <View style={[styles.searchContainer, style]}>
        <Ionicons
          name="search"
          size={20}
          color="#666"
          style={styles.searchIcon}
        />
        <TextInput
          placeholder={placeholderText}
          onChangeText={(e) => {
            setSearch(e);
            setter(e);
          }}
          value={search}
          placeholderTextColor={"grey"}
          style={styles.searchInput}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <TouchableOpacity
          onPress={() => setShowScanner(true)}
          style={styles.scannerButton}
        >
          <Ionicons name="qr-code" size={20} color="#666" />
        </TouchableOpacity>
        {search && (
          <TouchableOpacity
            onPress={() => {
              setter("");
              setSearch("");
            }}
            style={styles.clearButton}
          >
            <Ionicons name="close-circle" size={20} color="#666" />
          </TouchableOpacity>
        )}
      </View>

      {/* <Modal
        visible={showScanner}
        animationType="slide"
        onRequestClose={() => setShowScanner(false)}
      >
        <View style={styles.scannerContainer}>
          <View style={styles.scannerHeader}>
            <TouchableOpacity
              onPress={() => setShowScanner(false)}
              style={styles.closeButton}
            >
              <Ionicons name="close" size={24} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.scannerTitle}>Scan QR Code</Text>
          </View>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={styles.scanner}
            barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
          />
          <View style={styles.scannerOverlay}>
            <View style={styles.scanFrame}>
              <View style={[styles.corner, styles.cornerTopLeft]} />
              <View style={[styles.corner, styles.cornerTopRight]} />
              <View style={[styles.corner, styles.cornerBottomLeft]} />
              <View style={[styles.corner, styles.cornerBottomRight]} />
            </View>
          </View>
          {scanned && (
            <TouchableOpacity
              style={styles.scanAgainButton}
              onPress={() => setScanned(false)}
            >
              <Text style={styles.scanAgainText}>Tap to Scan Again</Text>
            </TouchableOpacity>
          )}
        </View>
      </Modal> */}
    </>
  );
};

const ORAUTHDIVIDER = ({ theme }: { theme: "dark" | "light" }) => {
  const sharedStyles: ViewStyle = {
    borderWidth: 1,
    borderColor: "grey",
    width: "30%",
    height: 1,
  };
  return (
    <ThemedView
      style={[
        themedStyle(theme).rowView,
        {
          alignSelf: "center",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-around",
          paddingHorizontal: 20,
          marginTop: 10,
          gap: 10,
        },
      ]}
    >
      <View style={sharedStyles} />
      <ThemedText style={{ fontSize: 11 }}>OR LOGIN WITH</ThemedText>
      <View style={sharedStyles} />
    </ThemedView>
  );
};
export { CustomInput, ORAUTHDIVIDER, SearchBar };
