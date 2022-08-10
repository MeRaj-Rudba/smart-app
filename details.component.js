import React from "react";
import { SafeAreaView } from "react-native";
import {
  Divider,
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";
import env from "./env";
import ThemeButton from "./components/theme-btn";

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

export const DetailsScreen = ({ navigation }) => {
  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation
        title={env.appName}
        alignment="center"
        accessoryLeft={BackAction}
      />
      <Divider />
      <Layout
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <ThemeButton />
        <Text category="h5">Welcome to your detail page</Text>
      </Layout>
    </SafeAreaView>
  );
};
