import { useNavigation } from '@react-navigation/native';
import React, { useMemo } from 'react';
import { ActivityIndicator, TextInput, View } from 'react-native';
import { useStyles } from 'react-native-unistyles';

import { Pokeball } from '@/assets/patterns';
import {
  AnimatedFlatList,
  PokemonCard,
  Space,
  Typography,
} from '@/ui/components';

import { useGetPokemonsQuery } from '../../api/client/useGetPokemonsQuery';

import { stylesheet } from './styles';

export function ListPokemons() {
  const { styles } = useStyles(stylesheet);

  const navigation = useNavigation();

  const { data, hasNextPage, fetchNextPage, isLoading } = useGetPokemonsQuery();

  const flatData = useMemo(
    () => (data ? data?.pages.flatMap((item) => item.results) : []),
    [data],
  );

  return (
    <View style={styles.container}>
      <Pokeball style={styles.backgroundPattern} />

      <AnimatedFlatList
        data={flatData}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <PokemonCard
            name={item.name}
            id={index + 1}
            action={() =>
              navigation.navigate('pokemon-resume', {
                pokemonName: item.name,
              })
            }
          />
        )}
        onEndReached={() => hasNextPage && fetchNextPage()}
        ItemSeparatorComponent={Space}
        HeaderComponent={
          <View style={styles.header}>
            <Typography type="title" size="xlg" weight="bold">
              Pokédex
            </Typography>

            <Typography>
              Search for Pokémon by name or using the National Pokédex number.
            </Typography>
          </View>
        }
        StickyElementComponent={<TextInput />}
        ListFooterComponent={
          isLoading && (
            <View style={{ padding: 40 }}>
              <ActivityIndicator size="large" />
            </View>
          )
        }
      />
    </View>
  );
}
