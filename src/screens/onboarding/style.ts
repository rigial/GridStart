import { StyleSheet } from 'react-native';
import fontFamilies from '../../constants/fontFamilies';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  title: {
    color: '#E2E2E2',
    fontSize: 38,
    fontFamily: fontFamilies.SoraBold,
    marginBottom: 10,
    letterSpacing: 0.2,
  },
  description: {
    color: '#E9BCB5',
    fontSize: 15,
    fontFamily: fontFamilies.InterRegular,
    textAlign: 'center',
    marginBottom: 20,
    letterSpacing: 0.2,
  },
  welcomeContainer: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  signGoogleButton: {
    backgroundColor: '#E2E2E2',
    width: '100%',
    height: 52,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
  },
  guestButton: {
    borderWidth: 1,
    borderColor: '#AF8781',
    width: '100%',
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  versionText: {
    textAlign: 'center',
    color: '#E2E2E2',
    fontSize: 12,
    fontFamily: fontFamilies.SoraRegular,
    marginBottom: 40,
    letterSpacing: 0.9,
  },
  signGoogleButtonText: {
    color: 'black',
    fontSize: 15,
    fontFamily: fontFamilies.SoraMedium,
    letterSpacing: 0.7,
  },
  guestButtonText: {
    color: '#E2E2E2',
    fontSize: 15,
    fontFamily: fontFamilies.SoraMedium,
    letterSpacing: 0.7,
  },
  googleIcon: {
    marginTop: 1,
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});
