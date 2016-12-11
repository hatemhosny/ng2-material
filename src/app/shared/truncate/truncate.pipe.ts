import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, limit = 250, trail = '...'): string {
    if (value.length > limit) {
      return value.substring(0, limit) + trail;
    } else {
      return value;
    }
  }
}

