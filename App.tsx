/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, Platform } from 'react-native';
import * as Clarity from '@microsoft/react-native-clarity';
import { Slider } from './src/components/Slider';
import { config } from './src/config';

function App(): JSX.Element {
  useEffect(() => {
    if (config.clarity.enabled) {
      // 初始化 Clarity
      Clarity.initialize(config.clarity.projectId, config.clarity.config);
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Clarity PanResponder Issue</Text>
      <Text style={styles.subtitle}>Platform: {Platform.OS}</Text>
      <Text style={styles.subtitle}>Clarity: {config.clarity.enabled ? 'Enabled' : 'Disabled'}</Text>
      <Text style={styles.description}>
        Try to slide quickly and observe if onPanResponderRelease is called consistently
      </Text>
      <Slider />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#666',
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 40,
    paddingHorizontal: 20,
    color: '#666',
  },
});

export default App;
