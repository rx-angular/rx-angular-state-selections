import {Component} from '@angular/core';
import {work} from "./work";

@Component({
  selector: 'app-work',
  template: `
    <b>{{render}}<b>
  `
})
export class WorkComponent {
  _render = 0;
  get render(): number {
    console.log('Template evaluation triggered')
    work();
    return ++this._render;
  }
}
