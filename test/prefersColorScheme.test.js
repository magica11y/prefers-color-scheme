// @flow

import mockWindowMatchMedia from '@magica11y/match-user-preference/lib/testing/mockWindowMatchMedia';

import prefersColorScheme, { colorSchemes } from '../src';

describe('prefersColorScheme()', () => {
  afterEach(() => {
    window.matchMedia.mockClear();
  });

  it.each`
    testInput             | expectedOutput
    ${colorSchemes.DARK}  | ${'dark'}
    ${colorSchemes.LIGHT} | ${'light'}
  `(
    'returns "$expectedOutput" when color scheme preference media-query matches "$testInput"',
    ({ testInput, expectedOutput }) => {
      window.matchMedia = jest
        .fn()
        .mockImplementation(() => mockWindowMatchMedia(true, `(prefers-color-scheme: ${testInput})`));

      const preferredColorScheme = prefersColorScheme();

      expect(preferredColorScheme).toEqual(expectedOutput);
    },
  );

  it('returns "null" when preference cannot be determined', () => {
    window.matchMedia = jest.fn().mockImplementation(() => mockWindowMatchMedia(false, 'not all'));

    const preferredColorScheme = prefersColorScheme();

    expect(preferredColorScheme).toEqual(null);
  });
});
