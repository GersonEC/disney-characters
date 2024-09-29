/**
 * @vitest-environment jsdom
 */

import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, expect, test } from 'vitest';
import { Error } from './Error';

afterEach(() => {
  cleanup();
});

test('should render properly', () => {
  render(<Error />);
  const text = screen.getByText(
    /Sorry, something went wrong. Please, reload the browser./i
  );
  const errorImage = screen.getByRole('img');
  expect(text).toBeDefined();
  expect(errorImage).toBeDefined();
});
