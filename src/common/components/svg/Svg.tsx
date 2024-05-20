// React
import { forwardRef } from 'react';

// CSS
import SvgCSS from './Svg.module.scss';

// Types
import { SvgProps } from './Svg.types';

const Svg = forwardRef<SVGSVGElement, SvgProps>(
  (
    { width, height, viewBox, path, color, fillRule, clipRule, stroke, strokeWidth, strokeLinejoin, strokeLinecap, additionalClasses }: SvgProps,
    ref,
  ) => {
    return (
      <svg
        ref={ref}
        className={`${SvgCSS.svg} ${additionalClasses ? additionalClasses : ''}`}
        width={width}
        height={height}
        viewBox={viewBox}
        fill="none"
      >
        <path
          className={color && SvgCSS[color]}
          fillRule={fillRule}
          clipRule={clipRule}
          d={path}
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeLinejoin={strokeLinejoin}
          strokeLinecap={strokeLinecap}
        />
      </svg>
    );
  },
);

export default Svg;
