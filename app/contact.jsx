import { StyleSheet, Text, useColorScheme, View } from "react-native";
import { Link } from "expo-router";
import { Colors } from "../constants/Colors";

const Contact = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.text }]}>contact us page</Text>
      <Link href="/" style={styles.link}>
        Back Home
      </Link>
    </View>
  );
};

export default Contact;

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
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});
