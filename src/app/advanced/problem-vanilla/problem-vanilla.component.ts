import {Component, OnDestroy, OnInit, TrackByFunction} from '@angular/core';
import {ProductsState} from "../../shared/products/product.state";
import {ProductEntity} from "../../shared/products/product.entity";
import {BehaviorSubject, Observable, Subscription} from "rxjs";
import {expensiveProductSort} from "../utils";

type SortDirections = '👆' | '👇';

@Component({
  selector: 'app-advanced-problem-vanilla',
  template: `
    <!--
    <h1>
      Here {{(sortedList$ | async)?.length > 1 ? 'is no' : 'are '}} {{(sortedList$ | async)?.length}}
      list item{{(sortedList$ | async)?.length > 1 ? "'s" : ''}}
    </h1>
    -->
    <h1>{{(sortedList$ | async)?.length | listTitle}}</h1>
    <h2>Sorted {{sortDirection}}</h2>
    <button (click)="sortAsc()" >👆</button>
    <button (click)="sortDesc()" >👇</button>
    <ul>
      <li *ngFor="let product of (sortedList$ | async); trackBy: trackById">{{product.name + " - " + product.value}}</li>
    </ul>
    <app-work></app-work>
  `
})
export class ProblemVanillaComponent implements OnInit, OnDestroy {
  subscription = new Subscription();

  sort = true;

  get sortDirection(): SortDirections {
    return this.sort ? '👆' : '👇';
  }

  _sortedList$$: BehaviorSubject<ProductEntity[]> = new BehaviorSubject<ProductEntity[]>([]);
  sortedList$: Observable<ProductEntity[]> = this._sortedList$$.asObservable();

  constructor(
    private globalProductState: ProductsState,
  ) {

  }

  toggleSort() {
    this.sort = !this.sort;
    this._sortedList$$.next(expensiveProductSort(this._sortedList$$.getValue(), this.sort));
  }

  sortAsc() {
    this.sort = true;
    this._sortedList$$.next(expensiveProductSort(this._sortedList$$.getValue(), this.sort));
  }
  sortDesc() {
    this.sort = false;
    this._sortedList$$.next(expensiveProductSort(this._sortedList$$.getValue(), this.sort));
  }

  ngOnInit() {
    this.subscription.add(
      this.globalProductState.products$
        .subscribe(
          list => this._sortedList$$.next(expensiveProductSort(list, this.sort))
        )
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  trackById: TrackByFunction<ProductEntity> = (idx: number, e: ProductEntity) => e.id;

}
