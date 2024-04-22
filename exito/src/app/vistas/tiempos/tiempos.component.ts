import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api/ApiService';
import { Router } from '@angular/router';
import {ListaTiemposI} from '../../modelos/ListaTiempos.interface';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { responsableI } from 'src/app/modelos/responsable.interface';
import { ReactiveFormsModule } from '@angular/forms';




@Component({
  selector: 'app-tiempos',
  templateUrl: './tiempos.component.html',
  styleUrls: ['./tiempos.component.css']
})
export class TiemposComponent implements OnInit {


public TiempoForm = new FormGroup({
  CustomToken: new FormControl('', Validators.required),
  Tipo: new FormControl('', Validators.required),
  Valor: new FormControl('', Validators.required)
})


  Tiempo: ListaTiemposI[];

  constructor(private api: ApiService, private router: Router, private ReactiveFormsModule: ReactiveFormsModule) {}

  ngOnInit(): void {
    this.checkLocalStorage(); 
  }
  checkLocalStorage() {
    console.log("token");
    if (localStorage.getItem("token")) {
      const token = localStorage.getItem("token");
  
      const modal = document.getElementById("token-modal");
      modal.style.display = "block";
  
      document.getElementById("token-modal-content").textContent = token;
    } else {
      console.log("No hay token almacenado");
    }
  }
  



onTime(form: any){
this.api.getTime(form).subscribe(data =>{
    let dataResponse: responsableI = data;
    dataResponse.tiempo = "";
    dataResponse.nombreApi = "";
    dataResponse.codigoRespuesta = "";
    dataResponse.error = "";
    dataResponse.destino = "";
    dataResponse.locationId = "";
    dataResponse.roudTrip = "";
    dataResponse.fechaRegistro = "";
    dataResponse.nacional = "";
    if (dataResponse.codigoRespuesta !== "") {
      localStorage.setItem("codigoRespuesta", dataResponse.codigoRespuesta);
      this.router.navigate(['tiempos']);
    } else {
      console.log("No se proporcionó un token válido");
    }
    

    

     {
      
    }  {
     
    }
  })
}
}
