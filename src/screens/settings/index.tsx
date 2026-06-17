import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './style';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import SectionTitle from '../../components/SectionTitle';
import SettingsCard from '../../components/SettingsCard';

export default function Settings() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollViewContent}
    >
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.description}>
        Manage your telemetry and app preferences.
      </Text>
      <View>
        <SectionTitle title="PREFERENCES" />
        <SettingsCard type="preferences" />
        <SectionTitle title="ACCOUNT" />
        <SettingsCard type="account" />
        <SectionTitle title="About" />
        <SettingsCard type="about" />
      </View>
      <TouchableOpacity style={styles.logoutButton}>
        <MaterialDesignIcons
          name="logout"
          size={26}
          color="#FFB4AB"
          style={styles.logoutButtonIcon}
        />
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
