// @flow

import matchUserPreference from '@magica11y/match-user-preference';

import colorSchemes, { type ColorScheme } from './colorSchemes';

const colorSchemePreferenceValues: Array<ColorScheme> = [colorSchemes.DARK, colorSchemes.LIGHT];

/**
 * Detects user’s color scheme preferences
 * using CSS3 Media Queries level 5 specification for `'prefers-color-scheme'`.
 *
 * @returns Either 'dark', 'light' or `null`
 * @see https://drafts.csswg.org/mediaqueries-5/#prefers-color-scheme
 */
const prefersColorScheme = (): ?ColorScheme => {
  const preferredColorScheme: ?ColorScheme = colorSchemePreferenceValues.find(
    (colorSchemePreferenceValue: ColorScheme) =>
      matchUserPreference('prefers-color-scheme', colorSchemePreferenceValue),
  );

  if (preferredColorScheme) {
    return preferredColorScheme;
  }

  return null;
};

export default prefersColorScheme;
