import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import styles from './style';

const LEADERBOARD_DATA = [
  {
    rank: 1,
    name: 'ApexPredator',
    country: 'NLD',
    time: '0.185s',
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80', // Replace with your assets
  },
  {
    rank: 2,
    name: 'VelocityQueen',
    country: 'MCO',
    time: '0.191s',
    avatar:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80',
  },
  {
    rank: 3,
    name: 'Slipstream88',
    country: 'ITA',
    time: '0.198s',
    avatar: null, // Forces fallback default profile icon
  },
  {
    rank: 4,
    name: 'BrakingLate',
    country: 'ESP',
    time: '0.205s',
    avatar:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=80',
  },
  {
    rank: 5,
    name: 'SectorPurp',
    country: 'USA',
    time: '0.210s',
    avatar: null,
  },
];

const currentUser = {
  rank: 1245,
  name: 'Current User',
  country: 'GBR',
  time: '0.245s',
  avatar:
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
};

export default function Leaderboard() {
  const [activeTab, setActiveTab] = useState<'global' | 'user'>('global');

  const renderLeaderboardItem = ({
    item,
  }: {
    item: (typeof LEADERBOARD_DATA)[0];
  }) => (
    <View style={styles.card}>
      <Text style={styles.rankText}>{item.rank}</Text>

      {item.avatar ? (
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
      ) : (
        <View style={styles.fallbackAvatar}>
          <MaterialDesignIcons
            name="account-outline"
            size={24}
            color="#A0A0A0"
          />
        </View>
      )}

      <View style={styles.infoContainer}>
        <Text style={styles.nameText}>{item.name}</Text>
        <View style={styles.countryRow}>
          <MaterialDesignIcons
            name="flag-variant-outline"
            size={14}
            color="#E9BCB5"
            style={styles.flagIcon}
          />
          <Text style={styles.countryText}>{item.country}</Text>
        </View>
      </View>

      <Text style={styles.timeText}>{item.time}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Global Standings</Text>

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === 'global' && styles.activeTabButton,
          ]}
          onPress={() => setActiveTab('global')}
          activeOpacity={0.8}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'global' && styles.activeTabText,
            ]}
          >
            Global
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === 'user' && styles.activeTabButton,
          ]}
          onPress={() => setActiveTab('user')}
          activeOpacity={0.8}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'user' && styles.activeTabText,
            ]}
          >
            User
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.currentUserCard}>
        <Image source={{ uri: currentUser.avatar }} style={styles.avatar} />
        <View style={styles.infoContainer}>
          <Text style={styles.currentUserNameText}>{currentUser.name}</Text>
          <View style={styles.countryRow}>
            <MaterialDesignIcons
              name="flag-variant-outline"
              size={14}
              color="#E9BCB5"
              style={styles.flagIcon}
            />
            <Text style={styles.countryText}>{currentUser.country}</Text>
          </View>
          <Text style={styles.currentUserRankText}>{currentUser.rank}</Text>
        </View>

        <Text style={styles.currentUserTimeText}>{currentUser.time}</Text>
      </View>

      <FlatList
        data={LEADERBOARD_DATA}
        keyExtractor={item => item.rank.toString()}
        renderItem={renderLeaderboardItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
