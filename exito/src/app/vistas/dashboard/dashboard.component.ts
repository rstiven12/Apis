import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api/ApiService';
import {Router} from '@angular/router';
import {ListaTiemposI}  from '../../modelos/ListaTiempos.interface';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  cookieAccepted: boolean;
  
  
  slider
  defaultTransform
   goNext() {
    this.defaultTransform = this.defaultTransform - 398;
    if (Math.abs(this.defaultTransform) >= this.slider.scrollWidth / 1.7) this.defaultTransform = 0;
    this.slider.style.transform = "translateX(" + this.defaultTransform + "px)";
}


 



  constructor(private api:ApiService, private router:Router ) {
  }

  goPrev() {
   
    if (Math.abs(this.defaultTransform) === 0) this.defaultTransform = 0;
    else this.defaultTransform = this.defaultTransform + 398;
    this.slider.style.transform = "translateX(" + this.defaultTransform + "px)";
}
 

  ngOnInit(): void {
    this.slider = document.getElementById("slider");
    this.defaultTransform=0;
    
  }





  usuarios:ListaTiemposI[];




 

  editarUsuario(id: any){
    this.router.navigate(['editar', id])
  }

  NuevoUsuario(){
this.router.navigate(['nuevo']);
  }
 

  

}
