import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import { useAuth } from "../hooks/auth";
import { SignIn } from '../screens/SignIn';
import { AuthRoutes } from './auth.routes';
import { theme } from "../global/styles/theme";

export function Routes(){
  const { user } = useAuth();

  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: theme.colors.secondary100,
    }
  };

  return(
    <NavigationContainer theme={navTheme}>
      { user.id ? <AuthRoutes /> : <SignIn /> }
    </NavigationContainer>
  );
}