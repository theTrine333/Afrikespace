import { AuthImageButtons } from "@/components/CustomButtons";
import { CustomInput, ORAUTHDIVIDER } from "@/components/CustomInput";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import themedStyle, { height, width } from "@/constants/Styles";
import Feather from "@expo/vector-icons/Feather";
import Fontisto from "@expo/vector-icons/Fontisto";
import { Link, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
const Login = () => {
  const theme = useColorScheme() ?? "light";
  const [email, setEmail] = useState("");
  const [passwordShow, setPasswordShown] = useState<boolean>(true);
  const [state, setState] = useState<null | "loading" | "error">(null);
  const styles = themedStyle(theme);
  const router = useRouter();
  return (
    <ThemedView style={[styles.container, { paddingTop: 80 }]}>
      <Image
        source={require("@/assets/images/logo.jpg")}
        style={[styles.logo, { borderColor: Colors[theme].blur }]}
      />
      {/* </View> */}
      <ThemedText style={{ alignSelf: "center", fontWeight: "500" }}>
        Login to Afrikespace
      </ThemedText>
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
      {/* Password */}
      <CustomInput
        theme={theme}
        type={"password"}
        setter={setEmail}
        placeHolderText="Enter your password"
        keyboardType="default"
        containerStyle={{
          height: height * 0.06,
          width: width * 0.9,
          backgroundColor: Colors[theme].blur,
          borderColor: theme === "light" ? Colors.light.button : "white",
          margin: 5,
        }}
        secured={passwordShow}
        inputStyle={{ color: Colors[theme].text }}
        placeHolderTextColor="grey"
        leftIcon={<Feather name="lock" size={20} color={Colors[theme].text} />}
        rightIcon={
          <TouchableOpacity
            onPress={() => setPasswordShown(!passwordShow)}
            hitSlop={20}
          >
            <Feather
              name={passwordShow ? "eye" : "eye-off"}
              size={20}
              color={Colors[theme].text}
            />
          </TouchableOpacity>
        }
      />
      {/* Fogot password text */}
      <TouchableOpacity>
        <ThemedText
          style={{
            alignSelf: "flex-end",
            padding: 10,
            marginRight: 10,
            fontSize: 14,
          }}
        >
          Forgot password?{" "}
          <Text style={{ color: Colors[theme].button }}>Reset</Text>
        </ThemedText>
      </TouchableOpacity>
      <View
        style={[
          styles.longBtn,
          {
            backgroundColor: "transparent",
            borderWidth: 1,
            borderColor: Colors[theme].button,
          },
        ]}
      >
        <Link href={"/auth/signup"}>
          <Text style={[styles.longBtnText, { color: Colors[theme].button }]}>
            Signup
          </Text>
        </Link>
      </View>
      <TouchableOpacity
        style={styles.longBtn}
        onPress={() => {
          setState("loading");
          setTimeout(() => {
            setState(null);
            router.replace("/home");
          }, 3000);
        }}
      >
        {state === "loading" ? (
          <ActivityIndicator size={25} color={"white"} />
        ) : (
          <ThemedText style={styles.longBtnText}>Login</ThemedText>
        )}
      </TouchableOpacity>
      {/* Login options */}
      <ORAUTHDIVIDER theme={theme} />
      <ThemedView
        style={[
          styles.rowView,
          {
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            padding: 10,
          },
        ]}
      >
        <AuthImageButtons
          theme={theme}
          action={() => {}}
          icon={
            <Image
              source={require("@/assets/images/google.png")}
              style={{ height: 50, width: 50 }}
              resizeMode="contain"
            />
          }
        />
        <AuthImageButtons
          theme={theme}
          action={() => {}}
          icon={
            <Image
              source={require("@/assets/images/facebook.png")}
              // Height has been increased because the original image size is very small
              style={{ height: 90, width: 90 }}
              resizeMode="contain"
            />
          }
        />
        <AuthImageButtons
          theme={theme}
          action={() => {}}
          icon={
            <Image
              source={require("@/assets/images/x.png")}
              style={{ height: 50, width: 50 }}
              resizeMode="contain"
            />
          }
        />
      </ThemedView>

      {/* Terms and conditions */}
      <ThemedText
        style={{
          alignSelf: "center",
          padding: 10,
          fontSize: 14,
          textAlign: "center",
          lineHeight: 17,
        }}
      >
        By logging in you agree to our{"\n"}
        <Text style={{ color: Colors[theme].button, fontWeight: "bold" }}>
          Terms and Conditions
        </Text>
        {"\n"}Of usage
      </ThemedText>
      <StatusBar style="auto" />
    </ThemedView>
  );
};

export default Login;
