import {NgModule} from '@angular/core';
import {WorkComponent} from "./work.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    WorkComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [WorkComponent]
})
export class WorkScamModule {
}
