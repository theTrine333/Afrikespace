import { ImageProps, ImageStyle } from "expo-image";
import { ReactNode } from "react";
import {
  DimensionValue,
  KeyboardType,
  TextProps,
  TextStyle,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";
type theme = "light" | "dark";
interface CustomInputProps {
  containerStyle?: ViewStyle;
  placeHolderText?: string;
  theme: theme;
  inputStyle?: TextStyle;
  setter?: any;
  leftIcon?: ReactNode;
  leftIconStyle?: ViewStyle;
  rightIcon?: ReactNode;
  rightIconStyle?: ViewStyle;
  keyboardType?: KeyboardType;
  type: "search" | "email" | "password";
  placeHolderTextColor?: string;
  secured?: boolean;
}

interface CustomButtonProps {
  containerStyle?: ViewStyle;
  theme: theme;
  icon: ReactNode;
  iconStyle?: ViewStyle;
  action?: any;
}

interface userLogoProps {
  image_url: string;
  height: DimensionValue;
  width: DimensionValue;
  borderRadius?: number;
  containerStyle?: ViewStyle;
  Children?: any;
  imageStyle?: ImageStyle;
  imageProps?: ImageProps;
  isClickable?: boolean;
  action?: any;
}

interface ButtonProps {
  ButtonProps?: TouchableOpacityProps;
  containerStyle?: ViewStyle;
  ButtonStyle?: ViewStyle;
  Action?: any;
}

interface OutlineTextBtnProps extends ButtonProps {
  ButtonText?: string;
  ButtonTextStyles?: TextStyle;
  ButtonTextProps?: TextProps;
}

interface IconTextBtnProps extends ButtonProps {
  Icon: ReactNode;
  ButtonText?: string;
  ButtonTextStyles?: TextStyle;
  ButtonTextProps?: TextProps;
}

export interface TextSearchInputProp {
  isPassField?: boolean;
  isBio?: boolean;
  isSearch?: boolean;
  setter: any;
  placeholderText: string;
  keyboardType?:
    | "default"
    | "number-pad"
    | "decimal-pad"
    | "numeric"
    | "email-address"
    | "phone-pad"
    | "url";
  style?: ViewStyle;
}
interface SettingsBtnProps extends ButtonProps {
  ButtonText?: string;
  ButtonTextStyles?: TextStyle;
  ButtonTextProps?: TextProps;
  LeftIcon?: ReactNode;
  RightIcon?: ReactNode;
  isExtendable?: boolean;
  ChildrenHeight?: number;
  Children?: ReactNode;
}

interface DividerProps {
  height?: DimensionValue;
  width?: DimensionValue;
  borderWidth?: number;
  borderStyle?: "dashed" | "dotted" | "solid";
  borderColor?: string;
}

export {
  CustomButtonProps,
  CustomInputProps,
  DividerProps,
  IconTextBtnProps,
  OutlineTextBtnProps,
  SettingsBtnProps,
  userLogoProps,
};
