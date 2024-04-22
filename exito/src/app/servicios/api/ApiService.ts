import { Injectable } from '@angular/core';
import { loginI } from '../../modelos/login.interface';
import { responseI } from '../../modelos/response.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListaTiemposI } from '../../modelos/ListaTiempos.interface';
import { responsableI } from '../../modelos/responsable.interface';
import * as crypto from "crypto-js";
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public
  url: string = 'https://pasarela.grupo-exito.com:9443';




  constructor(private http: HttpClient) { }
  static headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST: GET: OPTIONS: PUT",
    "CustomToken": "471fc422d45bf488b39286fb69ab468f7414d77aba776b2dd1d5bc6f1123e3b8427727d5cb50c474671b470fce31a4d02f1bee20b6031051c011c05b03d4cd22",
    Authorization: "Bearer",
  });




//  Consumo de api al Login
 loginByEmail(form: loginI): Observable<responseI> {
    let direccion = this.url + '/Login/EVTSG';
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' ,
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST: GET: OPTIONS: PUT",
      "CustomToken": "471fc422d45bf488b39286fb69ab468f7414d77aba776b2dd1d5bc6f1123e3b8427727d5cb50c474671b470fce31a4d02f1bee20b6031051c011c05b03d4cd22",
    });
    console.log(JSON.stringify(form))
    form.contrasena = crypto.SHA512(form.contrasena).toString();
    console.log(JSON.stringify(form))
    let result = this.http.post<responseI>(direccion, form);
    console.log(result);
    return result;
  }

 

 



 




//  Consumo de api de tiempos por tipo y valor
getTime(form: ListaTiemposI): Observable<responsableI> {
    let direccion = this.url + '/Automatizacion/Automatizacion/Tiempos/Apis/Dia/2';
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' ,
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST: GET: OPTIONS: PUT",
      "CustomToken": "471fc422d45bf488b39286fb69ab468f7414d77aba776b2dd1d5bc6f1123e3b8427727d5cb50c474671b470fce31a4d02f1bee20b6031051c011c05b03d4cd22",
    });
    let result = this.http.get<responsableI>(direccion, { headers: headers }).pipe(
      catchError((error: any) => {
        if (error.status === 401) {
          console.error('Error 401: No autorizado');
        }
        return throwError(error);
      })
    );
  
    console.log(result);
    return result;
  }
























  getSingleUser(id): Observable<responsableI> {
    let direccion = this.url + '';
    return this.http.get<responsableI>(direccion);
  }


  putUser(form: responsableI): Observable<responseI> {
    let direccion = this.url + '';
    return this.http.put<responseI>(direccion, form);
  }


  deleteUser(form: responsableI): Observable<responseI> {
    let direccion = this.url + '';
    let options = {
      Headers: new HttpHeaders({

      }),
      body: form
    };
    return this.http.delete<responseI>(direccion, options);
  }


  postUser(form: responsableI): Observable<responseI> {
    let direccion = this.url + '';
    return this.http.post<responseI>(direccion, form);
  }


}
