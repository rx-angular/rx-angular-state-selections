import {NgModule} from '@angular/core';
import {ProblemComponent} from "./problem.component";
import {LetModule} from "@rx-angular/template/let";
import {CommonModule} from "@angular/common";
import {WorkScamModule} from "../../shared/work/work.scam.module";

@NgModule({
  declarations: [
    ProblemComponent
  ],
  imports: [
    CommonModule,
    LetModule,
    WorkScamModule
  ],
  exports: [ProblemComponent]
})
export class ProblemScamModule {
}
