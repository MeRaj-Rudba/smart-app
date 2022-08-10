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
      <Spinner status="basic" size="small" />
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
          if (response.data.status === 200) {
            props.navigateHome(response);

            console.log(response);
          } else {
            throw new Error();
          }
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
        <Text status="success" category="h5">
          Welcome
        </Text>
        <Text status="danger">{loginError}</Text>
        <Input
          label="Username"
          placeholder="Username"
          value={username}
          onChangeText={(nextValue) => setUsername(nextValue)}
        />
        <Text status="danger">{usernameError}</Text>

        <Input
          value={password}
          label="Password"
          placeholder="Password"
          accessoryRight={renderIcon}
          secureTextEntry={secureTextEntry}
          onChangeText={(nextValue) => setPassword(nextValue)}
        />
        <Text status="danger">{passwordError}</Text>
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
