import { Image, useColorScheme } from "react-native";
import LightLogo from "../assets/icon.png";
import DarkLogo from "../assets/adaptive-icon.png";

const ThemedLogo = ({ ...props }) => {
  const colorScheme = useColorScheme();
  const logo = colorScheme === "dark" ? DarkLogo : LightLogo;

  return <Image source={logo} {...props} />;
};

export default ThemedLogo;
