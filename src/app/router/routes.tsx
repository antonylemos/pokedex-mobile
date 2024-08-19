import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ListPokemons } from '@/ui/modules/pokemons/screens';

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="list-pokemons" component={ListPokemons} />
    </Stack.Navigator>
  );
}
