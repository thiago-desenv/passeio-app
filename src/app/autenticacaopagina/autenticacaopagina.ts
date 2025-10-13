import { Component } from '@angular/core';
import { Profile } from './profile.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autenticacaopagina',
  standalone: false,
  templateUrl: './autenticacaopagina.html',
  styleUrl: './autenticacaopagina.scss'
})
export class Autenticacaopagina {
  profile: Profile | undefined;

  constructor(private router: Router) { }

  navegar() {
    this.router.navigate(['/paginas/galeria']);
  }

  logar() {

  }

  isLogado(): boolean {
    return !!this.profile;
  }
}
