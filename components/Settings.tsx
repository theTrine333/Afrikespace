import { View } from "react-native";
import { ThemedText } from "./ThemedText";

const VerticalCounter = ({
  value,
  badger,
}: {
  value: number | string;
  badger: string;
}) => {
  return (
    <View
      style={{
        justifyContent: "center",
        paddingHorizontal: 10,
        alignItems: "center",
      }}
    >
      <ThemedText style={{ fontSize: 13, fontWeight: "bold" }}>
        {value}
      </ThemedText>
      <ThemedText style={{ fontSize: 13, textAlign: "center" }}>
        {badger}
      </ThemedText>
    </View>
  );
};

export { VerticalCounter };
