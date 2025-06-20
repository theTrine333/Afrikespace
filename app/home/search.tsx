import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import themedStyle from "@/constants/Styles";
import React from "react";
import { useColorScheme } from "react-native";

const Search = () => {
  const theme = useColorScheme() ?? "light";
  const styles = themedStyle(theme);
  return (
    <ThemedView style={styles.container}>
      <ThemedText>Search</ThemedText>
    </ThemedView>
  );
};

export default Search;
