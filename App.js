/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import ScreenNavigator from './src/utils/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App = () => {

  return (
      <SafeAreaProvider>
        <NavigationContainer> 
          <ScreenNavigator/>
        </NavigationContainer>
      </SafeAreaProvider>
      
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
