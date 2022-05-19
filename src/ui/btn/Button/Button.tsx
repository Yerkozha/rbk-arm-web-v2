import { FC } from 'react';
import React from 'react';
import styled from 'styled-components';
import { ButtonProps, GeneralButtonProps } from './model';
import { Condition, Spinner, Text } from '../../index';

const GeneralButton = styled.button<GeneralButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.fullWidth ? '100%' : props.width)};
  padding: ${(props) => props.pd};
  border-radius: ${(props) => props.borderRadius};
  background-color: #3DBCCC;
  border: ${({ border }) => (!!border ? border : '1px solid transparent')};
  outline: none;
  cursor: pointer;

  

  
`;

const Button: FC<ButtonProps & GeneralButtonProps> = ({
  text,
  type,
  pd,
  color,
  fontSize,
  lineHeight,
  fontWeight,
  bgColor,
  border,
  borderRadius,
  width,
  fullWidth,
  tabIndex,
  variant,
  variantType,
  icon,
  loader,
  onClick,
  onEnter,
  disabled,
}) => (
  <GeneralButton
    type={type}
    pd={pd}
    bgColor={bgColor}
    border={border}
    borderRadius={borderRadius}
    width={width}
    fullWidth={fullWidth}
    tabIndex={tabIndex}
    variant={variant}
    variantType={variantType}
    onClick={() => (onClick != null ? onClick() : undefined)}
    onKeyPress={(e: { key: string }) => {
      if (e.key === 'Enter') {
        onEnter != null ? onEnter() : undefined;
      }
    }}
    disabled={disabled}
  >
    <Condition match={!loader}>
      <Condition match={icon}>{icon}</Condition>
      <Text
        fontSizes={fontSize}
        lineHeight={lineHeight}
        fontWeight={fontWeight}
        color={color}
      >
        {text}
      </Text>
    </Condition>
    <Condition match={loader}>
      <Spinner loading={!!loader} color={color} />
    </Condition>
  </GeneralButton>
);

Button.defaultProps = {
  type: 'button',
  variant: 'primary',
  pd: '12px',
  fontSize: '16px',
  lineHeight: '24px',
  fontWeight: 600,
  fontFamily: 'Open Sans',
  color: '#fff',
  fullWidth: true,
  border: '1px solid transparent',
  borderRadius: '4px',
  onClick: () => {
    return;
  },
  onEnter: () => {
    return;
  },
};

export default Button;
