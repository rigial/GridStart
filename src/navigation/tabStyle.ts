import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import fontFamilies from '../constants/fontFamilies';

const tabStyle: BottomTabNavigationOptions = {
  tabBarStyle: {
    backgroundColor: '#0E0E0E',
    borderTopColor: '#5E3F3A',
    borderTopWidth: 2,
    paddingBottom: 8,
    paddingTop: 8,
    height: 85,
  },
  tabBarLabelStyle: {
    fontFamily: fontFamilies.SoraMedium,
    fontSize: 12,
  },
  sceneStyle: {
    backgroundColor: '#131313',
  },
  headerStyle: {
    backgroundColor: '#0E0E0E',
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 2,
    borderBottomColor: '#5E3F3A',
  },
  headerTitleAlign: 'center',
  tabBarActiveTintColor: '#FFB4A8',
  tabBarInactiveTintColor: '#E9BCB5',
};

export default tabStyle;
