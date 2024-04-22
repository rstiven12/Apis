import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MapsNotiComponent} from './maps-noti.component';

const routes: Routes = [{ path: '', component: MapsNotiComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class mapsNotiRoutingModule { }
