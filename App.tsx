/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import Root from './src/Root';

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={'light-content'} hidden={true} animated={true} showHideTransition="fade" />
      <Root />
    </SafeAreaProvider>
  );
}

export default App;