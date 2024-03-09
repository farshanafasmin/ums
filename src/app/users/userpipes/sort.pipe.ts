import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(userArray:any[],sortData:string): any{

    if(!userArray || !sortData){
      return userArray
    }
    else{
      return userArray.sort((a:any,b:any)=>
        a.name.toLowerCase().localeCompare(b.name.toLowerCase())
      )
    }
   
  }

}
