import { Comic } from "./DTOComic";

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
