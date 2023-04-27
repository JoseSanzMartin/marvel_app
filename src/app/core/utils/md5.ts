import { Md5 } from "ts-md5";

export const hash = (formData: string) => {
  return Md5.hashStr(formData);
};
