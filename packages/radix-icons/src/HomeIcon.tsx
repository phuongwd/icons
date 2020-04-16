import * as React from 'react';
import { BaseIconProps } from './types';

interface HomeIconProps extends BaseIconProps {
  size?: '15';
  type?: 'normal';
}

export const HomeIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'normal',
  ...props
}: HomeIconProps) => {
  if (type === 'normal' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M7.07574 1.07576C7.31005 0.841446 7.68995 0.841446 7.92427 1.07576L14.6743 7.82576C14.9086 8.06007 14.9086 8.43997 14.6743 8.67429C14.44 8.9086 14.0601 8.9086 13.8257 8.67429L13 7.84855V13.5C13 13.7762 12.7761 14 12.5 14H2.5C2.22386 14 2 13.7762 2 13.5V7.84855L1.17427 8.67429C0.939951 8.9086 0.560052 8.9086 0.325737 8.67429C0.0914229 8.43997 0.0914229 8.06007 0.325737 7.82576L7.07574 1.07576ZM7.5 2.34855L12 6.84855V13H10V9.5C10 9.22386 9.77614 9 9.5 9H6.5C6.22386 9 6 9.22386 6 9.5V13H3V6.84855L7.5 2.34855ZM7 13H9V10H7V13Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`HomeIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default HomeIcon;
