import React from 'react';
import {StatusBar} from 'react-native';
import {useColorStyle, useIsDarkMode} from '../styles';

export function AppStatusBar() {
  const {backgroundStyle} = useColorStyle();
  const isDarkMode = useIsDarkMode();
  return (
    <StatusBar
      barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      backgroundColor={backgroundStyle.status.backgroundColor}
    />
  );
}
