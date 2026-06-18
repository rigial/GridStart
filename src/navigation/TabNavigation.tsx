import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import React from 'react';
import Game from '../screens/game';
import Leaderboard from '../screens/leaderboard';
import Settings from '../screens/settings';
import { IconName } from '../types/icon';
import { Text, TouchableOpacity } from 'react-native';
import tabStyle from './tabStyle';
import { styles } from './style';

const Tab = createBottomTabNavigator();

const renderIconHelper = ({
  color,
  name,
  size,
}: {
  color: string;
  name: IconName;
  size: number;
}) => <MaterialDesignIcons name={name} size={size} color={color} />;

const HeaderTitle = () => <Text style={styles.tabBarTitle}>GridStart</Text>;

const HeaderLeft = () => (
  <TouchableOpacity style={styles.leftIcon}>
    {renderIconHelper({ color: '#FFB4A8', name: 'timer-outline', size: 24 })}
  </TouchableOpacity>
);

const HeaderRight = () => (
  <TouchableOpacity style={styles.rightIcon}>
    {renderIconHelper({
      color: '#FFB4A8',
      name: 'account-circle-outline',
      size: 24,
    })}
  </TouchableOpacity>
);

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        ...tabStyle,
        headerTitle: HeaderTitle,
        headerLeft: HeaderLeft,
        headerRight: HeaderRight,
      }}
    >
      <Tab.Screen
        name="game"
        component={Game}
        options={{
          headerShown: false,
          tabBarLabel: 'Race',
          tabBarIcon: ({ color, size }) =>
            renderIconHelper({ color, name: 'flag-checkered', size }),
        }}
      />
      <Tab.Screen
        name="leaderboard"
        component={Leaderboard}
        options={{
          tabBarLabel: 'Stats',
          tabBarIcon: ({ color, size }) =>
            renderIconHelper({ color, name: 'chart-bar', size }),
        }}
      />
      <Tab.Screen
        name="settings"
        component={Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) =>
            renderIconHelper({ color, name: 'cog', size }),
        }}
      />
    </Tab.Navigator>
  );
}
