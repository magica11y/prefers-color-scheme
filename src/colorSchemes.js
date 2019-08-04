// @flow

const colorSchemes: {|
  NO_PREFERENCE: string,
  DARK: string,
  LIGHT: string,
|} = Object.freeze({
  NO_PREFERENCE: 'no-preference',
  DARK: 'dark',
  LIGHT: 'light',
});

export type ColorScheme = $Values<typeof colorSchemes>;

export default colorSchemes;
