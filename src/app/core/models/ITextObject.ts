import { Language } from "./ELanguage";
import { TextObjectType } from "./ITextObjectType";

export interface TextObject {
  type?: TextObjectType;
  language?: Language;
  text?: string;
}
