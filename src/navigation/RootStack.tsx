import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigation from './TabNavigation';
import Onboarding from '../screens/onboarding';

const Stack = createNativeStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator initialRouteName={'Main'}>
      <Stack.Screen
        name={'Onboarding'}
        component={Onboarding}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={'Main'}
        component={TabNavigation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
