import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VincularComponent} from './vincular.component';

const routes: Routes = [{ path: '', component: VincularComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class vincularRoutingModule { }
