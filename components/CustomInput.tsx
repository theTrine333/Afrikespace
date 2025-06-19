import themedStyle from "@/constants/Styles";
import { CustomInputProps } from "@/constants/types";
import React, { useState } from "react";
import { TextInput, View, ViewStyle } from "react-native";
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

const SearchBar = ({}) => {
  return <ThemedView></ThemedView>;
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
export { CustomInput, ORAUTHDIVIDER };
