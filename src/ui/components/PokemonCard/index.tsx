import { View } from 'react-native';
import { useStyles } from 'react-native-unistyles';

import { Bullets } from '@/assets/patterns/Bullets';
import { PokeballSmall } from '@/assets/patterns/PokeballSmall';

import { Typography } from '../Typography';

import { stylesheet } from './styles';

export function PokemonCard({ id, name }: { id: number; name: string }) {
  const { styles, theme } = useStyles(stylesheet);

  function capitalizeFirstLetter(text: string): string {
    if (!text) return text;

    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  }

  return (
    <View style={styles.container}>
      <Bullets style={styles.bulletPattern} />

      <PokeballSmall style={styles.pokeballPattern} />

      <Typography size="sm" weight="bold" color={theme.colors.textNumber}>
        #{id.toString().padStart(3, '0')}
      </Typography>

      <Typography size="lg" weight="bold" color={theme.colors.textWhite}>
        {capitalizeFirstLetter(name)}
      </Typography>
    </View>
  );
}
