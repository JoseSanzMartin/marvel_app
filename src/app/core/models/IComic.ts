import { Price } from "./IPrice";

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
export interface ComicApiResponse {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;

  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Comic[];
  };
  etag: string;
}
