import * as path from 'path';
import {
  hasDir,
} from '../fs';
test('have bin in src', () => {
  expect(hasDir('bin', path.resolve(__dirname,'../../'))).toBe(true);
});
test('have bins in src', () => {
  expect(hasDir('bins', path.resolve(__dirname,'../../'))).toBe(false);
});
