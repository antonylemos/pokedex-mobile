import { createStyleSheet } from 'react-native-unistyles';

export const stylesheet = createStyleSheet((theme, rt) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.backgroundWhite,
    padding: theme.spacings.xxlg,
    paddingTop: rt.insets.top,
    paddingBottom: rt.insets.bottom,
  },
  backgroundPattern: {
    position: 'absolute',
    alignSelf: 'center',
  },
  header: {
    marginTop: theme.spacings.xxlg + theme.spacings.xlg,
    gap: theme.spacings.sm,
  },
  title: {
    color: theme.colors.textBlack,
    ...theme.fonts.families.bold,
    ...theme.fonts.sizes.lg,
  },
  text: {
    color: theme.colors.textGray,
    ...theme.fonts.families.regular,
    ...theme.fonts.sizes.md,
  },
}));
