import * as React from 'react';
import { BaseIconProps } from './types';

interface EnterIconProps extends BaseIconProps {
  size?: '15';
  type?: 'normal';
}

export const EnterIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'normal',
  ...props
}: EnterIconProps) => {
  if (type === 'normal' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M5.5 1C5.22386 1 5 1.22386 5 1.5C5 1.77614 5.22386 2 5.5 2H13V13H5.5C5.22386 13 5 13.2239 5 13.5C5 13.7761 5.22386 14 5.5 14H13C13.5523 14 14 13.5523 14 13V2C14 1.44772 13.5523 1 13 1H5.5ZM7.60355 4.89645C7.40829 4.70118 7.09171 4.70118 6.89645 4.89645C6.70118 5.09171 6.70118 5.40829 6.89645 5.60355L8.29289 7H1.5C1.22386 7 1 7.22386 1 7.5C1 7.77614 1.22386 8 1.5 8H8.29289L6.89645 9.39645C6.70118 9.59171 6.70118 9.90829 6.89645 10.1036C7.09171 10.2988 7.40829 10.2988 7.60355 10.1036L9.85355 7.85355C10.0488 7.65829 10.0488 7.34171 9.85355 7.14645L7.60355 4.89645Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`EnterIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default EnterIcon;