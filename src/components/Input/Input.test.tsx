/**
 * @vitest-environment jsdom
 */

import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, expect, test } from 'vitest';
import { Input } from './Input';

afterEach(() => {
  cleanup();
});

test('should render properly', () => {
  render(<Input id='first-name' name='First Name' placeholder='John' />);
  const textbox = screen.getByRole('textbox');
  const label = screen.getByText(/first name/i);
  expect(textbox).toBeDefined();
  expect(label).toBeDefined();
});

test('should render properly if it is required', async () => {
  render(
    <Input id='first-name' name='First Name' placeholder='John' required />
  );
  const label = screen.getByText('*');
  expect(label).toBeDefined();
});
