import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute}  from '@angular/router';
import {ListaTiemposI} from '../../modelos/ListaTiempos.interface'
import { ApiService } from 'src/app/servicios/api/ApiService';
import {FormGroup, FormControl , Validators} from '@angular/forms';
import { responseI } from 'src/app/modelos/response.interface';
import {AlertasService}from '../../servicios/alertas/alertas.service';
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  constructor (private Activerouter: ActivatedRoute, private router:Router, private api:ApiService, private alertas:AlertasService) {}
  
  datosUsuario:ListaTiemposI;
  editarForm = new FormGroup({
      
    origen: new FormGroup(''),
    destino: new FormGroup(''),
    fecha: new FormGroup(''),
    hora: new FormGroup(''),
    tiempoRespuesta: new FormGroup(''),
    codigoRespuesta: new FormGroup(''),
    tipo:new FormGroup(''),
    nacional: new FormGroup(''),
    
    
});

  ngOnInit(): void {
    let usuarioid = this.Activerouter.snapshot.paramMap.get('id');
    this.api.getSingleUser(usuarioid).subscribe(data =>{
            this.datosUsuario = data[0];
            this.editarForm.setValue({
              'origen': this.datosUsuario.origen,
              'destino': this.datosUsuario.destino,
              'fecha': this.datosUsuario.fecha,
              'hora': this.datosUsuario.hora,
              'tiempoRespuesta': this.datosUsuario.tiempoRespuesta,
              'codigoRespuesta': this.datosUsuario.codigoRespuesta,
              'tipo': this.datosUsuario.tipo,
              'nacional': this.datosUsuario.nacional,
             
              
            })
   })
   
    
  }


getToken(){
  return localStorage.getItem('token')
}


postForm(form:  any){

  this.api.putUser(form).subscribe(data =>{
    let respuesta:responseI = data;
if(respuesta.token == "OK"){
this.alertas.showSucces('Datos Modificados', 'Hecho');

}else{
  this.alertas.showError(respuesta.expiration.error_msg, 'Error')
}
  })
  
}
eliminar(){
  let datos: any = this.editarForm.value;
  this.api.deleteUser(datos).subscribe(data => {
    let respuesta:responseI = data;
    if(respuesta.token == "OK"){
    this.alertas.showSucces('Usuario Eliminado', 'Hecho');
    this.router.navigate(['dashboard']);
    }else{
      // this.alertas.showError(respuesta.expiration.error_msg, 'Error');
    }
  })
}

Salir(){
  this.router.navigate(['dashboard']);
}

}
