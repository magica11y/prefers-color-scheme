// @flow

import mockWindowMatchMedia from '@magica11y/match-user-preference/lib/testing/mockWindowMatchMedia';

import prefersColorScheme, { colorSchemes, type ColorScheme } from '../src';

describe('prefersColorScheme()', () => {
  it('returns a color scheme preference when media-query matches', () => {
    type TestParameter = {|
      testInput: ColorScheme,
      expectedOutput: ColorScheme,
    |};

    const testParameters: Array<TestParameter> = [
      {
        testInput: colorSchemes.DARK,
        expectedOutput: 'dark',
      },
      {
        testInput: colorSchemes.LIGHT,
        expectedOutput: 'light',
      }
    ];

    testParameters.forEach((testParameter: TestParameter) => {
      window.matchMedia = jest
        .fn()
        .mockImplementation(() => mockWindowMatchMedia(true, `(prefers-color-scheme: ${testParameter.testInput})`));

      const preferredColorScheme = prefersColorScheme();

      expect(preferredColorScheme).toEqual(testParameter.expectedOutput);

      window.matchMedia.mockClear();
    });
  });

  it('returns "null" when preference cannot be determined', () => {
    window.matchMedia = jest.fn().mockImplementation(() => mockWindowMatchMedia(false, 'not all'));

    const preferredColorScheme = prefersColorScheme();

    expect(preferredColorScheme).toEqual(null);
  });
});
