import * as React from "react";
import Svg, { Defs, LinearGradient, Path, Stop } from "react-native-svg";
const BasketIconActive = (props: any) => (
  <Svg
    width={30}
    height={30}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M3.625 11.8571L5.835 24.6863C5.89813 25.0535 6.094 25.3871 6.38772 25.6277C6.68145 25.8683 7.05395 26.0002 7.43888 26H22.5611C22.9458 25.9998 23.3179 25.8677 23.6113 25.6272C23.9047 25.3866 24.1003 25.0532 24.1634 24.6863L26.375 11.8571M3.625 11.8571H8.5M3.625 11.8571H2M26.375 11.8571H21.5M26.375 11.8571H28M8.5 11.8571L10.125 4M8.5 11.8571H21.5M21.5 11.8571L19.875 4M10.125 18.1429V19.7143M19.875 18.1429V19.7143M15 18.1429V19.7143"
      stroke="url(#paint0_linear_7_1376)"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_7_1376"
        x1={28}
        y1={4.56253}
        x2={2}
        y2={25.4375}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFC812" />
        <Stop offset={1} stopColor="#FF4747" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default BasketIconActive;
