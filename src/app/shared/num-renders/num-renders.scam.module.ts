import {NgModule} from '@angular/core';
import {NumRendersComponent} from "./num-renders.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    NumRendersComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [NumRendersComponent]
})
export class NumRendersScamModule {
}
