import { StoriesItem } from "./IStoriesItem";

export interface Stories {
  available?: number;
  collectionURI?: string;
  items?: StoriesItem[];
  returned?: number;
}
