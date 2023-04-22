import { CreatorsItem } from "./ICreatorsItem";

export interface Creators {
  available?: number;
  collectionURI?: string;
  items?: CreatorsItem[];
  returned?: number;
}
