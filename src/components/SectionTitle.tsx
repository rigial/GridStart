import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import fontFamilies from '../constants/fontFamilies';

export default function SectionTitle({ title }: { title: string }) {
  return (
    <View style={styles.sectionHeaderContainer}>
      <View style={styles.redIndicator} />
      <Text style={styles.sectionTitle}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    marginTop: 16,
  },
  redIndicator: {
    width: 3,
    height: 18,
    backgroundColor: '#E24A32',
    marginRight: 8,
  },
  sectionTitle: {
    color: '#8E8E93',
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    fontFamily: fontFamilies.SoraSemiBold,
  },
});
