import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

import { LoginI } from '../../modelo/login.interface';
import { ResponseI } from '../../modelo/response.interface';

import { ListacargosI } from '../../modelo/listacargos.interface';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url : string = "http://localhost:8090/museo/"

  constructor(private http:HttpClient) { }

  LoginUser(form:LoginI):Observable<ResponseI>{
    let direccion = this.url + "login";
    return this.http.post<ResponseI>(direccion,form)
  }

  getAllCargos():Observable<ListacargosI[]>{
    let direccion = this.url + "cargo/listar"
    return this.http.get<ListacargosI[]>(direccion);

  }



}
