import {NgModule} from '@angular/core';
import {ProblemVanillaComponent} from "./problem-vanilla.component";
import {CommonModule} from "@angular/common";
import {ListTitlePipeScamModule} from "../list-title.pipe.module";
import {LetModule} from "@rx-angular/template/let";
import {WorkScamModule} from "../../shared/work/work.scam.module";

@NgModule({
  declarations: [
    ProblemVanillaComponent
  ],
  imports: [
    CommonModule,
    ListTitlePipeScamModule,
    WorkScamModule
  ],
  exports: [ProblemVanillaComponent]
})
export class ProblemVanillaScamModule {
}
