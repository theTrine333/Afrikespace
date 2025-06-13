import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import themedStyle from "@/constants/Styles";
import React from "react";
import { useColorScheme } from "react-native";

const AddPost = () => {
  const theme = useColorScheme() ?? "light";
  const styles = themedStyle(theme);
  return (
    <ThemedView style={styles.container}>
      <ThemedText>Add Post</ThemedText>
    </ThemedView>
  );
};

export default AddPost;
