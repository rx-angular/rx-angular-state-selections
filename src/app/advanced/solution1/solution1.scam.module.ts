import {NgModule} from '@angular/core';
import {Solution1Component} from "./solution1.component";
import {LetModule} from "@rx-angular/template/let";
import {CommonModule} from "@angular/common";
import {WorkScamModule} from "../../shared/work/work.scam.module";

@NgModule({
  declarations: [
    Solution1Component
  ],
  imports: [
    CommonModule,
    LetModule,
    WorkScamModule
  ],
  exports: [Solution1Component]
})
export class Solution1ScamModule {
}
