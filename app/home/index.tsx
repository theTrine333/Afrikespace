import { AuthImageButtons } from "@/components/CustomButtons";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import themedStyle from "@/constants/Styles";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { useColorScheme, View } from "react-native";

const Home = () => {
  const theme = useColorScheme() ?? "light";
  const styles = themedStyle(theme);
  const router = useRouter();
  return (
    <ThemedView style={[styles.container, { paddingHorizontal: 10 }]}>
      {/* Header Viewer */}
      <ThemedView
        style={[
          styles.rowView,
          {
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: 10,
            borderBottomWidth: 1,
            borderColor: Colors[theme].text,
          },
        ]}
      >
        <ThemedText type="title">Afrikespace</ThemedText>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <AuthImageButtons
            icon={
              <Ionicons
                name="notifications"
                size={25}
                color={Colors[theme].text}
              />
            }
            theme={theme}
          />
          <AuthImageButtons
            icon={<Ionicons name="cog" size={25} color={Colors[theme].text} />}
            theme={theme}
            action={() => {
              router.push("/settings");
            }}
          />
        </View>
      </ThemedView>
      {/* Top Tabs */}
    </ThemedView>
  );
};

export default Home;
