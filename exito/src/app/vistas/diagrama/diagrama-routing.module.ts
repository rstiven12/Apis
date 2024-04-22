import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DiagramaComponent} from './diagrama.component';

const routes: Routes = [{ path: '', component: DiagramaComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class diagramaRoutingModule { }
