import * as React from "react";
import Svg, { Defs, LinearGradient, Path, Stop } from "react-native-svg";
const HomeIconActive = (props: any) => (
  <Svg
    width={30}
    height={30}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M3.75 11.25L15 2.5L26.25 11.25V25C26.25 25.663 25.9866 26.2989 25.5178 26.7678C25.0489 27.2366 24.413 27.5 23.75 27.5H6.25C5.58696 27.5 4.95107 27.2366 4.48223 26.7678C4.01339 26.2989 3.75 25.663 3.75 25V11.25Z"
      stroke="url(#paint0_linear_7_23)"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11.25 27.5V15H18.75V27.5"
      stroke="url(#paint1_linear_7_23)"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_7_23"
        x1={26.25}
        y1={6.70981}
        x2={3.75}
        y2={23.2902}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFC812" />
        <Stop offset={1} stopColor="#FF4747" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_7_23"
        x1={18.75}
        y1={16.1903}
        x2={11.25}
        y2={26.3097}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFC812" />
        <Stop offset={1} stopColor="#FF4747" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default HomeIconActive;
