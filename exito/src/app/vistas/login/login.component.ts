import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { ApiService } from 'src/app/servicios/api/ApiService';
import {loginI} from '../../modelos/login.interface';
import {Router} from '@angular/router';
import {responseI} from '../../modelos/response.interface';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  public loginForm = new FormGroup({
    usuario: new FormControl('', Validators.required),
  contrasena: new FormControl('', Validators.required)
  })
constructor(private api:ApiService, private router:Router ){}

errorStatus:boolean = false;
errorMsj:any = "";



ngOnInit(): void {
  this.checkLocalStorage
}

checkLocalStorage() {
  console.log("token");
  if (localStorage.getItem("token")) {
    const token = localStorage.getItem("token");

    // Abre un modal o popup
    const modal = document.getElementById("token-modal");
    modal.style.display = "block";
    // Muestra el token dentro del modal
    document.getElementById("token-modal-content").textContent = token;
  } else {
    // Muestra un mensaje indicando que no hay token
    console.log("No hay token almacenado");
  }
}


onLogin(form: any){

  this.api.loginByEmail(form).subscribe(data =>{
    let dataResponse: responseI = data;

    // Asigna "true" al token por ahora, asumo que es un string por tu comparación
    dataResponse.token = "";

    // Agrega las nuevas propiedades vacías
    dataResponse.expiration = null;
    dataResponse.roles = "";
    dataResponse.modulos = "";

    // Continúa con tu lógica existente
    if (dataResponse.token == "") {
      localStorage.setItem("token", dataResponse.token);
      this.router.navigate(['dashboard']);
    } else {
      this.errorStatus = true;
      this.errorMsj = dataResponse.token;
    }
  })
}

    
  
    
   }

