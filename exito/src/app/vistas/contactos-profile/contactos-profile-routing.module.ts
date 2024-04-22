import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactosProfileComponent} from './contactos-profile.component';

const routes: Routes = [{ path: '', component: ContactosProfileComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class contactosProfileRoutingModule { }
