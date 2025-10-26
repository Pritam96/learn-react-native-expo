import { useColorScheme, View } from "react-native";
import { Colors } from "../constants/Colors";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

const ThemedView = ({ style, safe = false, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  /* SafeAreaView helps to place the content with in the "safe area" */

  if (!safe) {
    return (
      <View
        style={[
          {
            backgroundColor: theme.background,
          },
          style,
        ]}
        {...props}
      />
    );
  }

  /* Using SafeAreaView */
  // return (
  //   <SafeAreaView
  //     style={[
  //       {
  //         backgroundColor: theme.background,
  //       },
  //       style,
  //     ]}
  //     {...props}
  //   />
  // );

  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        {
          backgroundColor: theme.background,
          paddingTop: insets.top, // custom approach for safeAreaView
          paddingBottom: insets.bottom, // custom approach for safeAreaView
        },
        style,
      ]}
      {...props}
    />
  );
};

export default ThemedView;
