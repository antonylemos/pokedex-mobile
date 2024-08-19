import React from 'react';
import {
  Defs,
  LinearGradient,
  Path,
  Stop,
  Svg,
  SvgProps,
} from 'react-native-svg';

export function Pokeball({ style }: SvgProps) {
  return (
    <Svg
      width="414"
      height="207"
      viewBox="0 0 414 207"
      fill="none"
      style={style}
    >
      <Path
        d="M207 -207C313.525 -207 401.396 -127.727 414 -25.3742H312.97C301.466 -72.8752 258.386 -108.174 207 -108.174C155.614 -108.174 112.534 -72.8752 101.03 -25.3742H0C12.604 -127.727 100.475 -207 207 -207Z"
        fill="url(#paint0_linear_268_1)"
      />
      <Path
        d="M312.97 25.3742H414C401.396 127.727 313.525 207 207 207C100.475 207 12.604 127.727 0 25.3742H101.03C112.534 72.8751 155.614 108.174 207 108.174C258.386 108.174 301.466 72.8751 312.97 25.3742Z"
        fill="url(#paint1_linear_268_1)"
      />
      <Path
        d="M207 68.1096C244.898 68.1096 275.62 37.6159 275.62 0C275.62 -37.6159 244.898 -68.1097 207 -68.1097C169.102 -68.1097 138.38 -37.6159 138.38 0C138.38 37.6159 169.102 68.1096 207 68.1096Z"
        fill="url(#paint2_linear_268_1)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_268_1"
          x1="207"
          y1="0"
          x2="207"
          y2="185.5"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#F5F5F5" />
          <Stop offset="1" stopColor="white" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_268_1"
          x1="207"
          y1="0"
          x2="207"
          y2="185.5"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#F5F5F5" />
          <Stop offset="1" stopColor="white" />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear_268_1"
          x1="207"
          y1="0"
          x2="207"
          y2="185.5"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#F5F5F5" />
          <Stop offset="1" stopColor="white" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}
