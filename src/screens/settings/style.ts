import { StyleSheet } from 'react-native';
import fontFamilies from '../../constants/fontFamilies';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  scrollViewContent: { flexGrow: 1 },
  title: {
    fontFamily: fontFamilies.SoraBold,
    fontSize: 28,
    marginBottom: 10,
    color: '#E2E2E2',
    letterSpacing: 0.5,
  },
  description: {
    fontFamily: fontFamilies.InterRegular,
    fontSize: 16,
    color: '#E9BCB5',
    letterSpacing: 0.2,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginVertical: 20,
    width: '100%',
    height: 60,
    backgroundColor: '#1F1F1F',
    borderWidth: 1,
    borderColor: '#FFB4AB',
    marginBottom: 70,
  },
  logoutButtonText: {
    fontFamily: fontFamilies.SoraBold,
    fontSize: 24,
    color: '#FFB4AB',
    letterSpacing: 0.2,
    textTransform: 'uppercase',
  },
  logoutButtonIcon: {
    marginTop: 2,
  },
});
