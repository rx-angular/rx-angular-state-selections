import {Injectable} from '@angular/core';
import {RxState} from "@rx-angular/state";
import {ProductEntity} from "./product.entity";
import {ProductResource} from "./internal/product.resource";
import {exhaustMap, Subject} from "rxjs";

interface ProductsStateModel {
  products: ProductEntity[]
}

@Injectable({
  providedIn: 'root'
})
export class ProductsState extends RxState<ProductsStateModel> {
  private refreshProducts$$ = new Subject<true>();
  products$ = this.select('products');

  constructor(private productResource: ProductResource) {
    super();
    // many global state libs force us to set an initial value.
    this.set({products: []});

    this.connect('products', this.refreshProducts$$.pipe(
      // avoid race conditions and over-fetching
      exhaustMap(() => this.productResource.getProducts()),
    ));

    this.refreshProducts();
  }

  refreshProducts() {
    this.refreshProducts$$.next(true);
  }
}
