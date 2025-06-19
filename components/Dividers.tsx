import { DividerProps } from "@/constants/types";
import { View } from "react-native";

const Horizontal = ({
  height = 1,
  width,
  borderWidth = 1,
  borderStyle = "solid",
  borderColor = "grey",
}: DividerProps) => {
  return (
    <View
      style={{
        marginVertical: 5,
        height: height,
        width: width ? width : "100%",
        borderColor: borderColor,
        borderWidth: borderWidth,
        borderStyle: borderStyle,
      }}
    />
  );
};

const Vertical = ({
  height,
  width = 1,
  borderWidth = 1,
  borderStyle = "solid",
  borderColor = "grey",
}: DividerProps) => {
  return (
    <View
      style={{
        marginVertical: 5,
        height: height ? height : "100%",
        width: width,
        borderColor: borderColor,
        borderWidth: borderWidth,
        borderStyle: borderStyle,
      }}
    />
  );
};
export { Horizontal, Vertical };
