import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TiemposComponent} from './tiempos.component';

const routes: Routes = [{ path: '', component: TiemposComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class tiemposRoutingModule { }
