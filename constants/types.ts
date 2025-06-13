import { ReactNode } from "react";
import { KeyboardType, TextStyle, ViewStyle } from "react-native";
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
  iconStyle?: TextStyle;
  action?: any;
}

export { CustomButtonProps, CustomInputProps };
