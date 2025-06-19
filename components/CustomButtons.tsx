import { Colors } from "@/constants/Colors";
import themedStyle, { height, width } from "@/constants/Styles";
import {
  CustomButtonProps,
  IconTextBtnProps,
  OutlineTextBtnProps,
  SettingsBtnProps,
  userLogoProps,
} from "@/constants/types";
import { EvilIcons } from "@expo/vector-icons";
import { Image, ImageBackground } from "expo-image";
import React, { useState } from "react";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  useColorScheme,
  View,
} from "react-native";
import Animated, {
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
const AuthImageButtons = ({
  theme,
  icon,
  action,
  containerStyle,
  iconStyle = undefined,
}: CustomButtonProps) => {
  const styles = themedStyle(theme);
  return (
    <TouchableOpacity
      style={[styles.roundBtn, { ...containerStyle }]}
      onPress={action}
    >
      <View style={{ ...iconStyle }}>{icon}</View>
    </TouchableOpacity>
  );
};

const UserLogo = ({
  image_url,
  height,
  width,
  borderRadius,
  containerStyle,
  imageStyle,
  imageProps,
  isClickable = false,
  action,
}: userLogoProps) => {
  const theme = useColorScheme() ?? "light";
  return (
    <TouchableWithoutFeedback onPress={action} disabled={!isClickable}>
      <View style={[{ ...containerStyle }]}>
        <Image
          source={image_url}
          style={[
            {
              height: height,
              width: width,
              padding: 10,
              borderWidth: 5,
              borderColor: Colors[theme].blur,
              borderRadius: borderRadius,
            },
            { ...imageStyle },
          ]}
          {...imageProps}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const UserLogoLarge = ({
  image_url,
  height,
  width,
  borderRadius,
  imageProps,
  containerStyle,
  imageStyle,
}: userLogoProps) => {
  const theme = useColorScheme() ?? "light";
  return (
    <ImageBackground
      source={image_url}
      imageStyle={imageStyle}
      style={[
        {
          height: height,
          width: width,
          borderRadius: borderRadius,
          alignItems: "flex-end",
          justifyContent: "flex-end",
        },
        { ...containerStyle },
      ]}
      {...imageProps}
    />
  );
};

const OutlineTextBtn = ({
  Action,
  ButtonProps,
  ButtonStyle,
  ButtonText,
  ButtonTextProps,
  ButtonTextStyles,
  containerStyle,
}: OutlineTextBtnProps) => {
  const theme = useColorScheme() ?? "light";
  return (
    <View
      style={[
        {
          alignSelf: "center",
          padding: 10,
          marginTop: 10,
          alignItems: "center",
          width: "100%",
        },
        { ...containerStyle },
      ]}
    >
      <TouchableOpacity
        style={[
          {
            borderWidth: 3,
            borderColor: Colors[theme].button,
            padding: 3,
            borderRadius: 26,
            width: "100%",
            alignSelf: "center",
          },
          { ...ButtonStyle },
        ]}
        {...ButtonProps}
        onPress={Action}
      >
        <ThemedText
          style={[
            { textAlign: "center", color: Colors[theme].button },
            { ...ButtonTextStyles },
          ]}
          {...ButtonTextProps}
        >
          {ButtonText}
        </ThemedText>
      </TouchableOpacity>
    </View>
  );
};

const IconTextBtn = ({
  Action,
  ButtonProps,
  ButtonStyle,
  ButtonText,
  ButtonTextProps,
  ButtonTextStyles,
  Icon,
}: IconTextBtnProps) => {
  const theme = useColorScheme() ?? "light";
  return (
    <TouchableOpacity
      hitSlop={20}
      style={[
        {
          width: width * 0.3,
          height: height * 0.06,
          flexDirection: "row",
          gap: 10,
          paddingHorizontal: 10,
          borderRadius: 10,
          alignItems: "center",
          backgroundColor: Colors[theme].blur,
        },
        { ...ButtonStyle },
      ]}
      onPress={Action}
      {...ButtonProps}
    >
      {Icon}
      <ThemedText
        style={[{ color: Colors[theme].text }, ButtonTextStyles]}
        {...ButtonTextProps}
      >
        {ButtonText}
      </ThemedText>
    </TouchableOpacity>
  );
};
const SettingsBtn = ({
  Action,
  ButtonProps,
  ButtonStyle,
  ButtonText = "Update",
  ButtonTextProps,
  ButtonTextStyles,
  containerStyle,
  LeftIcon,
  isExtendable,
  Children,
  RightIcon,
}: SettingsBtnProps) => {
  const theme = useColorScheme() ?? "light";
  const [isExpanded, setExpanded] = useState<boolean>(false);
  const height = useSharedValue(0);
  const handlePress = () => {
    if (!isExpanded) {
      height.value = withSpring(100, { damping: 80, stiffness: 200 });
      setExpanded(true);
      return;
    }
    height.value = withTiming(0, { duration: 300 });
    setExpanded(false);
  };
  return (
    <ThemedView style={[{ marginTop: 10 }, { ...containerStyle }]}>
      <TouchableOpacity
        style={[
          {
            backgroundColor: Colors[theme].blur,
            padding: 5,
            borderRadius: 26,
            paddingLeft: LeftIcon ? 5 : 20,
            width: "100%",
            alignSelf: "center",
            flexDirection: "row",
            justifyContent: RightIcon || LeftIcon ? "space-between" : "center",
          },
          { ...ButtonStyle },
        ]}
        {...ButtonProps}
        onPress={Action}
        disabled={isExtendable}
      >
        {RightIcon || LeftIcon ? (
          <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
            {/* Left icon */}
            {LeftIcon && (
              <ThemedView style={{ borderRadius: 100, padding: 5 }}>
                {LeftIcon}
              </ThemedView>
            )}
            <ThemedText
              style={[
                { textAlign: "center", color: Colors[theme].text },
                { ...ButtonTextStyles },
              ]}
              {...ButtonTextProps}
            >
              {ButtonText}
            </ThemedText>
          </View>
        ) : (
          <ThemedText
            style={[
              {
                textAlign: "center",
                paddingVertical: 5,
                color: Colors[theme].text,
              },
              { ...ButtonTextStyles },
            ]}
            {...ButtonTextProps}
          >
            {ButtonText}
          </ThemedText>
        )}
        {/* Right icon */}
        {isExtendable ? (
          <TouchableOpacity
            style={{
              borderRadius: 100,
              padding: 5,
              backgroundColor: Colors[theme].background,
            }}
            hitSlop={20}
            onPress={() => {
              handlePress();
              setExpanded(!isExpanded);
            }}
          >
            <EvilIcons
              name={isExpanded ? "chevron-up" : "chevron-down"}
              color={Colors[theme].text}
              size={25}
            />
          </TouchableOpacity>
        ) : (
          RightIcon && (
            <ThemedView style={{ borderRadius: 100, padding: 5 }}>
              {RightIcon}
            </ThemedView>
          )
        )}
      </TouchableOpacity>
      <Animated.View
        style={{
          opacity: 0.8,
          width: "88%",
          alignSelf: "center",
          height: height,
          paddingHorizontal: 10,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          overflow: "hidden",
          backgroundColor: Colors[theme].blur,
        }}
      >
        {Children}
      </Animated.View>
    </ThemedView>
  );
};
export {
  AuthImageButtons,
  IconTextBtn,
  OutlineTextBtn,
  SettingsBtn,
  UserLogo,
  UserLogoLarge,
};
