import React from 'react';
import { Outlet, createRoute, createRootRoute } from '@tanstack/react-router';
//import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import App from './App';
import { Home } from './pages/Home/Home';
import { Details } from './pages/Details/Details';
import { Profile } from './pages/Profile/Profile';
import { EditProfile } from './pages/EditProfile/EditProfile';

export const rootRoute = createRootRoute({
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

const detailsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/details/$characterId',
  component: () => <Details />,
});

const profileRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/profile',
  component: () => <Profile />,
});

const editProfileRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/edit-profile',
  component: () => <EditProfile />,
});

export const routeTree = rootRoute.addChildren([
  indexRoute,
  detailsRoute,
  profileRoute,
  editProfileRoute,
]);
