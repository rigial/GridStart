import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  onboarding: undefined;
  game: undefined;
  leaderboard: undefined;
  settings: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
