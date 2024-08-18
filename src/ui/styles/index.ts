import { UnistylesRegistry } from 'react-native-unistyles';

import { light } from './themes';

type AppThemes = {
  light: typeof light;
};

declare module 'react-native-unistyles' {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface UnistylesThemes extends AppThemes {}
}

UnistylesRegistry.addThemes({
  light,
}).addConfig({
  initialTheme: 'light',
});
