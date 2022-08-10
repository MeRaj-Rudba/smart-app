import React from "react";
import { SafeAreaView } from "react-native";
import { Button, Layout, Text } from "@ui-kitten/components";
import { ThemeContext } from "./theme-context";

export const HomeScreen = ({ route, navigation }) => {
  const themeContext = React.useContext(ThemeContext);

  const navigateDetails = () => {
    navigation.navigate("Details");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Text category="h4">
          Welcome {route.params.response.data.user_info.name}
        </Text>
        <Text category="h6">
          <Text category="h5">Email:</Text>{" "}
          {route.params.response.data.user_info.email}
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
