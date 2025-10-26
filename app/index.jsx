import { StyleSheet, Text, useColorScheme, View } from "react-native";
import { Link } from "expo-router";
import { Colors } from "../constants/Colors";

// themed components
import ThemedView from "../components/ThemedView";
import ThemedLogo from "../components/ThemedLogo";
import Spacer from "../components/Spacer";
import ThemedText from "../components/ThemedText";
import ThemedCard from "../components/ThemedCard";

const Home = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo style={styles.img} />
      <Spacer height={40} />

      <ThemedText style={styles.title} title={true}>
        My Example App
      </ThemedText>
      <Spacer height={10} />

      <ThemedText>Reading List App</ThemedText>
      <Spacer />

      <ThemedCard>
        <ThemedText>Hello, this is card</ThemedText>
      </ThemedCard>
      <Spacer />

      <Link href="/login" style={styles.link}>
        <ThemedText>Login Page</ThemedText>
      </Link>
      <Link href="/register" style={styles.link}>
        <ThemedText>Register Page</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Home;

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
  img: {
    height: 100,
    width: 100,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});
