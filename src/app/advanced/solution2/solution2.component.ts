import {Component, TrackByFunction} from '@angular/core';
import {ProductsState} from "../../shared/products/product.state";
import {RxState, selectSlice} from "@rx-angular/state";
import {ProductEntity} from "../../shared/products/product.entity";
import {distinctUntilChanged, filter, map, Observable} from "rxjs";
import {expensiveListTitle, expensiveProductSort} from "../utils";

interface ComponentModel {
  sortAsc: boolean;
  list: ProductEntity[];
}

type SortDirections = '👆' | '👇';
interface ComponentViewModel {
  title: string;
  sortDirection: SortDirections;
  list: ProductEntity[];
}
@Component({
  selector: 'app-advanced-solution2',
  template: `
    <h1>{{title$ | async}}</h1>
    <button (click)="toggleSort()">Sort {{sortDirection$ | async}}</button>
    <ul>
      <li *ngFor="let product of sortedList$ | async; trackBy:trackById">{{product.name + " - " + product.value}}</li>
    </ul>
    <app-work></app-work>
  `,
  providers: [
    RxState
  ]
})
export class Solution2Component {

  title$: Observable<string> = this.componentState.select(
    filter(({list}) => !!list),
    distinctUntilChanged((a, b) => a.list.length != b.list.length),
    map(({list}) => expensiveListTitle(list?.length))
  );

  sortedList$: Observable<ProductEntity[]> = this.componentState.select(
    selectSlice(['list', 'sortAsc']),
    map(({list, sortAsc}) => expensiveProductSort(list, sortAsc))
  );

  sortDirection$: Observable<string> = this.componentState.select(
    selectSlice(['sortAsc']),
    map(({sortAsc}) => sortAsc ? '👆' : '👇')
  );

  constructor(
    private globalProductState: ProductsState,
    private componentState: RxState<ComponentModel>,
  ) {
    this.componentState.set({sortAsc: true});
    this.componentState.connect('list', this.globalProductState.products$);
  }

  toggleSort() {
    this.componentState.set('sortAsc', ({sortAsc}) => !sortAsc);
  }

  trackById: TrackByFunction<ProductEntity> = (idx: number, e: ProductEntity) => e.id;

}
