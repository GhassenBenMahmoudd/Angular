import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pointageFilter'
})
export class PointageFilterPipe implements PipeTransform {

  transform(pointages: any, searchTerm: string): any {
    if(!pointages || !searchTerm){
        return pointages;
    }
    return pointages.filter(pointage =>
      pointage.user.userFirstName.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  }

}
