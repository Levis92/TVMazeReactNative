import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, AppState, Platform} from 'react-native';
import type {AppStateStatus} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  QueryClient,
  QueryClientProvider,
  focusManager,
} from '@tanstack/react-query';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './screens/HomeScreen';
import {useColorStyle} from './styles/color';
import {ShowScreen} from './screens/ShowScreen';
import {RootStackParamList} from './models/navigation';
import {AppStatusBar} from './components/AppStatusBar';
import NetInfo from '@react-native-community/netinfo';
import {onlineManager} from '@tanstack/react-query';

onlineManager.setEventListener(setOnline => {
  return NetInfo.addEventListener(state => {
    setOnline(!!state.isConnected);
  });
});

function onAppStateChange(status: AppStateStatus) {
  if (Platform.OS !== 'web') {
    focusManager.setFocused(status === 'active');
  }
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const queryClient = new QueryClient();

function App(): JSX.Element {
  const {backgroundStyle} = useColorStyle();

  useEffect(() => {
    const subscription = AppState.addEventListener('change', onAppStateChange);

    return () => subscription.remove();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={{...backgroundStyle.status, ...styles.safeView}}>
        <AppStatusBar />
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{headerStyle: {backgroundColor: 'transparent'}}}>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{title: 'Home - TV Maze'}}
            />
            <Stack.Screen
              name="Show"
              component={ShowScreen}
              options={{title: 'Show - TV Maze'}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
  },
});

export default App;
