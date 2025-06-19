import { Colors } from "@/constants/Colors";
import themedStyle from "@/constants/Styles";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { Image, useColorScheme, View } from "react-native";

const HomeLayout = () => {
  const theme = useColorScheme() ?? "light";
  const styles = themedStyle(theme);
  const TabImages = () => {
    return {
      chatLogoOutline:
        theme === "light"
          ? require(`@/assets/images/chatbot-light-outline.png`)
          : require("@/assets/images/chatbot-dark-outline.png"),
      chatLogo:
        theme === "light"
          ? require(`@/assets/images/chatbot-light.png`)
          : require("@/assets/images/chatbot-dark.png"),
    };
  };
  return (
    <Tabs
      screenOptions={{
        tabBarActiveBackgroundColor: Colors[theme].background,
        tabBarInactiveBackgroundColor: Colors[theme].background,
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: Colors[theme].text,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              size={28}
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Explore",
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons size={28} name={"explore"} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                opacity: focused ? 1 : 0.5,
                marginTop: 5,
                height: 40,
                width: 40,
                alignItems: "center",
                borderRadius: 100,
                alignSelf: "center",
                justifyContent: "center",
                backgroundColor: Colors[theme].button,
              }}
            >
              <Ionicons
                size={30}
                name={focused ? "add" : "add-outline"}
                color={"white"}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="groups"
        options={{
          title: "Groups",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              size={28}
              name={focused ? "people" : "people-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="ai"
        options={{
          title: "ChatBot",
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                opacity: focused ? 1 : 0.5,
                marginTop: 10,
                alignSelf: "flex-end",
                justifyContent: "center",
              }}
            >
              <Image
                source={
                  focused ? TabImages().chatLogo : TabImages().chatLogoOutline
                }
                style={styles.tabNavImage}
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
};

export default HomeLayout;
