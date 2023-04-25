import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'images'
})
export class ImagesPipe implements PipeTransform {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    transform(imageC?: any, imageCo?: any): string {
      if (imageC) {
        return `${imageC.thumbnail.path}.${imageC.thumbnail.extension}`;
      } else if (imageCo) {
        return `${imageCo.thumbnail.path}.${imageCo.thumbnail.extension}`;
      } else {
        return '';
      }
    }
  }


