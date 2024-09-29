/**
 * @vitest-environment jsdom
 */

import { cleanup, render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { afterEach, expect, test, vi } from 'vitest';
import { Button } from './Button';
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
