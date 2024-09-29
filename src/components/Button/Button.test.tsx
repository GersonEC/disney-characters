/**
 * @vitest-environment jsdom
 */

import { cleanup, render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { afterEach, expect, test, vi } from 'vitest';
import { Button } from './Button';

afterEach(() => {
  cleanup();
});

test('should render properly', () => {
  render(<Button variant='primary'>This is a button</Button>);
  const buttonText = screen.getByRole('button', { name: /this is a button/i });
  expect(buttonText).toBeDefined();
});

test('should trigger a call when click', async () => {
  const fn = vi.fn();
  const user = userEvent.setup();
  render(
    <Button variant='primary' onClick={() => fn()}>
      This is a button
    </Button>
  );
  const button = screen.getByRole('button', { name: /this is a button/i });
  await user.click(button);
  expect(fn).toHaveBeenCalled();
  expect(fn).toHaveBeenCalledTimes(1);
});
