import { PriceType } from "./DTOPriceType";

export interface Price {
  type?: PriceType;
  price?: number;
}
