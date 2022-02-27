import {NgModule} from '@angular/core';
import {Solution3Component} from "./solution3.component";
import {LetModule} from "@rx-angular/template/let";
import {CommonModule} from "@angular/common";
import {WorkScamModule} from "../../shared/work/work.scam.module";
import {ForModule} from "@rx-angular/template/experimental/for";
import {UnpatchModule} from "@rx-angular/template/unpatch";

@NgModule({
  declarations: [
    Solution3Component
  ],
  imports: [
    CommonModule,
    LetModule,
    ForModule,
    UnpatchModule,
    WorkScamModule
  ],
  exports: [Solution3Component]
})
export class Solution3ScamModule {
}
