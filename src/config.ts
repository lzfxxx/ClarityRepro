import { Platform } from 'react-native';
import * as Clarity from '@microsoft/react-native-clarity';

const ENABLE_CLARITY = true;  // TODO: TOGGLE THIS TO ENABLE/DISABLE CLARITY

export const config = {
  clarity: {
    enabled: ENABLE_CLARITY,
    projectId: 'YOUR_PROJECT_ID',  // TODO: replace with your project id
    config: {
      logLevel: __DEV__ ? Clarity.LogLevel.Verbose : Clarity.LogLevel.None,
    },
  },
}; 