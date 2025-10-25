import { Image, StyleSheet, Text, View } from "react-native";
import Logo from "../assets/icon.png";
import { Link } from "expo-router";

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.img} />
      <Text style={styles.title}>The Heading 1</Text>
      <Text style={styles.secondaryTitle}>Reading List App</Text>

      <View style={styles.card}>
        <Text>Hello, this is card</Text>
      </View>

      <Link href="/about" style={styles.link}>
        About
      </Link>
      <Link href="/contact" style={styles.link}>
        Contact Us
      </Link>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center", // horizontal
    justifyContent: "center", // vertical
    backgroundColor: "#f5f5f7",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  secondaryTitle: {
    marginVertical: 20,
  },
  img: {
    height: 100,
    width: 100,
    marginVertical: 20,
  },
  card: {
    backgroundColor: "#eee",
    padding: 20,
    borderRadius: 5,
    boxShadow: "4px 4px rgba(0,0,0,0.1)",
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});
