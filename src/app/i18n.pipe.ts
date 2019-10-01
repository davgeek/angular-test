import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'itson'
})
export class I18nPipe implements PipeTransform {

  transform(value: any, valor: string): any {
    switch(valor) {
      case '00001':
        return `${value} Campus Centro`;
      case '00002':
        return 'Campus Nainari';
      case '00003':
        return 'Campus Guaymas';
      case '00004':
        return 'Campus Empalme';
      case '00005':
        return 'Campus Navojoa Centro';
      case '00006':
        return 'Campus Navojoa Sur';
      default:
        return 'N/A';
    }

    //return null;
  }

}
