import React from 'react';
import { Pressable } from 'react-native';
import { useStyles } from 'react-native-unistyles';

import { Bullets, PokeballSmall } from '@/assets/patterns';
import {
  capitalizeFirstLetter,
  generatePokedexNumber,
} from '@/ui/styles/utils';

import { Typography } from '../Typography';

import { stylesheet } from './styles';

export function PokemonCard({
  id,
  name,
  action,
}: {
  id: number;
  name: string;
  action: () => void;
}) {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <Pressable style={styles.container} onPress={action}>
      <Bullets style={styles.bulletPattern} />

      <PokeballSmall style={styles.pokeballPattern} />

      <Typography size="sm" weight="bold" color={theme.colors.textNumber}>
        {generatePokedexNumber(id)}
      </Typography>

      <Typography size="lg" weight="bold" color={theme.colors.textWhite}>
        {capitalizeFirstLetter(name)}
      </Typography>
    </Pressable>
  );
}
