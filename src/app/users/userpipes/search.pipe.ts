import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(DataArray: any[], searchString: string, searchKey: string): any {

    //  create an array for storing transformed data

    // const result: any = []

    if (!DataArray || !searchString || !searchKey) {

      return DataArray

    }
    else {
      // DataArray.forEach((item: any) => {
      //   if (item.name.trim().toLowerCase().includes(searchString.trim().toLowerCase())) {

      //     result.push(item)
      //   }
      // })
     return DataArray.filter((item:any)=>item.name.trim().toLowerCase().includes(searchString.trim().toLowerCase()))

    }

    // return result
  }

}
