import { CustomInput } from "@/components/CustomInput";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import themedStyle, { height, width } from "@/constants/Styles";
import Fontisto from "@expo/vector-icons/Fontisto";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
const Signup = () => {
  const theme = useColorScheme() ?? "light";
  const styles = themedStyle(theme);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [state, setState] = useState<null | "loading" | "error">(null);
  return (
    <ThemedView style={styles.container}>
      <Image source={require("@/assets/images/logo.jpg")} style={styles.logo} />
      <ThemedText style={{ alignSelf: "center", fontWeight: "500" }}>
        Get started with Afrikespace
      </ThemedText>
      <ThemedText style={{ alignSelf: "center", fontWeight: "200" }}>
        Signup today
      </ThemedText>
      {/* Email field */}
      <CustomInput
        theme={theme}
        type={"email"}
        setter={setEmail}
        placeHolderText="Enter your email"
        keyboardType="email-address"
        placeHolderTextColor="grey"
        containerStyle={{
          height: height * 0.06,
          width: width * 0.9,
          backgroundColor: Colors[theme].blur,
          borderColor: theme === "light" ? Colors.light.button : "white",
          margin: 5,
        }}
        inputStyle={{ color: Colors[theme].text }}
        leftIcon={
          <Fontisto name="email" size={20} color={Colors[theme].text} />
        }
      />
      {/* Username field */}
      <CustomInput
        theme={theme}
        type={"email"}
        setter={setEmail}
        placeHolderText="Enter your username"
        keyboardType="default"
        placeHolderTextColor="grey"
        containerStyle={{
          height: height * 0.06,
          width: width * 0.9,
          backgroundColor: Colors[theme].blur,
          borderColor: theme === "light" ? Colors.light.button : "white",
          margin: 5,
        }}
        inputStyle={{ color: Colors[theme].text }}
        leftIcon={
          <Fontisto name="person" size={20} color={Colors[theme].text} />
        }
      />
      <TouchableOpacity
        style={styles.longBtn}
        onPress={() => {
          setState("loading");
          setTimeout(() => {
            setState(null);
          }, 3000);
        }}
      >
        {state === "loading" ? (
          <ActivityIndicator size={25} color={"white"} />
        ) : (
          <ThemedText style={styles.longBtnText}>Continue</ThemedText>
        )}
      </TouchableOpacity>
      <TouchableOpacity>
        <ThemedText
          style={{
            alignSelf: "center",
            padding: 5,
            fontSize: 14,
          }}
        >
          Already have an account?{" "}
          <Text style={{ color: Colors[theme].button }}>Login</Text>
        </ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
};

export default Signup;
