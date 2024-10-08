import {
  Defs,
  LinearGradient,
  Path,
  Stop,
  Svg,
  SvgProps,
} from 'react-native-svg';

export function PokeballSmall({ style }: SvgProps) {
  return (
    <Svg
      width="130"
      height="115"
      viewBox="0 0 130 115"
      fill="none"
      style={style}
    >
      <Path
        d="M72.5 -15C109.809 -15 140.586 12.7646 145 48.6129H109.615C105.586 31.9761 90.4976 19.6129 72.5 19.6129C54.5024 19.6129 39.4139 31.9761 35.3849 48.6129H0C4.41443 12.7646 35.1905 -15 72.5 -15Z"
        fill="url(#paint0_linear_268_58)"
      />
      <Path
        d="M109.615 66.3871H145C140.586 102.235 109.809 130 72.5 130C35.1905 130 4.41443 102.235 0 66.3871H35.3849C39.4139 83.0239 54.5024 95.3871 72.5 95.3871C90.4976 95.3871 105.586 83.0239 109.615 66.3871Z"
        fill="url(#paint1_linear_268_58)"
      />
      <Path
        d="M72.5 81.3548C85.7734 81.3548 96.5336 70.6747 96.5336 57.5C96.5336 44.3253 85.7734 33.6452 72.5 33.6452C59.2266 33.6452 48.4664 44.3253 48.4664 57.5C48.4664 70.6747 59.2266 81.3548 72.5 81.3548Z"
        fill="url(#paint2_linear_268_58)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_268_58"
          x1="72.5"
          y1="-15"
          x2="72.5"
          y2="130"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="white" stopOpacity="0.3" />
          <Stop offset="1" stopColor="white" stopOpacity="0" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_268_58"
          x1="72.5"
          y1="-15"
          x2="72.5"
          y2="130"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="white" stopOpacity="0.3" />
          <Stop offset="1" stopColor="white" stopOpacity="0" />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear_268_58"
          x1="72.5"
          y1="-15"
          x2="72.5"
          y2="130"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="white" stopOpacity="0.3" />
          <Stop offset="1" stopColor="white" stopOpacity="0" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}
