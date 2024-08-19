import 'ts-node/register';
import { AppJSONConfig } from 'expo/config';

const config: AppJSONConfig = {
  expo: {
    name: 'pokedex-app',
    slug: 'pokedex-app',
    version: '1.0.0',
  },
  plugins: [
    'expo-font',
    {
      fonts: [
        './src/assets/fonts/Satoshi-Bold.otf',
        './src/assets/fonts/Satoshi-Medium.otf',
        './src/assets/fonts/Satoshi-Regular.otf',
      ],
    },
  ],
};

export default config;
