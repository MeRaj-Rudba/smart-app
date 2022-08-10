import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { Button, Icon, Layout } from "@ui-kitten/components";
import { ThemeContext } from "../theme-context";
import { LoginForm } from "../components/login-form";

export const AuthScreen = ({ navigation }) => {
  const themeContext = React.useContext(ThemeContext);
  const [dark, setDark] = useState(false);

  const navigateHome = (response) => {
    navigation.navigate("Home", {
      response: response,
    });
  };
  const SunIcon = (props) => <Icon {...props} name="sun-outline" />;
  const MoonIcon = (props) => <Icon {...props} name="moon-outline" />;

  const changeTheme = () => {
    themeContext.toggleTheme();
    setDark(true);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Button
          appearance="ghost"
          status="basic"
          accessoryLeft={dark ? SunIcon : MoonIcon}
          onPress={changeTheme}
        />
        <LoginForm navigateHome={navigateHome} />
      </Layout>
    </SafeAreaView>
  );
};
