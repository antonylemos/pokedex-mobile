import { useRef, useState } from 'react';
import { Animated, Dimensions, LayoutChangeEvent } from 'react-native';

import { IAnimatedFlatListStyles, UseAnimatedFlatList } from './types';

const window = Dimensions.get('window');

export function useAnimatedFlatList(): UseAnimatedFlatList {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [heights, setHeights] = useState({
    header: 0,
    sticky: 0,
  });

  const styles: IAnimatedFlatListStyles = {
    header: {
      marginBottom: heights.sticky,
    },
    stickyElement: {
      left: 0,
      marginTop: heights.header,
      position: 'absolute',
      right: 0,
      transform: [
        {
          translateY: scrollY.interpolate({
            extrapolate: 'clamp',
            inputRange: [-window.height, heights.header],
            outputRange: [window.height, -heights.header],
          }),
        },
      ],
      zIndex: 1,
    },
  };

  const onLayoutHeaderElement = (event: LayoutChangeEvent): void => {
    setHeights({ ...heights, header: event.nativeEvent.layout.height });
  };

  const onLayoutTopStickyElement = (event: LayoutChangeEvent): void => {
    setHeights({ ...heights, sticky: event.nativeEvent.layout.height });
  };

  return [scrollY, styles, onLayoutHeaderElement, onLayoutTopStickyElement];
}
