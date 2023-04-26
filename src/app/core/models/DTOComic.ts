import { Price } from "./DTOPrice";

export interface Comic {
  id: number;
  title: string;
  description: string;
  prices: Price[];
  thumbnail: {
    path: string;
    extension: string;
  };
}
