import themedStyle from "@/constants/Styles";
import { CustomButtonProps } from "@/constants/types";
import React from "react";
import { ThemedView } from "./ThemedView";

const AuthImageButtons = ({
  theme,
  icon,
  action,
  containerStyle,
  iconStyle,
}: CustomButtonProps) => {
  const styles = themedStyle(theme);
  return <ThemedView style={styles.roundBtn}>{icon}</ThemedView>;
};

export { AuthImageButtons };
