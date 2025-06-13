import { ThemedView } from "@/components/ThemedView";
import themedStyle from "@/constants/Styles";
import React from "react";
import { Text, useColorScheme } from "react-native";

const Search = () => {
  const theme = useColorScheme() ?? "light";
  const styles = themedStyle(theme);
  return (
    <ThemedView style={styles.container}>
      <Text>Search</Text>
    </ThemedView>
  );
};

export default Search;
