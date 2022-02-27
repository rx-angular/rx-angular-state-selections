import {NgModule} from '@angular/core';
import {Solution3Component} from "./solution3.component";
import {LetModule} from "@rx-angular/template/let";
import {CommonModule} from "@angular/common";
import {WorkScamModule} from "../../shared/work/work.scam.module";
import {ForModule} from "@rx-angular/template/experimental/for";

@NgModule({
  declarations: [
    Solution3Component
  ],
  imports: [
    CommonModule,
    LetModule,
    ForModule,
    WorkScamModule
  ],
  exports: [Solution3Component]
})
export class Solution3ScamModule {
}
