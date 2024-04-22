import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GmComponent} from './gm.component';

const routes: Routes = [{ path: '', component: GmComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class gmRoutingModule { }
