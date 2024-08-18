import { NavigationContainer } from '@react-navigation/native';
import { PropsWithChildren } from 'react';

export function Providers({ children }: PropsWithChildren) {
  return <NavigationContainer>{children}</NavigationContainer>;
}
