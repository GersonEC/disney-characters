/**
 * @vitest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import { test } from 'vitest';
import { Card } from './Card';
import { characterMock } from '../../utils/mocks';

/*import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  RouterProvider,
  createRootRoute,
  createRouter,
} from '@tanstack/react-router';

const queryClient = new QueryClient();

export const rootRoute = createRootRoute({
  component: () => <React.Fragment></React.Fragment>,
});

const router = createRouter({ routeTree: rootRoute });

const renderWithRouter = (component: React.ReactElement) => {
  return render(
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}>{component}</RouterProvider>
    </QueryClientProvider>
  );
};
*/
test('should render properly', () => {
  render(
    <Card
      films={characterMock.films}
      id={characterMock._id}
      imgUrl={characterMock.imageUrl ?? ''}
      name={characterMock.name}
    />
  );
  screen.debug();
});
