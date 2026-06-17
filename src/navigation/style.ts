import { StyleSheet } from 'react-native';
import fontFamilies from '../constants/fontFamilies';

export const styles = StyleSheet.create({
  tabBarTitle: {
    color: '#FFB4A8',
    fontSize: 20,
    fontFamily: fontFamilies.SoraBold,
    letterSpacing: 0.7,
  },
  leftIcon: {
    marginLeft: 16,
  },
  rightIcon: {
    marginRight: 16,
  },
});
