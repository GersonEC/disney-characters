import { z } from 'zod';

export const CharacterSchema = {
  allies: z.string().array(),
  enemies: z.string().array(),
  _id: z.number(),
  imageUrl: z.string().optional(),
  films: z.string().array(),
  name: z.string(),
  parkAttractions: z.string().array(),
  shortFilms: z.string().array(),
  sourceUrl: z.string(),
  tvShows: z.string().array(),
  videoGames: z.string().array(),
  url: z.string(),
};
