import { StyleSheet } from "react-native";
import React from "react";

// themed components
import ThemedView from "../../components/ThemedView";
import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";
import ThemedCard from "../../components/ThemedCard";
import { Link } from "expo-router";

const Register = () => {
  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedText title={true} style={styles.title}>
        Register For An Account
      </ThemedText>

      <Spacer height={100} />
      <Link href="/login">
        <ThemedText style={{ textAlign: "center" }}>Login instead</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Register;

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
