import { colors } from '../tokens/colors';

import { base } from './base';

export const light = {
  ...base,
  colors: colors.light,
} as const;
