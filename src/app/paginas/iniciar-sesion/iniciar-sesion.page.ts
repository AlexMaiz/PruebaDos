import { Component } from '@angular/core';
import { Auth,AuthResponse} from './../../modelos/auth';
import { AuthService } from './../../servicio/auth.service';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.page.html',
  styleUrls: ['./iniciar-sesion.page.scss'],
})
export class IniciarSesionPage {
  public formulario! : FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    public auth : AuthService,
  ) { }

  ionViewWillEnter(){
    this.formulario = this.formBuilder.group({
      username: ['kminchelle', Validators.required],
      password: ['0lelplR', Validators.required],
  })
  }
  public enviar(){
    this.auth.Auth({
      username  :this.formulario.value['username'],
      password  :this.formulario.value['password'],
    })

  }



}
