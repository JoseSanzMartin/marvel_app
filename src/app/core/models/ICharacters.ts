import { Series } from "./ISeries";

export interface Characters {
  available?: number;
  collectionURI?: string;
  items?: Series[];
  returned?: number;
}
