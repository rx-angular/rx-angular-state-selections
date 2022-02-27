import {Injectable} from '@angular/core';
import {ProductEntity} from "../product.entity";
import {map, Observable, of, delay} from "rxjs";
import {asyncScheduler} from "@rx-angular/cdk/zone-less/rxjs";
import {ProductGetDto} from "./product-get.dto";
import {serverDotToClientEntity} from "./product.mapper";
// Fake data
let id = -1;
const dummyServerResult = (): ProductGetDto[] => ([
  { id: ++id, name: 'A'+id, value: (id/Math.random()) + 5.0000000000000000000000000000000000000000000000000000000000000000001, creationDate: Date.now()/1000 },
  { id: ++id, name: 'C'+id, value: (id/Math.random()) + 6.0000000000000000000000000000000000000000000000000000000000000000001, creationDate: Date.now()/1000},
  { id: ++id, name: 'E'+id, value: (id/Math.random()) + 7.0000000000000000000000000000000000000000000000000000000000000000001, creationDate: Date.now()/1000},
  { id: ++id, name: 'F'+id, value: (id/Math.random()) + 8.0000000000000000000000000000000000000000000000000000000000000000001, creationDate: Date.now()/1000},
  { id: ++id, name: 'D'+id, value: (id/Math.random()) + 9.0000000000000000000000000000000000000000000000000000000000000000001, creationDate: Date.now()/1000},
  { id: ++id, name: 'B'+id, value: (id/Math.random()) + 10.0000000000000000000000000000000000000000000000000000000000000000001, creationDate: Date.now()/1000}
].concat(Math.random() < 0.5 ? [] : [
  { id: ++id, name: 'H'+id, value: (id/Math.random()) + 12.0000000000000000000000000000000000000000000000000000000000000000001, creationDate: Date.now()/1000},
  { id: ++id, name: 'G'+id, value: (id/Math.random()) + 11.0000000000000000000000000000000000000000000000000000000000000000001, creationDate: Date.now()/1000}
]));

const searchParams = (): Record<string, string>  => window.location.search.slice(1).split(';').map(p => p.split('=')).reduce((a,[k, v]) => ({...a, [k]:v}),{});
const delayMs = searchParams()['d'] ? parseInt(searchParams()['d']) : 700;
@Injectable({
  providedIn: 'root'
})
export class ProductResource {

  getProducts(): Observable<ProductEntity[]> {
    // `HttpClient#get` would be used in real life here
    return of(dummyServerResult()).pipe(
      map(serverDots => serverDots.map(serverDotToClientEntity)),
      delay(delayMs, asyncScheduler)
    )
  }

  constructor() {

  }

}
