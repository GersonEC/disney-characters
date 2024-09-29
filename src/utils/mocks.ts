import { createRouter, createRootRoute } from '@tanstack/react-router';

const rootRoute = createRootRoute();
export const router = createRouter({
  routeTree: rootRoute,
});

export const stateOptions = ['CA', 'SF', 'NY', 'TX'];
