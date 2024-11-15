import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'itemFilter'
})
export class ItemFilterPipe implements PipeTransform {

  transform(employees: any, searchTerm: string): any {
    if(!employees || !searchTerm){
        return employees;
    }
    return employees.filter(employee =>
        employee.userFirstName.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  }

}
