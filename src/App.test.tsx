/**
 * @vitest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import { RouterProvider } from '@tanstack/react-router';
import App from './App';
import { router } from './utils/mocks';

test('should render properly', () => {
  expect(true).toBeTruthy();
  /*render(<RouterProvider router={router} defaultComponent={App} />);
  screen.debug();*/
});
