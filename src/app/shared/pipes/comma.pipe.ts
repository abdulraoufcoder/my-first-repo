import { DecimalPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'comma'
})
export class CommaPipe implements PipeTransform {

  constructor(private decimalPipe: DecimalPipe){}

  transform(value: string): any {
    // Use Angular's DecimalPipe to format the number with commas
    // const val = this.decimalPipe.transform(value)

    return value.length
  }
}

