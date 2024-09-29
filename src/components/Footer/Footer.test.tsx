/**
 * @vitest-environment jsdom
 */

import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, expect, test } from 'vitest';
import { Footer } from './Footer';

afterEach(() => {
  cleanup();
});

test('should render properly', () => {
  render(<Footer />);
  const disclaimer = screen.getByRole('paragraph');
  expect(disclaimer).toBeDefined();
});
