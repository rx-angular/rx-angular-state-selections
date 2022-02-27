import {Component} from '@angular/core';
import {work} from "./work";

@Component({
  selector: 'app-work',
  template: `
    {{work}}
    <app-num-renders></app-num-renders>
  `
})
export class WorkComponent {
  get work(): undefined {
    console.log('template evaluation work triggered')
    work();
    return undefined;
  }
}
