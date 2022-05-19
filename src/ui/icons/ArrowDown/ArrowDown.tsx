import { FC } from 'react';
import React from 'react';
import { theme } from '../../index';
import { Icon, IconProps } from '../Icon';

export type ArrowDownProps = IconProps;

const ArrowDown: FC<ArrowDownProps> = ({
  originalWidth,
  originalHeight,
  color,
  ...props
}) => (
  <Icon
    originalHeight={originalHeight}
    originalWidth={originalWidth}
    fill="none"
    viewBox='0 0 24 24'
    {...props}
  >
    <path d="M12 15.5C11.8684 15.5008 11.7379 15.4755 11.6161 15.4258C11.4943 15.376 11.3834 15.3027 11.29 15.21L7.29 11.21C7.19676 11.1168 7.1228 11.0061 7.07234 10.8843C7.02188 10.7624 6.99591 10.6319 6.99591 10.5C6.99591 10.3681 7.02188 10.2376 7.07234 10.1158C7.1228 9.99393 7.19676 9.88324 7.29 9.79C7.38324 9.69676 7.49393 9.6228 7.61575 9.57234C7.73758 9.52188 7.86814 9.49591 8 9.49591C8.13186 9.49591 8.26243 9.52188 8.38425 9.57234C8.50607 9.6228 8.61676 9.69676 8.71 9.79L12 13.1L15.3 9.92C15.392 9.81771 15.5041 9.7355 15.6293 9.67852C15.7545 9.62153 15.8902 9.59099 16.0277 9.58881C16.1653 9.58664 16.3018 9.61286 16.4287 9.66585C16.5557 9.71884 16.6703 9.79746 16.7655 9.89678C16.8607 9.99611 16.9344 10.114 16.9819 10.2431C17.0295 10.3722 17.0499 10.5097 17.0418 10.647C17.0338 10.7844 16.9975 10.9186 16.9353 11.0413C16.873 11.1639 16.7861 11.2724 16.68 11.36L12.68 15.22C12.4971 15.3963 12.254 15.4964 12 15.5Z" 
      fill={color}
    />
  </Icon>
);

ArrowDown.defaultProps = {
  width: 24,
  height: 24,
  color: theme.colorList.extra[0],
};

export default ArrowDown;
