import { Pressable, StyleSheet, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";

// themed components
import ThemedView from "../../components/ThemedView";
import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";
import ThemedButton from "../../components/ThemedButton";
import ThemedTextInput from "../../components/ThemedTextInput";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log("login form submitted", email, password);
  };

  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedText title={true} style={styles.title}>
        Login to Your Account
      </ThemedText>

      <ThemedTextInput
        placeholder="Email"
        style={{ width: "80%", marginBottom: 20 }}
        keyboardType="email-address"
        onChangeText={setEmail}
        value={email}
      />

      <ThemedTextInput
        placeholder="Password"
        style={{ width: "80%", marginBottom: 20 }}
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />

      <ThemedButton onPress={handleSubmit}>
        <Text style={{ color: "#f3f2f2" }}>Login</Text>
      </ThemedButton>

      <Spacer height={100} />
      <Link href="/register">
        <ThemedText style={{ textAlign: "center" }}>
          Register instead
        </ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center", // horizontal
    justifyContent: "center", // vertical
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 30,
  },
});
