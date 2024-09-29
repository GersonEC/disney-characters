/**
 * @vitest-environment jsdom
 */

import { render } from '@testing-library/react';
import { expect, test } from 'vitest';
import App from './App';

test('should render properly', () => {
  render(<App children={<></>} />);
  expect(true).toBeTruthy();
});
