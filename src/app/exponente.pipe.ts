import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponente'
})
export class ExponentePipe implements PipeTransform {

  transform(value: number, factor?: number): any {
    if(!factor) factor = 1;
    return Math.pow(value, factor);
  }

}
