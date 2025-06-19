import { ThemedView } from "@/components/ThemedView";
import themedStyle from "@/constants/Styles";
import React from "react";
import { useColorScheme } from "react-native";

const Index = () => {
  const theme = useColorScheme() ?? "light";
  const styles = themedStyle(theme);
  return <ThemedView style={styles.container}></ThemedView>;
};

export default Index;
