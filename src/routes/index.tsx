import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import { AuthRoutes } from './auth.routes';
import { theme } from "../global/styles/theme";

export function Routes(){
  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: theme.colors.secondary100,
    }
  };

  return(
    <NavigationContainer theme={navTheme}>
      <AuthRoutes />
    </NavigationContainer>
  );
}