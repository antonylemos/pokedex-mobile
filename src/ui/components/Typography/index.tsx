import { PropsWithChildren } from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';
import { useStyles } from 'react-native-unistyles';

import { ITypography } from './types';

export function Typography({
  children,
  type = 'text',
  size = 'md',
  weight = 'regular',
  color,
}: PropsWithChildren<ITypography>) {
  const { theme } = useStyles();

  const colorByType =
    type === 'title' ? theme.colors.textBlack : theme.colors.textGray;

  const typography: StyleProp<TextStyle> = {
    color: color || colorByType,
    ...theme.fonts.sizes[size],
    ...theme.fonts.families[weight],
  };

  return <Text style={typography}>{children}</Text>;
}
