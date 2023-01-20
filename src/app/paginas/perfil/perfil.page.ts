import { Component } from '@angular/core';
import { AuthService } from 'src/app/servicio/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage {
  public perfil! : AuthService;

  constructor() {}



}
