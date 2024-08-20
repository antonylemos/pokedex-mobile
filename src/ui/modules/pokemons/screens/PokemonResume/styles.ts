import { createStyleSheet } from 'react-native-unistyles';

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    paddingVertical: theme.spacings.xxlg + theme.spacings.lg,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacings.md,
  },
  content: {
    marginTop: theme.spacings.xxlg,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: theme.spacings.xxlg,
  },
}));
