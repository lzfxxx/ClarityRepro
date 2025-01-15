import React, { useRef, useState } from 'react';
import {
  View,
  PanResponder,
  StyleSheet,
  Text,
  Dimensions,
} from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const SLIDER_WIDTH = SCREEN_WIDTH - 40;

export const Slider = () => {
  const [value, setValue] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const prevValue = useRef(0);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      setIsDragging(true);
      console.log('Start dragging');
    },
    onPanResponderMove: (_, gestureState) => {
      const newValue = Math.max(0, Math.min(100, (gestureState.moveX / SLIDER_WIDTH) * 100));
      if (newValue !== prevValue.current) {
        prevValue.current = newValue;
        setValue(newValue);
      }
      console.log('Moving:', newValue);
    },
    onPanResponderRelease: () => {
      setIsDragging(false);
      console.log('Released!');
    },
    onPanResponderTerminate: () => {
      setIsDragging(false);
      console.log('Terminated!');
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.value}>{Math.round(value)}%</Text>
      <View style={styles.sliderContainer} {...panResponder.panHandlers}>
        <View style={[styles.progress, { width: `${value}%` }]} />
        <View 
          style={[
            styles.thumb,
            { left: `${value}%` },
            isDragging && styles.dragging
          ]} 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  value: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  sliderContainer: {
    height: 40,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    justifyContent: 'center',
  },
  progress: {
    height: 40,
    backgroundColor: '#007AFF',
    borderRadius: 20,
    position: 'absolute',
  },
  thumb: {
    width: 40,
    height: 40,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#007AFF',
    position: 'absolute',
    transform: [{ translateX: -20 }],
  },
  dragging: {
    transform: [{ translateX: -20 }, { scale: 1.1 }],
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
}); 