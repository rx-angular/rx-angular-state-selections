import { Pipe, PipeTransform } from '@angular/core';
import {expensiveListTitle} from "./utils";

@Pipe({
  name: 'listTitle'
})
export class ListTitlePipe implements PipeTransform {

  transform(list: number | undefined, ...args: unknown[]): string {
    return expensiveListTitle(list);
  }

}
