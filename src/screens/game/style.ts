import { StyleSheet } from 'react-native';
import fontFamilies from '../../constants/fontFamilies';

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#161616',
  },
  contentContainer: { flexGrow: 1 },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    paddingBottom: 20,
    paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  headerTextLeft: {
    color: '#E9BCB5',
    fontFamily: fontFamilies.JetBrainsMonoMedium,
    fontSize: 12,
    letterSpacing: 1,
    opacity: 0.8,
  },
  headerTextRight: {
    color: '#E9BCB5',

    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
    opacity: 0.8,
  },
  lightsContainer: {
    backgroundColor: '#262626',
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 16,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#5E3F3A',
  },
  lightColumn: {
    backgroundColor: '#1A1A1A',
    borderRadius: 12,
    padding: 6,
    gap: 8,
  },
  lightCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#2A2A2A',
    borderWidth: 1,
    borderColor: '#5E3F3A',
  },
  timeContainer: {
    alignItems: 'center',
    marginVertical: 30,
  },
  timeLabel: {
    color: '#E9BCB5',
    fontSize: 12,
    fontFamily: fontFamilies.JetBrainsMonoMedium,
    letterSpacing: 2,
    marginBottom: 5,
  },
  timeValue: {
    color: '#E10600', // The distinct red/orange color from screenshot
    fontSize: 64,
    fontFamily: fontFamilies.SoraBold,
    textShadowColor: 'rgba(225, 6, 0, 0.4)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 30,
  },
  timeUnit: {
    color: '#FFB4A8',
    fontSize: 30,
    fontFamily: fontFamilies.SoraBold,
  },
  startButton: {
    backgroundColor: '#C93B2B',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
    paddingVertical: 20,
    marginBottom: 24,
    shadowColor: '#C93B2B',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  buttonIcon: {
    marginRight: 10,
  },
  startButtonText: {
    color: '#FFF2F0',
    fontSize: 22,
    fontFamily: fontFamilies.SoraBold,
    letterSpacing: 1,
  },
  pbCard: {
    backgroundColor: '#222121',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#5E3F3A',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  cardLabel: {
    color: '#AF8781',
    fontSize: 11,
    letterSpacing: 1.5,
    marginBottom: 6,
    fontFamily: fontFamilies.JetBrainsMonoBold,
    fontWeight: '700',
  },
  pbValue: {
    color: '#EAEAEA',
    fontSize: 28,
    fontFamily: fontFamilies.SoraBold,
  },
  bottomGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 14,
  },
  smallCard: {
    flex: 1,
    backgroundColor: '#222121',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#5E3F3A',
    padding: 20,
    minHeight: 100,
    justifyContent: 'center',
  },
  cardValueWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  smallCardValue: {
    color: '#EAEAEA',
    fontSize: 28,
    fontFamily: fontFamilies.SoraBold,
  },
});

export default styles;
