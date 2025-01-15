# Clarity SDK PanResponder Issue Reproduction

This is a minimal reproduction of an issue where Microsoft Clarity SDK interferes with React Native's PanResponder, specifically breaking the `onPanResponderRelease` event during rapid gestures on iOS.

## Setup

1. Install dependencies:
```bash
yarn install
cd ios && pod install && cd ..
```

2. Run the app:
```bash
# iOS
yarn ios

# Android
yarn android
```

## Steps to Reproduce

1. Launch the app
2. Try to slide the slider quickly
3. Observe that `onPanResponderRelease` is not consistently called on iOS
4. Check the console logs to see which events are triggered

## Expected Behavior
- `onPanResponderRelease` should be called every time when the user releases their finger
- Gesture handling should work smoothly regardless of gesture speed

## Actual Behavior
- On iOS, `onPanResponderRelease` is sometimes not called when performing quick gestures
- The issue is more likely to occur during rapid gestures
- Works fine on Android

## Environment
- React Native: 0.76.6
- @microsoft/react-native-clarity: 4.1.0
- iOS Version: 17.x
- Device: iPhone (reproduced on multiple models)
