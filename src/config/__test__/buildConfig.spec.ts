import {getCustomConfig, mergeConfig} from '../buildConfig';

test('object assignment', () => {
  expect(mergeConfig({}, {})).toEqual({});
});

test('object assignment', () => {
  expect(getCustomConfig('./.')).toEqual({});
});
