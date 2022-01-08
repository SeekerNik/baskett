import { Pipe, PipeTransform } from '@angular/core';
import data from '../assets/data.json';
@Pipe({
  name: 'searchProducts',
})
export class SearchProductsPipe implements PipeTransform {
  transform(data: any, searchData: string): any[] {
    if (!searchData) {
      return data;
    }
    return data.filter((product: any) => product['p_category'] == searchData);
  }
}
