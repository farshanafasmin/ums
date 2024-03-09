import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allUserAray: any[], filterStatus: string): any {

    // const result: any = []

    if (!allUserAray || !filterStatus) {
      return allUserAray
    }
    else {
      // allUserAray.forEach((item: any) => {
      //   if (item.status == filterStatus) {
      //     result.push(item)
      //   }
      // })
      // return result

      return allUserAray.filter((item:any)=>item.status==filterStatus)
    }
  }

}
