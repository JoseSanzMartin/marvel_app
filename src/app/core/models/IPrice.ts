import { PriceType } from "./IPriceType";

export interface Price {
  type?: PriceType;
  price?: number;
}
