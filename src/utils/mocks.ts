import { createRouter, createRootRoute } from '@tanstack/react-router';

const rootRoute = createRootRoute();
export const router = createRouter({
  routeTree: rootRoute,
});

export const stateOptions = ['CA', 'SF', 'NY', 'TX'];
export const disneylandOptions = [
  'Disney World, Florida',
  'Disneyland Paris',
  'Hong Kong Disneyland',
  'Disneyland Park',
  'Tokio Disneyland',
  'Shanghai Disneyland',
];
