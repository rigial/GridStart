import { StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import fontFamilies from '../constants/fontFamilies';

export default function SettingsCard({
  type,
}: {
  type: 'preferences' | 'account' | 'about';
}) {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [soundEffects, setSoundEffects] = useState(true);
  const [hapticFeedback, setHapticFeedback] = useState(true);

  return (
    <View style={styles.card}>
      {type === 'preferences' && (
        <>
          <View style={styles.row}>
            <View style={styles.rowLeft}>
              <MaterialDesignIcons
                name="weather-night"
                size={22}
                color="#F2F2F2"
                style={styles.icon}
              />
              <Text style={styles.rowText}>Dark Mode</Text>
            </View>
            <Switch
              value={isDarkMode}
              onValueChange={setIsDarkMode}
              trackColor={{ false: '#3A3A3C', true: '#E24A32' }}
              thumbColor="#FFFFFF"
            />
          </View>

          <View style={styles.separator} />

          {/* Sound Effects */}
          <View style={styles.row}>
            <View style={styles.rowLeft}>
              <MaterialDesignIcons
                name="volume-high"
                size={22}
                color="#F2F2F2"
                style={styles.icon}
              />
              <Text style={styles.rowText}>Sound Effects</Text>
            </View>
            <Switch
              value={soundEffects}
              onValueChange={setSoundEffects}
              trackColor={{ false: '#3A3A3C', true: '#E24A32' }}
              thumbColor="#FFFFFF"
            />
          </View>

          <View style={styles.separator} />

          {/* Haptic Feedback */}
          <View style={styles.row}>
            <View style={styles.rowLeft}>
              <MaterialDesignIcons
                name="vibrate"
                size={22}
                color="#F2F2F2"
                style={styles.icon}
              />
              <Text style={styles.rowText}>Haptic Feedback</Text>
            </View>
            <Switch
              value={hapticFeedback}
              onValueChange={setHapticFeedback}
              trackColor={{ false: '#3A3A3C', true: '#E24A32' }}
              thumbColor="#FFFFFF"
            />
          </View>
        </>
      )}

      {type === 'account' && (
        <>
          <TouchableOpacity style={styles.row} activeOpacity={0.7}>
            <View style={styles.rowLeft}>
              <MaterialDesignIcons
                name="account-cog-outline"
                size={22}
                color="#F2F2F2"
                style={styles.icon}
              />
              <Text style={styles.rowText}>Profile Details</Text>
            </View>
            <MaterialDesignIcons
              name="chevron-right"
              size={22}
              color="#8E8E93"
            />
          </TouchableOpacity>

          <View style={styles.separator} />

          <TouchableOpacity style={styles.row} activeOpacity={0.7}>
            <View style={styles.rowLeft}>
              <MaterialDesignIcons
                name="star-outline"
                size={22}
                color="#F2F2F2"
                style={styles.icon}
              />
              <Text style={styles.rowText}>Subscription</Text>
            </View>
            <View style={styles.proBadge}>
              <Text style={styles.proText}>PRO</Text>
            </View>
          </TouchableOpacity>
        </>
      )}

      {type === 'about' && (
        <>
          <TouchableOpacity style={styles.row} activeOpacity={0.7}>
            <View style={styles.rowLeft}>
              <MaterialDesignIcons
                name="shield-account-outline"
                size={22}
                color="#F2F2F2"
                style={styles.icon}
              />
              <Text style={styles.rowText}>Privacy Policy</Text>
            </View>
            <MaterialDesignIcons name="open-in-new" size={18} color="#8E8E93" />
          </TouchableOpacity>

          <View style={styles.separator} />

          <TouchableOpacity style={styles.row} activeOpacity={0.7}>
            <View style={styles.rowLeft}>
              <MaterialDesignIcons
                name="file-document-outline"
                size={22}
                color="#F2F2F2"
                style={styles.icon}
              />
              <Text style={styles.rowText}>Terms of Service</Text>
            </View>
            <MaterialDesignIcons name="open-in-new" size={18} color="#8E8E93" />
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1C1C1E',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  rowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 12,
    opacity: 0.9,
  },
  separator: {
    height: 1,
    backgroundColor: '#2C2C2E',
    marginLeft: 16,
  },
  rowText: {
    color: '#F2F2F2',
    fontSize: 16,
    fontWeight: '400',
    fontFamily: fontFamilies.InterRegular,
  },
  proBadge: {
    backgroundColor: '#2C2C2E',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#3A3A3C',
  },
  proText: {
    color: '#E24A32',
    fontSize: 11,
    fontFamily: fontFamilies.InterBold,
    letterSpacing: 1,
  },
});
