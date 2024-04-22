import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './plantilla/header/header.component';
import { FooterComponent } from './plantilla/footer/footer.component';
import { ReactiveFormsModule,FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoginModule } from './vistas/login/login.module';
import { LoginComponent } from './vistas/login/login.component';
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
import { NotpComponent } from './vistas/notp/notp.component';
import { MtComponent } from './vistas/mt/mt.component';
import { MtNotiComponent } from './vistas/mt-noti/mt-noti.component';
import { MapsComponent } from './vistas/maps/maps.component';
import { MapsNotiComponent } from './vistas/maps-noti/maps-noti.component';
import { MapsInicioComponent } from './vistas/maps-inicio/maps-inicio.component';
import { ChatsComponent } from './vistas/chats/chats.component';
import { VideoComponent } from './vistas/video/video.component';
import { ContactosProfileComponent } from './vistas/contactos-profile/contactos-profile.component';











@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routingComponents,
    LoginComponent,
    ContactosComponent,
    PrivacidadComponent,
    TarjetaComponent,
    NotificacionComponent,
    FormsComponent,
    TiemposComponent,
    DiagramaComponent,
    NTComponent,
    CardComponent,
    VincularComponent,
    ProfileComponent,
    HelpComponent,
    Alert2Component,
    FacturasComponent,
    TransacionesComponent,
    CorreoComponent,
    GmComponent,
    PlanComponent,
    NotpComponent,
    MtComponent,
    MtNotiComponent,
    MapsComponent,
    MapsNotiComponent,
    MapsInicioComponent,
    ChatsComponent,
    VideoComponent,
    ContactosProfileComponent,
       
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    LoginModule,
  ],


  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
