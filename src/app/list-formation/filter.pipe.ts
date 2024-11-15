import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(formations: any, searchTerm: string): any {
    if(!formations || !searchTerm){
        return formations;
    }
    return formations.filter(formation =>
      formation.libelle.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  }


}
