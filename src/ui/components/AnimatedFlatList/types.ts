import { ReactElement } from 'react';
import {
  Animated,
  FlatListProps,
  LayoutChangeEvent,
  StyleProp,
  ViewStyle,
} from 'react-native';

export interface IAnimatedFlatListProps<T>
  extends Omit<FlatListProps<T>, 'ListHeaderComponent'> {
  HeaderComponent: ReactElement;
  StickyElementComponent: ReactElement;
}

export interface IAnimatedFlatListStyles {
  header: StyleProp<ViewStyle>;
  stickyElement: StyleProp<ViewStyle>;
}

export type UseAnimatedFlatList = [
  Animated.Value,
  IAnimatedFlatListStyles,
  (event: LayoutChangeEvent) => void,
  (event: LayoutChangeEvent) => void,
];
