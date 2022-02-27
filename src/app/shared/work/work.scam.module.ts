import {NgModule} from '@angular/core';
import {WorkComponent} from "./work.component";
import {CommonModule} from "@angular/common";
import {NumRendersScamModule} from "../num-renders/num-renders.scam.module";

@NgModule({
  declarations: [
    WorkComponent
  ],
  imports: [
    CommonModule,
    NumRendersScamModule
  ],
  exports: [WorkComponent]
})
export class WorkScamModule {
}
