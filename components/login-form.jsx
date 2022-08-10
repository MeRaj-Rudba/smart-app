import React, { useState } from "react";
import { TouchableWithoutFeedback, StyleSheet, View } from "react-native";
import {
  Button,
  Icon,
  Layout,
  Spinner,
  Input,
  Text,
} from "@ui-kitten/components";
import axios from "axios";

const AlertIcon = (props) => <Icon {...props} name="alert-circle-outline" />;

export const LoginForm = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [loginError, setLoginError] = useState("");

  const [loading, setLoading] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const LoadingIndicator = (props) => (
    <View style={[props.style, styles.indicator]}>
      <Spinner size="small" />
    </View>
  );
  const login = async () => {
    setLoading(true);
    setLoginError("");
    try {
      axios
        .post("http://10.168.71.25/tcl-sfa/public/api/login", {
          username: username,
          password: password,
        })
        .then(function (response) {
          setLoading(false);

          props.navigateHome(response);

          // console.log(response);
        })
        .catch(function (error) {
          setLoading(false);

          setLoginError("Please provide valid credential!");

          console.log(error);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };
  const LogInIcon = (props) => <Icon {...props} name="log-in-outline" />;

  const renderIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? "eye-off" : "eye"} />
    </TouchableWithoutFeedback>
  );

  return (
    <>
      <Layout style={styles.container}>
        <Text category="h5">Welcome</Text>
        <Text>{loginError}</Text>
        <Input
          label="Username"
          placeholder="Username"
          value={username}
          caption={usernameError}
          onChangeText={(nextValue) => setUsername(nextValue)}
        />
        <Input
          value={password}
          label="Password"
          placeholder="Password"
          caption={passwordError}
          accessoryRight={renderIcon}
          secureTextEntry={secureTextEntry}
          onChangeText={(nextValue) => setPassword(nextValue)}
        />
      </Layout>
      <Button
        style={styles.button}
        status="success"
        accessoryLeft={loading && LoadingIndicator}
        onPress={login}
        accessoryRight={LogInIcon}
      >
        LOGIN
      </Button>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
  },
  captionContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  captionIcon: {
    width: 10,
    height: 10,
    marginRight: 5,
  },
  captionText: {
    fontSize: 12,
    fontWeight: "400",
    // fontFamily: "opensans-regular",
    color: "#8F9BB3",
  },
});
