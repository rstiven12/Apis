import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MtNotiComponent} from '../mt-noti/mt-noti.component'

const routes: Routes = [{ path: '', component: MtNotiComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MtNotiRoutingModule { }
