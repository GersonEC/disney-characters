/**
 * @vitest-environment jsdom
 */

import { cleanup, render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { afterEach, expect, test, vi } from 'vitest';
import { Card } from './Card';
import { characterMock, router } from '../../utils/mocks';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from '@tanstack/react-router';

const queryClient = new QueryClient();

/*
test('should render properly', () => {
  render(
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={}>
        <Card
          films={characterMock.films}
          id={characterMock._id}
          imgUrl={characterMock.imageUrl ?? ''}
          name={characterMock.name}
        />
      </RouterProvider>
    </QueryClientProvider>
  );
  screen.debug();
});
*/
