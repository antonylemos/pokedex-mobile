import { createStyleSheet } from 'react-native-unistyles';

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    padding: theme.spacings.lg,
    backgroundColor: '#EE1515',
    borderRadius: theme.spacings.sm,
    position: 'relative',
  },
  bulletPattern: {
    position: 'absolute',
    left: '30%',
    top: theme.spacings.xsm,
  },
  pokeballPattern: {
    position: 'absolute',
    right: -10,
    top: -10,
  },
}));
