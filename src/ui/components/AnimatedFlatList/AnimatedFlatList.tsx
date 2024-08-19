import { ReactElement } from 'react';
import { Animated, View } from 'react-native';

import { IAnimatedFlatListProps } from './types';
import { useAnimatedFlatList } from './useAnimatedFlatList';

export function AnimatedFlatList<T>({
  style,
  ...props
}: IAnimatedFlatListProps<T>): ReactElement {
  const [scrollY, styles, onLayoutHeaderElement, onLayoutStickyElement] =
    useAnimatedFlatList();

  return (
    <View style={style}>
      <Animated.View
        style={styles.stickyElement}
        onLayout={onLayoutStickyElement}
      >
        {props.StickyElementComponent}
      </Animated.View>

      <Animated.FlatList<any>
        {...props}
        ListHeaderComponent={
          <Animated.View onLayout={onLayoutHeaderElement}>
            {props.HeaderComponent}
          </Animated.View>
        }
        ListHeaderComponentStyle={[
          props.ListHeaderComponentStyle,
          styles.header,
        ]}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          {
            useNativeDriver: true,
          },
        )}
      />
    </View>
  );
}
