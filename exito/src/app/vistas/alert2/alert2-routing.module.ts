import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Alert2Component} from './alert2.component';
const routes: Routes = [{ path: '', component: Alert2Component}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class alertRoutingModule { }
