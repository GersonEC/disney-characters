import React from 'react';
import { Outlet, createRoute, createRootRoute } from '@tanstack/react-router';
//import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import App from './App';
import { SearchResults } from './pages/SearchResults';
import { Home } from './pages/Home/Home';
import { Details } from './pages/Details/Details';
import { Profile } from './pages/Profile/Profile';

const rootRoute = createRootRoute({
  component: () => (
    <React.Fragment>
      <App>
        <Outlet />
      </App>
      {/*<TanStackRouterDevtools />*/}
    </React.Fragment>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => <Home />,
});

const resultsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/results',
  component: () => <SearchResults />,
});

const detailsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/details',
  component: () => <Details />,
});

const profileRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/profile',
  component: () => <Profile />,
});

export const routeTree = rootRoute.addChildren([
  indexRoute,
  resultsRoute,
  detailsRoute,
  profileRoute,
]);
