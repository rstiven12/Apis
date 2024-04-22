import { Injectable } from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor(private toast:ToastrService) { }


  showSucces(titulo, texto){
    this.toast.success(texto,titulo);
  }

    showError(titulo, texto){
      this.toast.error(texto,titulo);
  }

}
