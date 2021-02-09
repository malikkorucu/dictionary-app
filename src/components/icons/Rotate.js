import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgRotate(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={28}
      height={28}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="rotate_svg__feather rotate_svg__feather-rotate-ccw"
      {...props}>
      <Path d="M1 4v6h6" />
      <Path d="M3.51 15a9 9 0 102.13-9.36L1 10" />
    </Svg>
  );
}

export default SvgRotate;
