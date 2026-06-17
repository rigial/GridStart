import { StyleSheet } from 'react-native';
import fontFamilies from '../../constants/fontFamilies';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  headerTitle: {
    marginTop: 20,
    fontSize: 28,
    color: '#E2E2E2',
    fontFamily: fontFamilies.SoraBold,
    marginBottom: 16,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: 'black',
    borderRadius: 8,
    padding: 5,
    borderWidth: 1,
    borderColor: '#5E3F3A',
    marginBottom: 24,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 6,
  },
  activeTabButton: {
    backgroundColor: '#1F1F1F',
  },
  tabText: {
    color: '#8A8A93',
    fontWeight: '500',
    fontSize: 15,
    fontFamily: fontFamilies.JetBrainsMonoMedium,
  },
  activeTabText: {
    color: '#F5F5F7',
  },
  currentUserCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1F1F1F',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderWidth: 1.5,
    borderColor: '#D32F2F',
    marginBottom: 24,
    marginHorizontal: 8,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1F1F1F',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#22252D',
    marginBottom: 10,
  },
  rankText: {
    width: 25,
    marginRight: 10,
    color: '#E9BCB5',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: fontFamilies.JetBrainsMonoMedium,
  },
  currentUserRankText: {
    width: 40,
    color: '#C29B70',
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center',
    fontFamily: fontFamilies.JetBrainsMonoMedium,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: 16,
    backgroundColor: '#22252D',
    borderWidth: 1,
    borderColor: '#5E3F3A',
  },
  fallbackAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: 16,
    backgroundColor: '#262930',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#5E3F3A',
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  nameText: {
    color: '#F5F5F7',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.3,
    fontFamily: fontFamilies.InterMedium,
  },
  currentUserNameText: {
    color: '#F5F5F7',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.3,
    fontFamily: fontFamilies.InterMedium,
  },
  countryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  flagIcon: {
    marginRight: 4,
  },
  countryText: {
    color: '#E9BCB5',
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 0.8,
    fontFamily: fontFamilies.JetBrainsMonoMedium,
  },
  timeText: {
    color: '#C5C7CC',
    fontSize: 15,
    fontWeight: '500',
    fontFamily: fontFamilies.JetBrainsMonoBold,
  },
  currentUserTimeText: {
    color: '#D32F2F', // Bright bold red for current user's personal delta time
    fontSize: 15,
    fontWeight: '700',
    fontFamily: fontFamilies.JetBrainsMonoBold,
  },
  listContent: {
    paddingHorizontal: 8,
    paddingBottom: 24,
  },
});

export default styles;
