import axios from 'axios';

import type { RhymesResponse } from './interfaces';

const sleepRhymes = '/nursery-rhymes/sleep-rhymes.json';
const cheeryRhymes = '/nursery-rhymes/cheery-rhymes.json';

export const getAllSleepRhymes = async () => {
  const response = await axios.get<RhymesResponse>(sleepRhymes);
  return response.data;
};

export const getAllCheeryRhymes = async () => {
  const response = await axios.get<RhymesResponse>(cheeryRhymes);
  return response.data;
};
