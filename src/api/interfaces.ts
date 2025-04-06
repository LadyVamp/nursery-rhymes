export interface RhymesResponse {
  rhymes: Rhyme[];
}
export interface Rhyme {
  id: string;
  title: string;
  content: string;
  author?: string;
}
