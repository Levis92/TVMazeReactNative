import {useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export function useColorStyle() {
  const isDarkMode = useIsDarkMode();

  const backgroundStyle = {
    status: {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    },
    background: {
      backgroundColor: isDarkMode ? Colors.black : Colors.white,
    },
    text: {
      color: isDarkMode ? Colors.white : Colors.black,
    },
  };

  return {backgroundStyle};
}

export function useIsDarkMode() {
  return useColorScheme() === 'dark';
}
