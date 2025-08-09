import { SearchBar } from "@/components/CustomInput";
import { ThemedText } from "@/components/ThemedText";
import themedStyle from "@/constants/Styles";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [recentSearches] = useState([
    "React Native",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Python",
    "Web Development",
    "Mobile Apps",
    "UI/UX Design",
  ]);
  const theme = useColorScheme() ?? "light";
  const Styles = themedStyle(theme);
  const handleSearch = () => {
    // TODO: Implement search functionality
    console.log("Searching for:", searchQuery);
  };

  return (
    <View style={[Styles.container, { paddingHorizontal: 10 }]}>
      <View style={{ paddingVertical: 15 }}>
        <SearchBar
          placeholderText="Search for something..."
          setter={setSearchQuery}
          isSearch={true}
          style={{
            marginBottom: 20,
            borderWidth: 1,
            borderColor: "grey",
          }}
        />

        <ThemedText
          style={{
            fontSize: 16,
            fontWeight: "bold",
            marginBottom: 10,
          }}
        >
          Recent Searches
        </ThemedText>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginBottom: 20 }}
        >
          {recentSearches.map((search, index) => (
            <TouchableOpacity
              key={index}
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#f0f0f0",
                paddingHorizontal: 15,
                paddingVertical: 8,
                borderRadius: 20,
                marginRight: 10,
                borderWidth: 1,
                borderColor: "#e0e0e0",
              }}
              onPress={() => setSearchQuery(search)}
            >
              <Ionicons
                name="time-outline"
                size={16}
                color="#666"
                style={{ marginRight: 6 }}
              />
              <Text style={{ fontSize: 14, color: "#333" }}>{search}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Search;
