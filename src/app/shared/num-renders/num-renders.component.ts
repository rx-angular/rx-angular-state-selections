import {Component, ElementRef} from '@angular/core';

@Component({
  selector: 'app-num-renders',
  template: `
    {{render}}
  `
})
export class NumRendersComponent {
  _render = 0;
  get render(): undefined {
    this.elRef.nativeElement.innerHTML = ++this._render;
    return undefined;
  }

  constructor(private elRef: ElementRef) {

  }

}
