import { Result } from "./IResult";

export interface Data {
  offset?: number;
  limit?: number;
  total?: number;
  count?: number;
  results?: Result[];
}
