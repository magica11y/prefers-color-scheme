// @flow

const colorSchemes: {|
  DARK: string,
  LIGHT: string,
|} = Object.freeze({
  DARK: 'dark',
  LIGHT: 'light',
});

export type ColorScheme = $Values<typeof colorSchemes>;

export default colorSchemes;
