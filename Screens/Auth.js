import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { Button, Icon, Layout } from "@ui-kitten/components";
import { ThemeContext } from "../theme-context";
import { LoginForm } from "../components/login-form";
import ThemeButton from "../components/theme-btn";

export const AuthScreen = ({ navigation }) => {
  const navigateHome = (response) => {
    navigation.navigate("Home", {
      response: response,
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <ThemeButton />
        <LoginForm navigateHome={navigateHome} />
      </Layout>
    </SafeAreaView>
  );
};
