import {
  IconTextBtn,
  OutlineTextBtn,
  SettingsBtn,
  UserLogo,
  UserLogoLarge,
} from "@/components/CustomButtons";
import { Horizontal, Vertical } from "@/components/Dividers";
import { VerticalCounter } from "@/components/Settings";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { person_image } from "@/constants/images";
import themedStyle, { height, width } from "@/constants/Styles";
import {
  AntDesign,
  EvilIcons,
  Feather,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, useColorScheme, View } from "react-native";

const Index = () => {
  const theme = useColorScheme() ?? "light";
  const styles = themedStyle(theme);
  const router = useRouter();
  return (
    <ThemedView
      style={[styles.container, { paddingTop: 0, paddingBottom: 10 }]}
    >
      <ScrollView style={{ width: width, paddingHorizontal: 20 }}>
        <UserLogoLarge
          image_url="https://pnclogosofficial.s3.us-west-2.amazonaws.com/2016/12/02085143/The-evolution-of-Google-logos-through-the-years.jpg"
          width={width}
          imageStyle={{
            height: height * 0.18,
            backgroundColor: Colors[theme].blur,
          }}
          containerStyle={{
            flex: 1,
            borderColor: "white",
            marginLeft: -20,
          }}
          imageProps={{
            contentFit: "cover",
          }}
          height={height * 0.15}
        />
        <View
          style={{
            position: "absolute",
            flexDirection: "row",
            justifyContent: "space-between",
            top: 90,
            width: width,
            marginLeft: -20,
            alignItems: "center",
            paddingHorizontal: 10,
          }}
        >
          <UserLogo
            image_url={person_image}
            height={100}
            isClickable
            borderRadius={50}
            width={100}
            imageStyle={{ borderColor: Colors[theme].background }}
            containerStyle={{}}
          />
          <IconTextBtn
            Icon={
              <Feather name="camera" size={20} color={Colors[theme].button} />
            }
            ButtonText="Upload"
            ButtonTextStyles={{
              color: Colors[theme].button,
              fontWeight: "bold",
            }}
          />
        </View>
        {/* User profile details */}
        <ThemedView
          style={{
            alignItems: "center",
            backgroundColor: Colors[theme].blur,
            width: "100%",
            marginTop: 80,
            alignSelf: "center",
            padding: 10,
            borderRadius: 10,
            height: height * 0.15,
          }}
        >
          <ThemedText style={{ fontWeight: "800" }}>John Doe</ThemedText>
          {/* Horizontal divider */}
          <Horizontal />
          {/* Followers */}
          <View
            style={[
              styles.rowView,
              {
                gap: 10,
                alignItems: "center",
                justifyContent: "space-between",
                padding: 5,
              },
            ]}
          >
            {/* Followers */}
            <VerticalCounter value={"10K"} badger="Followers" />
            <Vertical />
            {/* Following */}
            <VerticalCounter value={109} badger="Following" />
            <Vertical />
            <VerticalCounter value={989} badger="Posts" />
          </View>
        </ThemedView>
        <OutlineTextBtn
          ButtonText="Edit profile"
          ButtonTextStyles={{ fontWeight: "bold" }}
          Action={() => {
            router.push("/account");
          }}
        />
        <ThemedText style={{ margin: 10 }}>Preferences</ThemedText>
        <SettingsBtn
          ButtonText="App theme"
          LeftIcon={
            <MaterialCommunityIcons
              name="theme-light-dark"
              color={Colors[theme].text}
              size={25}
            />
          }
        />
        <SettingsBtn
          ButtonText="Notification Preferences"
          LeftIcon={
            <Ionicons
              name="notifications-circle-outline"
              color={Colors[theme].text}
              size={25}
            />
          }
          RightIcon={
            <EvilIcons
              name="chevron-right"
              color={Colors[theme].text}
              size={25}
            />
          }
        />
        <ThemedText style={{ margin: 10 }}>Privacy & Security</ThemedText>
        <SettingsBtn
          ButtonText="Privacy & Security"
          LeftIcon={
            <Feather name="shield" color={Colors[theme].text} size={25} />
          }
          RightIcon={
            <EvilIcons
              name="chevron-right"
              color={Colors[theme].text}
              size={25}
            />
          }
        />

        <SettingsBtn
          ButtonText="Updates"
          LeftIcon={
            <AntDesign name="download" color={Colors[theme].text} size={25} />
          }
        />
        <ThemedText style={{ margin: 10 }}>Support & Help</ThemedText>
        <SettingsBtn
          ButtonText="Help Center"
          ButtonTextStyles={{ color: Colors[theme].text }}
          LeftIcon={
            <AntDesign
              name="questioncircleo"
              color={Colors[theme].text}
              size={25}
            />
          }
        />
        <SettingsBtn
          ButtonText="Contact Support"
          ButtonTextStyles={{ color: Colors[theme].text }}
          LeftIcon={
            <Feather name="smartphone" color={Colors[theme].text} size={25} />
          }
        />
        <SettingsBtn
          ButtonText="Sign Out"
          Action={() => {
            router.replace("/auth");
          }}
          ButtonTextStyles={{ color: "red", fontWeight: "bold" }}
          LeftIcon={<Ionicons name="log-out-outline" color={"red"} size={25} />}
        />
      </ScrollView>
      <StatusBar hidden />
    </ThemedView>
  );
};

export default Index;
