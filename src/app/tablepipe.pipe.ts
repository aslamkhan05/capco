import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tablepipe'
})
export class TablepipePipe implements PipeTransform {

  transform(value: any, searchTerm: any): any {

  let fields = []
    return value.filter(function(search){
      return search.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
    })
  }

}
