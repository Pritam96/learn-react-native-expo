import { StyleSheet } from "react-native";
import { Slot, Stack } from "expo-router";

const RootLayout = () => {
  return (
    <>
      {/* Expo router automatically pull the child components here */}
      {/* <Slot /> */}

      {/* Stack does same as Slot component, additionally adds navigation behavior (eg: back-button, page name to the top-header )*/}
      {/* <Stack /> */}

      {/* Using for screen options for screen customization */}
      {/* screenOptions on Root stack - For setting globally for all screens */}
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#ddd",
          },
          headerTintColor: "#333",
        }}
      >
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="about" options={{ title: "About" }} />
        <Stack.Screen
          name="contact"
          options={{ title: "Contact", headerShown: false }}
        />
      </Stack>
    </>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});

/*
Stack:
|
|
|
| about ---->
| index <---
------
*/
