import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ListTitlePipe} from './advanced/list-title.pipe';
import {RouterModule} from "@angular/router";
import {ProblemVanillaScamModule} from "./advanced/problem-vanilla/problem-vanilla.scam.module";
import {ProblemVanillaComponent} from "./advanced/problem-vanilla/problem-vanilla.component";
import {ProblemComponent} from "./advanced/problem/problem.component";
import {ProblemScamModule} from "./advanced/problem/problem.scam.module";
import {Solution1Component} from "./advanced/solution1/solution1.component";
import {Solution1ScamModule} from "./advanced/solution1/solution1.scam.module";
import {Solution2ScamModule} from "./advanced/solution2/solution2.scam.module";
import {Solution2Component} from "./advanced/solution2/solution2.component";
import {Solution3ScamModule} from "./advanced/solution3/solution3.scam.module";
import {Solution3Component} from "./advanced/solution3/solution3.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProblemVanillaScamModule,
    ProblemScamModule,
    Solution1ScamModule,
    Solution2ScamModule,
    Solution3ScamModule,
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'problem1'
      },
      {
        path: 'problem1',
        component: ProblemVanillaComponent
      },
      {
        path: 'problem2',
        component: ProblemComponent
      },
      {
        path: 'solution1',
        component: Solution1Component
      },
      {
        path: 'solution2',
        component: Solution2Component
      },
      {
        path: 'solution3',
        component: Solution3Component
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
