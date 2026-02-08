export const theme = {
  colors: {
    textPrimary: '#000',
    textPrimaryLight: '#FFF',
    textSecondary: '#666',
    textSecondaryLight: '#CCC',
    background: '#ffffff',
    online: '#37B86B',
    primary: '#FF006B',
  },
  breakpoints: {
    desktop: '1200px',
  },
};

export type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
