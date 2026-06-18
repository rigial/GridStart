import React from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import styles from './style';

export default function Game() {
  return (
    <ScrollView
      style={styles.scrollContainer}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTextLeft}>SYS.REACT.01</Text>
          <Text style={styles.headerTextRight}>ONLINE</Text>
        </View>

        <View style={styles.lightsContainer}>
          {[...Array(5)].map((_, index) => (
            <View key={index} style={styles.lightColumn}>
              <View style={styles.lightCircle} />
              <View style={styles.lightCircle} />
              <View style={styles.lightCircle} />
              <View style={styles.lightCircle} />
            </View>
          ))}
        </View>

        <View style={styles.timeContainer}>
          <Text style={styles.timeLabel}>REACTION TIME</Text>
          <Text style={styles.timeValue}>
            0.000<Text style={styles.timeUnit}>s</Text>
          </Text>
        </View>

        <TouchableOpacity style={styles.startButton} activeOpacity={0.8}>
          <MaterialDesignIcons
            name="flag-checkered"
            size={28}
            color="#FFF"
            style={styles.buttonIcon}
          />
          <Text style={styles.startButtonText}>START SEQUENCE</Text>
        </TouchableOpacity>

        <View style={styles.pbCard}>
          <View>
            <Text style={styles.cardLabel}>PERSONAL BEST</Text>
            <Text style={styles.pbValue}>0.214s</Text>
          </View>
          <MaterialDesignIcons name="timer-outline" size={28} color="#AF8781" />
        </View>

        <View style={styles.bottomGrid}>
          <View style={styles.smallCard}>
            <Text style={styles.cardLabel}>STREAK</Text>
            <View style={styles.cardValueWithIcon}>
              <Text style={styles.smallCardValue}>12 </Text>
              <MaterialDesignIcons name="fire" size={30} color="#AF8781" />
            </View>
          </View>

          <View style={styles.smallCard}>
            <Text style={styles.cardLabel}>GLOBAL RANK</Text>
            <Text style={styles.smallCardValue}>#8,492</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
