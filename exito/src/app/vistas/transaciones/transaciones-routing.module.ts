import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TransacionesComponent} from './transaciones.component';

const routes: Routes = [{ path: '', component: TransacionesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class transacionesRoutingModule { }
