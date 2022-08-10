import { Button, Icon } from "@ui-kitten/components";
import React, { useContext, useState } from "react";
import { ThemeContext } from "../theme-context";

export default function ThemeButton() {
  const themeContext = useContext(ThemeContext);
  const [dark, setDark] = useState(false);

  const SunIcon = (props) => <Icon {...props} name="sun-outline" />;
  const MoonIcon = (props) => <Icon {...props} name="moon-outline" />;

  const changeTheme = () => {
    themeContext.toggleTheme();
    setDark(!dark);
  };

  return (
    <Button
      appearance="ghost"
      status="basic"
      accessoryLeft={dark ? SunIcon : MoonIcon}
      onPress={changeTheme}
    />
  );
}
