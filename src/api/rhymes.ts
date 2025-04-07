import axios from 'axios';

import type { RhymesResponse } from './interfaces';

const rhymes = '/nursery-rhymes/sleep-rhymes.json';

export const getAllSleepRhymes = async () => {
  const response = await axios.get<RhymesResponse>(rhymes);
  return response.data;
};
