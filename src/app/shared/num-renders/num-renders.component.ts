import {Component} from '@angular/core';

@Component({
  selector: 'app-num-renders',
  template: `
    <b>{{render}}<b>
  `
})
export class NumRendersComponent {
  _render = 0;
  get render(): number {
    return ++this._render;
  }
}
