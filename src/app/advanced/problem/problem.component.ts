import {Component, TrackByFunction} from '@angular/core';
import {ProductsState} from "../../shared/products/product.state";
import {RxState, selectSlice} from "@rx-angular/state";
import {ProductEntity} from "../../shared/products/product.entity";
import {combineLatest, distinctUntilChanged, filter, map, Observable} from "rxjs";
import {expensiveListTitle, expensiveProductSort} from "../utils";

interface ComponentModel {
  sortAsc: boolean;
  list: ProductEntity[]
}

type SortDirections = '👆' | '👇';
interface ComponentViewModel {
  title: string;
  sortDirection: SortDirections;
  list: ProductEntity[];
}

@Component({
  selector: 'app-advanced-problem',
  template: `
    <ng-container *rxLet="vm$; let vm">
      <h1>{{vm.title}}</h1>
      <button (click)="toggleSort()">
        Sort {{vm.sortDirection}}
      </button>
      <ul>
        <li *ngFor="let product of vm.list; trackBy:trackById">{{product.name + " - " + product.value}}</li>
      </ul>
      <app-work></app-work>
    </ng-container>
  `,
  providers: [
    RxState
  ]
})
export class ProblemComponent {

  title$: Observable<string> = this.componentState.select(
    filter(s => !!s?.list?.length),
    distinctUntilChanged((a, b) => a.list.length != b.list.length),
    map(({list}) => expensiveListTitle(list?.length))
  );

  sortedList$: Observable<ProductEntity[]> = this.componentState.select(
    selectSlice(['list', 'sortAsc']),
    map(({list, sortAsc}) => expensiveProductSort(list, sortAsc))
  );

  sortDirection$: Observable<SortDirections> = this.componentState.select(
    selectSlice(['sortAsc']),
    map(({sortAsc}) => sortAsc ? '👆' : '👇')
  );

  vm$: Observable<ComponentViewModel> = combineLatest({title: this.title$, list: this.sortedList$, sortDirection: this.sortDirection$ })

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
