import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'herosTypeColor'
})
export class herosTypeColorPipe implements PipeTransform {
  transform(type: string): string {
  
    let color: string;
  
    switch (type) {
      case 'feu':
        color = 'bg-danger';
        break;
      case 'eau':
        color = 'bg-info';
        break;
      case 'plante':
        color = 'bg-success';
        break;
      default:
        color = 'grey';
        break;
    }
  
    return 'badge rounded-pill  ' + color;
  
  }
}
