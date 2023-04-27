import { Pipe, PipeTransform } from "@angular/core";

type AllowedProperties = "title" | "name" | "description";

@Pipe({
  name: "textDetail",
})
export class TextPipe implements PipeTransform {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  transform(value: any | null, property: AllowedProperties): string | null {
    if (value) {
      return value[property];
    }
    return value;
  }
}
