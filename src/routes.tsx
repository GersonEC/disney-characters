import React from 'react';
import { Outlet, createRoute, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import App from './App';
import { SearchResults } from './pages/SearchResults';
import { Home } from './pages/Home';

const rootRoute = createRootRoute({
  component: () => (
    <React.Fragment>
      <App>
        <Outlet />
      </App>
      <TanStackRouterDevtools />
    </React.Fragment>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => <Home />,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/results',
  component: () => <SearchResults />,
});

export const routeTree = rootRoute.addChildren([indexRoute, aboutRoute]);
