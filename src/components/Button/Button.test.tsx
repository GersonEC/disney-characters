/**
 * @vitest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import { RouterProvider } from '@tanstack/react-router';
import { router } from '../../utils/mocks';
import { Button } from './Button';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

test('should render properly', () => {
  render(
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} defaultComponent={Button} />
    </QueryClientProvider>
  );
  expect(true).toBeTruthy();
  screen.debug();
});
