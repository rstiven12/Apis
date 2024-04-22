import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './vistas/login/login.component';
import {DashboardComponent} from'./vistas/dashboard/dashboard.component';
import {EditarComponent} from'./vistas/editar/editar.component';
import { ContactosComponent } from './vistas/contactos/contactos.component';
import { PrivacidadComponent } from './vistas/privacidad/privacidad.component';
import { TarjetaComponent } from './vistas/tarjeta/tarjeta.component';
import { NotificacionComponent } from './vistas/notificacion/notificacion.component';
import { FormsComponent } from './vistas/forms/forms.component';
import { TiemposComponent } from './vistas/tiempos/tiempos.component';
import { DiagramaComponent } from './vistas/diagrama/diagrama.component';
import { NTComponent } from './vistas/nt/nt.component';
import { CardComponent } from './vistas/card/card.component';
import { VincularComponent } from './vistas/vincular/vincular.component';
import { ProfileComponent } from './vistas/profile/profile.component';
import { HelpComponent } from './vistas/help/help.component';
import { Alert2Component } from './vistas/alert2/alert2.component';
import { FacturasComponent } from './vistas/facturas/facturas.component';
import { TransacionesComponent } from './vistas/transaciones/transaciones.component';
import { CorreoComponent } from './vistas/correo/correo.component';
import { GmComponent } from './vistas/gm/gm.component';
import { PlanComponent } from './vistas/plan/plan.component';
import { MtComponent } from './vistas/mt/mt.component';
import { MtNotiComponent } from './vistas/mt-noti/mt-noti.component';
import { MapsComponent } from './vistas/maps/maps.component';
import { MapsNotiComponent } from './vistas/maps-noti/maps-noti.component';
import { MapsInicioComponent } from './vistas/maps-inicio/maps-inicio.component';
import { ChatsComponent } from './vistas/chats/chats.component';
import { VideoComponent } from './vistas/video/video.component';
import { ContactosProfileComponent } from './vistas/contactos-profile/contactos-profile.component';








const routes: Routes = [

  // lazy load para login
{ path: '', redirectTo: 'login', pathMatch: 'full' },
{ path: 'login', loadChildren: () => import('./vistas/login/login.module').then(m => m.LoginModule) },

  // lazy load para dashboard
{path: '', redirectTo: 'dashboard', pathMatch: 'full'},
{path: 'dashboard', loadChildren: ()=> import('./vistas/dashboard/dashboard.module').then(m =>m.dashboardgModule)},

  
// lazy load para tiempos
{path: '', redirectTo: 'tiempos', pathMatch: 'full' },
{path: 'tiempos', loadChildren: ()=> import('./vistas/tiempos/tiempos.module').then(m =>m.tiemposModule)},


// lazy load para tarjeta
{path: '', redirectTo: 'tarjeta', pathMatch: 'full'},
{path: 'tarjeta', loadChildren: ()=> import('./vistas/tarjeta/tarjeta.module').then(m =>m.tarjetaModule)},


// lazy load para privacidad
{path: '', redirectTo: 'privacidad', pathMatch: 'full'},
{path: 'privacidad', loadChildren: ()=> import('./vistas/privacidad/privacidad.module').then(m =>m.privacidadModule)},


// lazy load para notificacion
{path: '', redirectTo: 'notificacion', pathMatch: 'full'},
{path: 'notificacion', loadChildren: ()=> import('./vistas/notificacion/privacidad.module').then(m =>m.NotificacionModule)},

// lazy load para contactos
{path: '', redirectTo: 'contactos', pathMatch: 'full'},
{path: 'contactos', loadChildren: ()=> import('./vistas/contactos/contactos.module').then(m =>m.contactosModule)},

// lazy load para forms
{path: '', redirectTo: 'forms', pathMatch: 'full'},
{path: 'forms', loadChildren: ()=> import('./vistas/forms/forms.module').then(m =>m.FormsModule)},


// lazy load para alert2
{path: '', redirectTo:'alert2', pathMatch:'full' },
{path: 'alert2', loadChildren: ()=> import('./vistas/alert2/alert2.module').then(m =>m.alert2Module)},


// lazy load para card
{path: '', redirectTo: 'card', pathMatch:'full'},
{path: 'card', loadChildren: ()=> import('./vistas/card/card.module').then(m =>m.cardModule)},


// lazy load para diagrama
{path: '', redirectTo: 'diagrama', pathMatch:'full'},
{path: 'diagrama', loadChildren: ()=> import('./vistas/diagrama/diagrama.module').then(m =>m.diagramaModule)},



// lazy load para editar
{path: '', redirectTo: 'editar', pathMatch: 'full'},
{path: 'editar', loadChildren: ()=> import('./vistas/editar/editar.module').then(m =>m.editarModule)},



//lazy load para facturas
{path: '', redirectTo: 'facturas', pathMatch:'full'},
{path: 'facturas', loadChildren: ()=> import('./vistas/facturas/facturas.module').then(m =>m.facturasModule)},



//lazy load para help
{path: '', redirectTo: 'help', pathMatch: 'full'},
{path: 'help', loadChildren: ()=> import('./vistas/help/help.module').then(m =>m.helpModule)},



// lazy load para nt
{path: '', redirectTo: 'nt', pathMatch: 'full'},
{path: 'nt', loadChildren: ()=> import('./vistas/nt/nt.module').then(m => m.ntModule)},

//lazy load para profile
{path: '', redirectTo: 'profile', pathMatch: 'full'},
{path: 'profile', loadChildren: ()=> import('./vistas/profile/profile.module').then(m =>m.profileModule) },


//lazy load para vincular 
{path: '', redirectTo: 'vincular', pathMatch: 'full' },
{path: 'vincular', loadChildren: ()=> import('./vistas/vincular/vincular.module').then(m=>m.vincularModule)},

//lazy load para transaciones
{path: '', redirectTo: 'transaciones', pathMatch: 'full'},
{path: 'transaciones', loadChildren:()=> import('./vistas/transaciones/transaciones.module').then(m=>m.transacionesModule)},


// lazy load para correo
{path: '', redirectTo: 'correo', pathMatch: 'full' },
{path: 'correo', loadChildren:()=> import('./vistas/correo/correo.module').then(m=>m.correoModule)},



//lazy load para gm
{path:'', redirectTo: 'gm', pathMatch: 'full' },
{path: 'gm', loadChildren: ()=> import('./vistas/gm/gm.module').then(m=>m.gmModule)},


//lazy load para plan 
{path: '', redirectTo: 'plan', pathMatch: 'full'},
{path: 'plan', loadChildren: ()=> import('./vistas/plan/plan.module').then(m=>m.planModule)},

//lazy load para not
{path: '', redirectTo: 'not',  pathMatch: 'full'},
{path: 'not', loadChildren: ()=> import('./vistas/notp/not.module').then(m=>m.notModule)},

// LAZY LOAD DE MT

{path: '', redirectTo: 'mt', pathMatch: 'full'},
{path: 'mt', loadChildren: ()=> import('./vistas/mt/mt.module').then(m=>m.MTModule )},

//LAZY LOAD PARA MT-NOTI

{path: '', redirectTo: 'mt-noti', pathMatch: 'full'},
{path: 'mt-noti', loadChildren: ()=> import('./vistas/mt-noti/mt-noti.module').then(m=>m.MTnotiModule)},


//LAZY LOAD PARA MAPS

{path: '', redirectTo: 'maps', pathMatch: 'full'},
{path: 'maps', loadChildren: ()=> import('./vistas/maps/maps.module').then(m=>m.mapsModule)},


//LAZY LOAD PARA MAPS-INICIO

{path: '', redirectTo: 'maps-inicio', pathMatch: 'full'},
{path: 'maps-inicio', loadChildren: ()=> import('./vistas/maps-inicio/maps-inicio.module').then(m=>m.mapsInicioModule)},


//LAZY LOAD PARA MAPS-NOTI
{path: '', redirectTo: 'maps-noti', pathMatch: 'full'},
{path: 'maps-noti', loadChildren: ()=> import('./vistas/maps-noti/maps-noti.module').then(m=>m.mapsNotiModule)},




//LAZY LOAD PARA CHATS
{path: '', redirectTo: 'chats', pathMatch: 'full'},
{path: 'chats', loadChildren: ()=> import('./vistas/chats/chats.module').then(m=>m.chatsdModule)},


//LAZY LOAD PARA VIDEO
{path: '', redirectTo: 'video', pathMatch: 'full'},
{path: 'video', loadChildren: ()=>import('./vistas/video/video.module').then(m=>m.videoModule)},

//LAZY LOAD PARA CONTACTOS-PROFILE 
{path: '', redirectTo: 'contactos-profile', pathMatch: 'full'},
{path: 'contactos-profile', loadChildren:()=>import('./vistas/contactos-profile/contactos-profile.module').then(m=>m.contactosProfileModule)},

// componentes
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path: 'login', component:LoginComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'editar', component:EditarComponent},
  {path: 'tiempos', component:TiemposComponent },
  {path: 'contactos', component:ContactosComponent},
  {path: 'privacidad', component:PrivacidadComponent},
  {path: 'tarjeta', component:TarjetaComponent},
  {path: 'notificacion', component:NotificacionComponent},
  {path: 'forms', component:FormsComponent},
  {path: 'diagrama', component:DiagramaComponent},
  {path: 'nt', component:NTComponent},
  {path: 'card', component:CardComponent},
  {path: 'vincular', component:VincularComponent},
  {path: 'profile', component:ProfileComponent},  
  {path: 'help', component:HelpComponent},
  {path: 'alert2', component:Alert2Component},
  {path: 'facturas', component:FacturasComponent},
  {path: 'transaciones', component:TransacionesComponent},
  {path: 'correo', component:CorreoComponent},
  {path: 'gm', component:GmComponent},
  {path: 'plan', component:PlanComponent},
  {path: 'mt', component:MtComponent},
  {path:'mt-noti', component: MtNotiComponent},
  {path: 'maps', component: MapsComponent},
  {path: 'maps-noti', component: MapsNotiComponent},
  {path: 'maps-inicio', component:MapsInicioComponent},
  {path: 'chats', component:ChatsComponent},
  {path: 'video', component:VideoComponent},
  {path: 'contactos-profile',  component:ContactosProfileComponent},


  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent,DashboardComponent,EditarComponent,PlanComponent,
  GmComponent,CorreoComponent,TransacionesComponent,FacturasComponent,Alert2Component,HelpComponent,ProfileComponent,
  VincularComponent,CardComponent,NTComponent,DiagramaComponent,FormsComponent,NotificacionComponent,TarjetaComponent,
  PrivacidadComponent,ContactosComponent,TiemposComponent,MtComponent, MtNotiComponent, MapsComponent, MapsInicioComponent, MapsNotiComponent, ChatsComponent
,VideoComponent,ContactosProfileComponent]
