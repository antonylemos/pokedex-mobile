import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Image, Pressable } from 'react-native';
import { useStyles } from 'react-native-unistyles';

import { useFavoritePokemonStore } from '@/app/stores';
import { Typography } from '@/ui/components';
import {
  capitalizeFirstLetter,
  generatePokedexNumber,
} from '@/ui/styles/utils';
import { generateBackgroundColorByType } from '@/ui/styles/utils/generateBackgroundColorByType';

import { useGetPokemonResumeQuery } from '../../api/client/useGetPokemonResumeQuery';

import { stylesheet } from './styles';

export function PokemonResume() {
  const { styles, theme } = useStyles(stylesheet);

  const route = useRoute();
  const params = route.params as { pokemonName: string };

  const { goBack } = useNavigation();

  const { data: pokemon, isLoading } = useGetPokemonResumeQuery({
    pokemonName: params.pokemonName,
  });

  const { favoritePokemon, isFavorite, unfavoritePokemon } =
    useFavoritePokemonStore();

  if (isLoading) {
    return <Typography>Carregando...</Typography>;
  }

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: generateBackgroundColorByType(
          pokemon.types[0].type.name,
        ),
      }}
    >
      <View style={styles.navigation}>
        <Pressable style={styles.backButton} onPress={goBack}>
          <Typography color={theme.colors.textWhite} size="md" weight="medium">
            Back
          </Typography>
        </Pressable>
      </View>

      <View style={styles.header}>
        <Image
          width={124}
          height={124}
          source={{
            uri: pokemon.sprite,
          }}
        />

        <View>
          <Typography color={theme.colors.textNumber} size="md" weight="bold">
            {generatePokedexNumber(pokemon.id)}
          </Typography>
          <Typography color={theme.colors.textWhite} size="xlg" weight="bold">
            {capitalizeFirstLetter(pokemon.name)}
          </Typography>
        </View>
      </View>

      <View style={styles.content}>
        <View>
          <Typography color={theme.colors.textWhite} size="lg" weight="medium">
            Species
          </Typography>

          {pokemon.species.map((specie) => (
            <Typography
              key={specie.name}
              color={theme.colors.textWhite}
              size="md"
            >
              {specie.name}
            </Typography>
          ))}
        </View>

        <View>
          <Typography color={theme.colors.textWhite} size="lg" weight="medium">
            Types
          </Typography>

          {pokemon.types.map((type) => (
            <Typography
              key={type.type.name}
              color={theme.colors.textWhite}
              size="md"
            >
              {type.type.name}
            </Typography>
          ))}
        </View>
      </View>

      <View style={styles.footer}>
        <Pressable
          style={styles.button}
          onPress={() =>
            isFavorite(pokemon.id)
              ? unfavoritePokemon(pokemon.id)
              : favoritePokemon(pokemon)
          }
        >
          <Typography color={theme.colors.textWhite} size="md" weight="medium">
            {isFavorite(pokemon.id) ? 'Unfavorite!' : 'Favorite!'}
          </Typography>
        </Pressable>
      </View>
    </View>
  );
}
