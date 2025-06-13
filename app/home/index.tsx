import { ThemedView } from "@/components/ThemedView";
import themedStyle from "@/constants/Styles";
import React from "react";
import { Text, useColorScheme } from "react-native";

const Home = () => {
  const theme = useColorScheme() ?? "light";
  const styles = themedStyle(theme);
  return (
    <ThemedView style={styles.container}>
      <Text>Home</Text>
    </ThemedView>
  );
};

export default Home;
