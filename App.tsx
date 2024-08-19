/* eslint-disable global-require */
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';

import { Providers } from '@/app/providers';
import { Routes } from '@/app/router/routes';

export default function App() {
  const [loaded, error] = useFonts({
    'Satoshi-Bold': require('./src/assets/fonts/Satoshi-Bold.otf'),
    'Satoshi-Medium': require('./src/assets/fonts/Satoshi-Medium.otf'),
    'Satoshi-Regular': require('./src/assets/fonts/Satoshi-Regular.otf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Providers>
      <StatusBar translucent animated />

      <Routes />
    </Providers>
  );
}
