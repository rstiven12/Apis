import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotpComponent} from './notp.component';

const routes: Routes = [{ path: '', component: NotpComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class notRoutingModule { }
