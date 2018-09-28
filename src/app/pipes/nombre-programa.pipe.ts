import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nombrePrograma'
})
export class NombreProgramaPipe implements PipeTransform {

  transform(str: string): string
  {
    var x;
    switch (str)
    {
      case 'IFIS':
        x = 'Ingeniería Física';
        break;
      case 'ICIV':
        x = 'Ingeniería Civil';
        break;
      case 'BIOP':
        x = 'Biología';
        break;
      case 'QMCP':
        x = 'Química';
        break;
      case 'MATP':
        x = 'Matemática Pura';
        break;
      default:
        x = 'No Conocida';
        break;
    }
    return x;
  }

}
