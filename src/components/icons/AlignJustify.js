import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgAlignJustify(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="align-justify_svg__feather align-justify_svg__feather-align-justify"
      {...props}>
      <Path d="M21 10H3M21 6H3M21 14H3M21 18H3" />
    </Svg>
  );
}

export default SvgAlignJustify;
