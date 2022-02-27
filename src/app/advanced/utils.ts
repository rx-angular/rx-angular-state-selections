import {ProductEntity} from "../shared/products/product.entity";
import {work} from "../shared/work/work";

export function expensiveProductSort(list: ProductEntity[] = [], asc: boolean): ProductEntity[] {
  console.log('expensiveProductSort called');
  work();
  return Array.from(list.sort((a, b) => asc ? (a.value - b.value) : (b.value - a.value)));
}

export function expensiveListTitle(numItems: number = 0): string {
  console.log('expensiveListTitle called');
  work();
  return `Here ${numItems <= 0 ? 'is no' : 'are ' + numItems} list item ${(numItems !== 1 && numItems !== 0) ? "'s" : ''}`;
}
