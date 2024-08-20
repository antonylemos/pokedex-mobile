import { createStyleSheet } from 'react-native-unistyles';

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    paddingVertical: theme.spacings.xxlg + theme.spacings.lg,
  },
  navigation: {
    alignItems: 'flex-start',
    paddingHorizontal: theme.spacings.xxlg,
    marginBottom: theme.spacings.md,
  },
  backButton: {
    padding: theme.spacings.sm,
    borderRadius: theme.spacings.xsm,
    alignItems: 'center',
    backgroundColor: '#EE1515',
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
  footer: {
    marginTop: theme.spacings.xxlg,
    alignItems: 'center',
    padding: theme.spacings.xxlg,
  },
  button: {
    width: '100%',
    padding: theme.spacings.md,
    borderRadius: theme.spacings.sm,
    alignItems: 'center',
    backgroundColor: '#EE1515',
  },
}));
