import {NgModule} from '@angular/core';
import {Solution2Component} from "./solution2.component";
import {LetModule} from "@rx-angular/template/let";
import {CommonModule} from "@angular/common";
import {WorkScamModule} from "../../shared/work/work.scam.module";

@NgModule({
  declarations: [
    Solution2Component
  ],
  imports: [
    CommonModule,
    LetModule,
    WorkScamModule
  ],
  exports: [Solution2Component]
})
export class Solution2ScamModule {
}
