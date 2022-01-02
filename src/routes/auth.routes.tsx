import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { AppointmentCreate } from '../screens/AppointmentCreate';
import { AppointmentDetails } from '../screens/AppointmentDetails';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='Home' component={Home} />
      <Screen name='AppointmentCreate' component={AppointmentCreate} />
      <Screen name='AppointmentDetails' component={AppointmentDetails} />
    </Navigator>
  );
}