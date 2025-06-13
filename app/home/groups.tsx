import { ThemedView } from "@/components/ThemedView";
import themedStyle from "@/constants/Styles";
import React from "react";
import { Text, useColorScheme } from "react-native";

const Groups = () => {
  const theme = useColorScheme() ?? "light";
  const styles = themedStyle(theme);
  return (
    <ThemedView style={styles.container}>
      <Text>Groups</Text>
    </ThemedView>
  );
};

export default Groups;
