import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(value:any,searchTerm:any) {
    if(!value) return null
    if(!searchTerm)return value
    searchTerm = searchTerm.toLowerCase();

   return value.filter((item:any)=>{ return JSON.stringify(item).toLowerCase().includes(searchTerm)})
 //return value.filter((search:any)=>{return search.title.indexOf(searchTerm) > -1});
}

}
