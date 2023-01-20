import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router     } from '@angular/router';
import { Auth, AuthResponse } from '../modelos/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private URL_LOGIN = 'https://dummyjson.com/auth/login';
  private token : string | undefined = '';
  private usuarioCargado : boolean = false;
  public datosUsuario! : AuthResponse | any;

  constructor(
    private http  : HttpClient,
    private router: Router,
  ) {}
  public Auth({username, password}:Auth){
    this.usuarioCargado = true;
    this.http.post(this.URL_LOGIN,{
      username,
      password
    },
    {
      headers : {'content-type'  : 'application/json'}
    }).subscribe(async(datos)=>{
      this.usuarioCargado = true;
      this.datosUsuario = datos;
      this.token = this.datosUsuario.token;
      await this.router.navigate(['/perfil'])
      console.log(this.datosUsuario);
    })

  }
  public obtenerDatosUsuario(){
    return this.datosUsuario;
  }
  public ObtenerToken(){
    return this.token;
  }
  public ObtenerCargando() {
    return this.usuarioCargado;
  }
}
