import { createRouter, createRootRoute } from '@tanstack/react-router';
import { Character } from '../hooks/useGetCharacter';

const rootRoute = createRootRoute();
rootRoute.addChildren([]);
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

export const characterMock: Character = {
  _id: 308,
  films: ['Tangled', 'Tangled: Before Ever After'],
  shortFilms: ['Tangled Ever After', 'Hare Peace'],
  tvShows: ['Once Upon a Time', 'Tangled: The Series'],
  videoGames: [
    'Disney Princess Enchanting Storybooks',
    'Hidden Worlds',
    'Disney Crossy Road',
    'Kingdom Hearts III',
  ],
  parkAttractions: ['Celebrate the Magic', 'Jingle Bell, Jingle BAM!'],
  allies: [],
  enemies: [],
  sourceUrl: 'https://disney.fandom.com/wiki/Queen_Arianna',
  name: 'Queen Arianna',
  imageUrl:
    'https://static.wikia.nocookie.net/disney/images/1/15/Arianna_Tangled.jpg',
  url: 'https://api.disneyapi.dev/characters/308',
};
