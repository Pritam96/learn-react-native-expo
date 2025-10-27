import { StyleSheet } from "react-native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import GuestOnly from "../../components/auth/GuestOnly";

const AuthLayout = () => {
  return (
    <GuestOnly>
      {/* Auto-update status-bar light-text in dark-header */}
      <StatusBar value="auto" />
      {/* This layout will automatically applied to all routes in this group */}
      {/* Header name disabled and slide animation removed */}
      <Stack screenOptions={{ headerShown: false, animation: "none" }} />
    </GuestOnly>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({});
