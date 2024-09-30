/**
 * @vitest-environment jsdom
 */

import { cleanup, render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { afterEach, expect, test, vi } from 'vitest';
import { Card } from './Card';
import { characterMock } from '../../utils/mocks';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  RouterProvider,
  createRootRoute,
  createRouter,
} from '@tanstack/react-router';
import React from 'react';

const queryClient = new QueryClient();

export const rootRoute = createRootRoute({
  component: () => (
    <React.Fragment>
      <Card
        films={characterMock.films}
        id={characterMock._id}
        imgUrl={characterMock.imageUrl ?? ''}
        name={characterMock.name}
      />
    </React.Fragment>
  ),
});

export const routeTree = rootRoute.addChildren([]);
const router = createRouter({ routeTree });

const renderWithRouter = (component: React.ReactElement) => {
  return render(
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}>{component}</RouterProvider>
    </QueryClientProvider>
  );
};

test('should render properly', () => {
  renderWithRouter(
    <Card
      films={characterMock.films}
      id={characterMock._id}
      imgUrl={characterMock.imageUrl ?? ''}
      name={characterMock.name}
    />
  );
  screen.debug();
});
