import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slice'
})
export class SlicePipe implements PipeTransform {

  transform(value: any[], ...args: unknown[]): any[] {
    return value.slice(0, 3);
  }

}
