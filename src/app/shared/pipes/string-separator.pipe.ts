import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringSeparator'
})
export class StringSeparatorPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    
    const arr = value.split('_');
    const val = arr.join(' ');

    return val;
  }

}
