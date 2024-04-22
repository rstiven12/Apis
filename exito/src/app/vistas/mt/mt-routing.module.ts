import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MtComponent} from '../mt/mt.component'

const routes: Routes = [{ path: '', component: MtComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MTRoutingModule { }
