import React from "react";
import { SafeAreaView, Image } from "react-native";
import { Button, Layout, Text, Avatar } from "@ui-kitten/components";
import { ThemeContext } from "./theme-context";

export const HomeScreen = ({ route, navigation }) => {
  const themeContext = React.useContext(ThemeContext);
  const user = route.params.response.data.user_info;

  const navigateDetails = () => {
    navigation.navigate("Details");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Image
          style={{ height: 300, width: 300 }}
          source={require("./assets/avatar.gif")}
        />
        {/* <Avatar source={require("./assets/avatar1.gif")} size="giant" /> */}
        <Text status="success" category="h4">
          Welcome {user.name}
        </Text>
        <Text category="h6">
          <Text category="h5">Email:</Text> {user.email}
        </Text>
        <Button
          status="success"
          style={{ marginVertical: 4 }}
          onPress={navigateDetails}
        >
          OPEN DETAILS
        </Button>
        <Button
          status="success"
          style={{ marginVertical: 4 }}
          onPress={themeContext.toggleTheme}
        >
          TOGGLE THEME
        </Button>
      </Layout>
    </SafeAreaView>
  );
};
