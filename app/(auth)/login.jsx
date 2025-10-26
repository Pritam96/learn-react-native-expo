import { StyleSheet } from "react-native";
import React from "react";

// themed components
import ThemedView from "../../components/ThemedView";
import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";
import ThemedCard from "../../components/ThemedCard";
import { Link } from "expo-router";

const Login = () => {
  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedText title={true} style={styles.title}>
        Login to Your Account
      </ThemedText>

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
  },
});

/*
(auth) - folder name under parentheses represents it is a route folder
*/
