import { Data } from "./IData";

export interface Welcome {
  code?: number;
  status?: string;
  copyright?: string;
  attributionText?: string;
  attributionHTML?: string;
  etag?: string;
  data?: Data;
}
