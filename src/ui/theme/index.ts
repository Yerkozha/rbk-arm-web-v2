import {
    ThemeBorderRadius,
    ThemeColors,
    ThemeFontSize,
    ThemeFontWeight,
  } from './types';

const borderRadius: ThemeBorderRadius = {
    xxs: '4px',
    xs: '8px',
    s: '10px',
    m: '16px',
    l: '20px',
    xl: '24px',
    r: '50%',
  };
  
  const colorList: ThemeColors = {
    brand: ['#16222C','#3DBCCC'], //bg
    element: ['#6F6F6F'], //el
    system: ['#CB1010', '#FCDDDD', '#369945', '#E3F5E6', '#F0BA21', '#FFF7DF'], //sys
    text: [''], //txt
    white: ['#fff'],
    extra: [
     '#8F9BB3'
    ],
  };
  
  const fontSize: ThemeFontSize = {
    xs: '10px',
    s: '12px',
    m: '14px',
    l: '16px',
    xl: '18px',
    xxl: '28px',
  };
  
  const fontWeight: ThemeFontWeight = {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    black: 900,
  };
  
  export const theme = {
    borderRadius,
    colorList,
    fontSize,
    fontWeight,
  };
  
  export default theme;