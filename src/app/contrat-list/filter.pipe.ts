import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(contrats: any, searchTerm: string): any {
    if(!contrats || !searchTerm){
        return contrats;
    }
    return contrats.filter(contrat =>
      contrat.user.userFirstName.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  }


}
